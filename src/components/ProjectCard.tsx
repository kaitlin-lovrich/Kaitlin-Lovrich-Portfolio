import { useState } from "react";
import { TbHeartCode } from "react-icons/tb";
import { ProjectCardProps } from "../lib/types";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }: ProjectCardProps) {
    const [showViewSourceCode, setShowViewSourceCode] = useState(false);
    const {
        imageSrc,
        altText,
        projectName,
        projectURL,
        projectSourceCode,
        projectDescription,
        projectType,
        projectRole,
    } = project;
    return (
        <div className="flex flex-col items-center bg-white/15 rounded-lg px-2 pt-2 shadow-textBox w-full max-w-[280px] sm:max-w-[290px] md:max-w-[310px] lg:max-w-[320px] min-[1415px]:max-w-[360px]">
            <Link
                to={projectURL}
                target="_blank"
                className="relative group w-full"
            >
                <img src={imageSrc} alt={altText} className="w-full h-full" />
                <div className="absolute inset-0 flex items-center justify-center bg-custom-gradient-4 opacity-0 transition-opacity group-hover:opacity-100 ease-in-out duration-500">
                    <span className="font-heading text-4xl">View Live</span>
                </div>
            </Link>
            <div className="flex flex-col gap-2 px-1.5 min-[1415px]:px-3 py-4">
                <Link
                    to={projectSourceCode}
                    target="_blank"
                    className="flex justify-between hover:cursor-pointer"
                    onMouseEnter={() => setShowViewSourceCode(true)}
                    onMouseLeave={() => setShowViewSourceCode(false)}
                    onTouchStart={() => setShowViewSourceCode(true)}
                    onTouchEnd={() => setShowViewSourceCode(false)}
                    onClick={() => setShowViewSourceCode(true)}
                >
                    <div className="relative flex-auto font-heading text-xl xl:text-2xl">
                        <h2
                            className={`absolute transition transform ease-in-out duration-500 ${
                                showViewSourceCode
                                    ? "opacity-0 scale-50"
                                    : "opacity-100 scale-100"
                            }`}
                        >
                            {projectName}
                        </h2>
                        <h2
                            className={`absolute transition transform ease-in-out duration-500 ${
                                showViewSourceCode
                                    ? "opacity-100 scale-100 drop-shadow-custom-blue"
                                    : "opacity-0 scale-50"
                            }`}
                        >
                            View Source Code
                        </h2>
                    </div>
                    <span
                        className={`self-center text-3xl md:text-4xl xl:text-5xl duration-500 ease-in-out ${
                            showViewSourceCode
                                ? "scale-110 drop-shadow-custom-blue"
                                : "custom-pulse"
                        }`}
                    >
                        <TbHeartCode />
                    </span>
                </Link>
                <div className="font-bold">
                    <p>{projectType}</p>
                    <p>{projectRole}</p>
                </div>
                <p>{projectDescription}</p>
            </div>
        </div>
    );
}
