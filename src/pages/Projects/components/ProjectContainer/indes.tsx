import React from "react";
import style from "./ProjectContainer.module.css";
import 'primeicons/primeicons.css';

type ProjectContainerProps = {
    title: string,
    resume: string,
    image: string,
    starTop: boolean,
    isComputer?: boolean,
    isTablet?: boolean,
    isPhone?: boolean,
    siteLink: string,
    repositoryLink: string
};

export const ProjectContainer = React.forwardRef<HTMLInputElement, ProjectContainerProps>(
    ({ title, resume, image, starTop, isComputer, isPhone, isTablet, siteLink, repositoryLink }) => {

        // const [isComputer, setIsComputer] = useState<boolean>(false);
        // const [isTablet, setIsTablet] = useState<boolean>(false);
        // const [isPhone, setIPhone] = useState<boolean>(false);

        // useEffect(() => {

        // }, [isComputer, isTablet, isPhone])

        return (
            <div className={style.project_container_main}>
                <img
                    src="..\src\assets\images\star.png"
                    className={`${style.star} ${starTop ? style.star_bigTop : style.star_bigBottom}`}
                />
                <img
                    src="..\src\assets\images\star.png"
                    className={`${style.star} ${starTop ? style.star_smallTop : style.star_smallBottom}`}
                />
                <div className={style.container_on}>
                    <div className={style.project_text_container}>
                        <h1 className={style.project_title}>{title}</h1>
                        <p className={style.project_resume}>{resume}</p>
                    </div>

                    <div className={style.button_container}>
                        <button
                            className={style.button_link}
                            onClick={() => window.open(siteLink, "_blank", "noopener,noreferrer")}
                        >
                            <i className="pi pi-link" style={{ fontSize: '20px' }}></i>
                            <h1 className={style.button_text}>View site</h1>
                        </button>
                        <button
                            className={style.button_link}
                            onClick={() => window.open(repositoryLink, "_blank", "noopener,noreferrer")}
                        >
                            <i className="pi pi-github" style={{ fontSize: '20px' }}></i>
                            <h1 className={style.button_text}>Repository</h1>
                        </button>
                    </div>

                    <div className={style.project_image_container}>
                        {isComputer ? (
                            <>
                                <img src="..\src\assets\images\comp.png" style={{
                                    height: "150px",
                                    position: "absolute",
                                    zIndex: 2,
                                }} />
                                <img src={image} style={{
                                    height: "125px",
                                    position: "relative",
                                    zIndex: 1,
                                }} />
                            </>
                        ) : null}
                    </div>
                </div>

            </div >

        );
    },
);