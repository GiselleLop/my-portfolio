import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import style from "./ContactForm.module.css";
import Swal from "sweetalert2";
import 'primeicons/primeicons.css';

type ContactFormProps = {
};

export const ContactForm = React.forwardRef<HTMLInputElement, ContactFormProps>(
    () => {
        const [formData, setFormData] = useState({
            name: "",
            email: "",
            message: "",
        });
        const [emailError, setEmailError] = useState<string>("");
        const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
        const [isLoading, setIsLoading] = useState<boolean>(false);

        const showSuccessAlert = () => {
            Swal.fire({
              title: 'Message sent!',
              text: 'Your message has been sent successfully.',
              icon: 'success',
              confirmButtonText: 'Ok',
              customClass: {
                title: 'custom-title',
                popup: 'custom-popup',
                confirmButton: 'custom-confirm-button',
              },
              showCancelButton: false, 
            });
        };

        const showErrorAlert = () => {
            Swal.fire({
                title: 'Error!', 
                text: 'The message could not be sent. Please try again.',
                icon: 'error',            
                confirmButtonText: 'Ok', 
                customClass: {
                    title: 'custom-title', 
                    popup: 'custom-popup', 
                    confirmButton: 'custom-confirm-button', 
                },
                showCancelButton: false,
            });
        };
          
        
        const validateEmail = (value: string) => {
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailPattern.test(value)) {
              setEmailError("Please enter a valid email address.");
            } else {
              setEmailError("");
            }
            checkFormValidity();
        };
      
        const checkFormValidity = () => {
            const { name, email, message } = formData;
            setIsButtonDisabled(!(name && email && message && !emailError));
        };

        const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const { name, value } = e.target;
            if (name === "name") {
                const cleanedValue = value.replace(/[^a-zA-Z\s]/g, "");
                setFormData((prev) => ({ ...prev, [name]: cleanedValue }));
            } else {
                setFormData((prev) => ({ ...prev, [name]: value }));
            }
        
            if (name === "email") validateEmail(value);
            checkFormValidity();
        };
      
          
        const handleSubmit = async (e: React.FormEvent) => {
            e.preventDefault();
            setIsLoading(true) 
            try {
                await emailjs.send(
                    "service_fyu4vz2",
                    "template_mc6b94l", 
                    formData,
                    "eh00jltmXMiYuRWEl"    
                );
                showSuccessAlert()
                setFormData({ name: "", email: "", message: "" });
                setIsButtonDisabled(true);
            } catch (error) {
                showErrorAlert()
            } finally {
                setIsLoading(false);
            }
        };

        return (
            <div className={style.contact_form_container_main}>
               
                <div className={style.title_container}>
                    <h1 className={style.title}>Contact Form</h1>
                </div>
                
                <form className={style.form_cont} onSubmit={handleSubmit}>
                    <div className={style.cont_lab}>
                        <label htmlFor="name">Name:</label>
                        <input 
                        className={style.input_form} 
                        type="text" 
                        name="name" 
                        id="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        />
                    </div>
                    
                    <div className={style.cont_lab}>
                        <label htmlFor="email">Email:</label>
                        <input 
                        className={style.input_form} 
                        type="email" 
                        name="email" 
                        id="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onBlur={() => validateEmail(formData.email)}
                        />
                        {emailError && <p className={style.error_message}>{emailError}</p>}
                    </div>
                    
                    <div className={style.cont_lab}>
                        <label htmlFor="message">Message:</label>
                        <input 
                        className={style.input_form} 
                        type="text" 
                        name="message" 
                        id="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        />    
                        <p className={style.char_count}> {formData.message.length}/200 characters</p>
                    </div>
                   
                    <button 
                    className={`${style.submit_btn} ${isButtonDisabled ? style.submit_btn_disabled : ""}`}
                    disabled={isButtonDisabled}>
                    
                    {isLoading ? (
                        <i className="pi pi-spin pi-spinner" style={{ fontSize: "20px", color: "white" }}></i>
                    ) : (
                        <>
                        <h1 className={style.btn_text}>Send</h1>
                        <i className={`pi pi-send ${style.send_icon}`}></i>
                        </>
                    )}
                      
                    </button>

                    
                </form>
            </div>
        )
    })