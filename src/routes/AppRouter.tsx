import { useNavigate } from "react-router-dom"
import { HomePage } from "../pages/Home"
import { MenuHeader } from "../components/menu-header"
import { AboutPage } from "../pages/About"
import { useEffect, useState } from "react"
import { ProjectsPage } from "../pages/Projects"
import { ContactPage } from "../pages/Contact"
import { ArrowBottom } from "../components/Arrow_bottom"

const AppRouter = () => {
    const navigate = useNavigate();
    const [idRoute, setIdRoute] = useState<string | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                let activeSection: Element | null = null;
                let maxVisibility = 0;

                entries.forEach((entry) => {
                    const visibility = entry.intersectionRatio;
                    if (entry.isIntersecting && visibility > maxVisibility) {
                        maxVisibility = visibility;
                        activeSection = entry.target;
                    }
                });

                if (activeSection) {
                    const route = (activeSection as HTMLElement).getAttribute("data-route");
                    const sectionId = (activeSection as HTMLElement).getAttribute("id");

                    if (sectionId !== idRoute) {
                        setIdRoute(sectionId);

                        if (route) {
                            navigate(route, { replace: true });
                        }
                    }
                }
            },
            {
                threshold: Array.from({ length: 11 }, (_, i) => i / 10),
                root: null,
                rootMargin: "0px",
            }
        );

        const sections = document.querySelectorAll("section");
        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, [idRoute, navigate]);

    return (
        <>
            <MenuHeader idRoute={idRoute}></MenuHeader>
            <main>
                <HomePage />
                <AboutPage />
                <ProjectsPage />
                <ContactPage />
            </main>
            <ArrowBottom idRoute={idRoute}></ArrowBottom>
        </>
    )
}
export default AppRouter