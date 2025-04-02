import React from "react";
import style from "./SocialMedia.module.css";
import 'primeicons/primeicons.css';

type SocialMediaProps = {
   icons: {icon: string, name: string, link: string}[]
};

export const SocialMedia = React.forwardRef<HTMLInputElement, SocialMediaProps>(
    ({ icons }) => {
        return (
            <div className={style.social_cont_main}>
                <div className={style.cont_email}>
                    <h1 className={style.title_sub}>CONTACT</h1>
                    <div className={style.email_content}>
                        <i className="pi pi-envelope" style={{ fontSize: '15px'}}></i>
                        <p className={style.email}> gisellealex346@gmail.com</p>
                    </div>
                </div>

                <div className={style.socialm_cont}>
                    <h1 className={style.title_sub}>SOCIAL MEDIA</h1>

                    <div className={style.icon_cont}>
                    {icons.length > 0 && icons.map((item, index) => (
                        <a key={index} href={item.link} target="_blank}" rel="noopener noreferrer" className={style.social_icon}>
                            <i className={item.icon} style={{ fontSize: '20px'}}></i>
                        </a>
                    ))}
                    </div>
                    
                </div>

            </div>
        )
    })