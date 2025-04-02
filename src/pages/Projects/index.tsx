import { ProjectContainer } from "./components/ProjectContainer/indes";
import style from "./Projects.module.css";
import textA from "../../assets/images/TextAnalyzer.png"
import plantApp from "../../assets/images/plantApp.png"
import DataLovers from "../../assets/images/DataLovers.png"
import MovieChallenge from "../../assets/images/MovieChallengeWireframe.png"

export const ProjectsPage = () => {
    return (
        <>
            <section id="projects" data-route="/projects" className={style.projects_main}>
                {/* <p>PROYECTYS</p> */}
                <ProjectContainer
                    title="Burguer Queen"
                    resume="This web application, developed with the Angular framework, is designed for a fast food restaurant. Provides an efficient system for taking orders and subsequent management in the kitchen."
                    image={"ss"}
                    starTop={true}
                    siteLink="https://burguer-queen-api-client-eight.vercel.app/"
                    repositoryLink="https://github.com/GiselleLop/Burguer-Queen-API-Client.git"
                />

                <ProjectContainer
                    title="Movie Challenge"
                    resume="Web application designed to explore the movie catalog of The Movie Database API V3."
                    image={MovieChallenge}
                    isComputer={true}
                    starTop={false}
                    siteLink="https://movie-challenge-weld.vercel.app/"
                    repositoryLink="https://github.com/GiselleLop/Movie-Challenge-con-Angular"
                />
                <ProjectContainer
                    title="Md-Links"
                    resume="This library developed in Node.js analyzes links within markdown files, which allows an effective solution for processing information in this format."
                    image={"ss"}
                    starTop={true}
                    siteLink=""
                    repositoryLink="https://github.com/GiselleLop/Md-Links"
                />
                <ProjectContainer
                    title="My PlantApp"
                    resume="Social network web application with a botany theme. Users can register and log in by creating a username and password or using a Google account."
                    image={plantApp}
                    starTop={false}
                    isComputer={true}
                    siteLink="https://my-plant-app-steel.vercel.app/"
                    repositoryLink="https://github.com/GiselleLop/My-PlantApp"
                />
                <ProjectContainer
                    title="Rick y Morty (Data Lovers)"
                    resume="This web application allows users to view the characteristics of each character from the animated series “Rick & Morty” through cards."
                    image={DataLovers}
                    starTop={true}
                    isComputer={true}
                    siteLink="https://rick-and-morty-dl.vercel.app/"
                    repositoryLink="https://github.com/GiselleLop/Rick-and-Morty-DL.git"
                />
                <ProjectContainer
                    title="Text Analyzer"
                    resume="Web application that allows users to analyze texts. Displays various indicators and specific metrics on characters, letters, numbers, etc. based on the text entered by the user."
                    image={textA}
                    starTop={false}
                    isComputer={true}
                    siteLink="https://gisellelop.github.io/Text-analyzer/src/"
                    repositoryLink="https://github.com/GiselleLop/Text-analyzer.git"
                />
            </section>
        </>
    );
};
