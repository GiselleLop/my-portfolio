import style from "./About.module.css";

export const AboutPage = () => {
    return (
        <>
            <section id="about" data-route="/about" className={style.about_main}>
                <div className={style.container_main}>
                    <h2 className={style.sub_title}>About me</h2>
                    <div className={style.about_resume_container}>
                        <img src="..\src\assets\images\star.png" className={`${style.star} ${style.star_big1}`} />
                        <img src="..\src\assets\images\star.png" className={`${style.star} ${style.star_small1}`} />
                        <p className={style.about_resume}>My journey into technology has been primarily self-taught, which has allowed me to discover my ability to contribute to the creation of amazing web applications. This experience has given me the opportunity to merge my creativity with problem-solving, two aspects I consider fundamental to my professional approach.</p>
                        <img src="..\src\assets\images\star.png" className={`${style.star} ${style.star_small2}`} />
                        <img src="..\src\assets\images\star.png" className={`${style.star} ${style.star_big2}`} />
                    </div>
                </div>

                <div className={style.container_main}>
                    <h2 className={style.sub_title}>My Skills</h2>
                    <ul className={style.skills_container}>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JS</li>
                        <li>React</li>
                        <li>Angular</li>
                        <li>Node.js</li>
                        <li>TS</li>
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>RDBMS</li>
                    </ul>
                </div>


            </section>
        </>
    );
};
