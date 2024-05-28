import Background from "../components/Background";
import ProjectCard from "../components/ProjectCard";
import { projectsData } from "../lib/data";

export default function Projects() {
    return (
        <div className="relative">
            <Background />
            <div className="absolute inset-0">
                <div className="flex items-center flex-col relative z-30 mx-auto mt-6 sm:mt-12 w-[90%] sm:w-[85%] md:w-[80%] lg:w-[85%] xl:max-w-[1340px] h-[75%] sm:h-[815px] lg:h-[790px] bg-custom-gradient-3 rounded-xl text-white py-4 sm:py-6 xl:py-10 scroll-pt-16 overflow-y-auto snap-y overscroll-y-contain">
                    <h1 className="text-3xl sm:text-4xl font-heading drop-shadow-heading py-2 sm:py-4 md:py-8">
                        Projects
                    </h1>

                    <div className="flex flex-wrap justify-center gap-9 sm:gap-5 lg:gap-7 min-[1750px]:gap-10 w-[95%] min-[1750px]:w-[90%] py-4 h-auto">
                        {projectsData.map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
