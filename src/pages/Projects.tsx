import Background from "../components/Background";
import ProjectCard from "../components/ProjectCard";
import { projectsData } from "../lib/data";

export default function Projects() {
    return (
        <div className="relative">
            <Background />
            <div className="absolute inset-0">
                <div className="flex justify-evenly items-center flex-col relative z-30 mx-auto mt-9 sm:mt-20 md:mt-24 w-[90%] sm:w-[85%] md:w-[80%] xl:max-w-[1300px] h-auto sm:h-[725px] bg-custom-gradient-3 rounded-xl text-white py-4 sm:py-8 md:py-10">
                    <h1 className="text-3xl sm:text-4xl font-heading drop-shadow-heading py-2 sm:py-0">
                        Projects
                    </h1>
                    <div className="flex flex-wrap justify-center gap-9 sm:gap-5 lg:gap-7 min-[1750px]:gap-10 w-[95%] min-[1750px]:w-[90%] overflow-y-auto py-4 h-[522px] min-[1620px]:h-[570px] snap-y">
                        {projectsData.map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
