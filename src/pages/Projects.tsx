import Background from "../components/Background";
import ProjectCard from "../components/ProjectCard";
import { projectsData } from "../lib/data";

export default function Projects() {
    return (
        <div className="relative">
            <Background />
            <div className="absolute inset-0">
                <div className="flex items-center flex-col relative z-30 mx-auto mt-4 sm:mt-6 xl:mt-12 w-[90%] min-w-[280px] sm:w-[85%] xl:max-w-[1340px] bg-custom-gradient-3 rounded-xl text-white pt-4 pb-10 lg:pb-14 px-3 sm:px-6">
                    <h1 className="text-2xl sm:text-3xl xl:text-4xl font-heading drop-shadow-heading py-4 md:py-5">
                        Projects
                    </h1>

                    <div className="flex flex-wrap justify-center gap-7 min-[1750px]:w-[90%] h-auto">
                        {projectsData.map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
