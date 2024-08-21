import { useState, useEffect } from "react";
import Background from "../components/Background";
import ProjectCard from "../components/ProjectCard";
import { projectsData } from "../lib/data";

export default function Projects() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }, 100);

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <div className="min-h-screen pb-14 xl:pb-20">
            <Background />
            <section
                className={`transition opacity transform duration-1000  inset-0 ${
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
            >
                <article className="flex items-center flex-col relative z-30 mx-auto mt-4 sm:mt-6 xl:mt-12 w-[90%] min-w-[280px] sm:w-[85%] xl:max-w-[1340px] bg-custom-gradient-3 rounded-xl text-white pt-4 pb-10 lg:pb-14 px-3 sm:px-6">
                    <h1 className="text-2xl sm:text-3xl xl:text-4xl font-heading drop-shadow-heading py-4 md:py-5">
                        PROJECTS
                    </h1>

                    <section className="flex flex-wrap justify-center gap-7 w-[90%] sm:w-full min-[1750px]:w-[90%] h-auto">
                        {projectsData.map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))}
                    </section>
                </article>
            </section>
        </div>
    );
}
