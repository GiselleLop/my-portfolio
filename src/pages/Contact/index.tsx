import { ContactForm } from "./components/ContactForm";
import { SocialMedia } from "./components/SocialMedia";
import style from "./Contact.module.css";

export const ContactPage = () => {

    const socialMediaData: {icon: string, name: string, link: string}[] = [
        {icon: "pi pi-linkedin", name: "Linkedin", link: "https://www.linkedin.com/in/giselle-lopez-c"}, 
        {icon: "pi pi-github", name: "Github", link: "https://github.com/GiselleLop" }
    ]
    
    return (
        <section id="contact" data-route="/contact" className={style.contact_main}>
            <ContactForm onSendMessage={""}></ContactForm>
            <SocialMedia icons={socialMediaData}></SocialMedia>
        </section>
    );
};
