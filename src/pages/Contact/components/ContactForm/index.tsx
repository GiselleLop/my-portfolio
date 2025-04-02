import React from "react";
import style from "./ContactForm.module.css";
import 'primeicons/primeicons.css';

type ContactFormProps = {
    onSendMessage: any
};

export const ContactForm = React.forwardRef<HTMLInputElement, ContactFormProps>(
    ({ onSendMessage }) => {
        return (
            <div className={style.contact_form_container_main}>
               
                <div className={style.title_container}>
                    <h1 className={style.title}>Contact Form</h1>
                </div>
                
                <form className={style.form_cont}>
                    <div className={style.cont_lab}>
                        <label htmlFor="name">Name:</label>
                        <input className={style.input_form} type="text" name="name" id="name"></input>
                    </div>
                    
                    <div className={style.cont_lab}>
                        <label htmlFor="email">Email:</label>
                        <input className={style.input_form} type="email" name="email" id="email"></input>
                    </div>
                    
                    <div className={style.cont_lab}>
                        <label htmlFor="message">Message:</label>
                        <input className={style.input_form} type="text" name="message" id="message"></input>    
                    </div>
                   
                    <button className={style.submit_btn}>
                        <h1 className={style.btn_text} >Send message</h1>
                        <i className="pi pi-send"  style={{ fontSize: '15px', color: 'white' }}></i>
                    </button>
                </form>
            </div>
        )
    })