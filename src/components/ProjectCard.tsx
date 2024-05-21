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
        <div className="flex flex-col items-center bg-white/20 rounded-lg p-2 mb-0 sm:mb-8 min-[1410px]:mb-0 shadow-textBox w-[300px] sm:w-[330px] lg:w-[330px] min-[1620px]:w-[350px] min-[1750px]:w-[30%] h-auto sm:h-[490px] min-[1620px]:h-[510px] min-[1750px]:h-[530px] snap-center">
            <Link
                to={projectURL}
                target="_blank"
                className="relative group w-full h-[210px] sm:h-[240px] min-[1620px]:h-[260px] min-[1750px]:h-[280px]"
            >
                <img src={imageSrc} alt={altText} className="w-full h-full" />
                <div className="absolute inset-0 flex items-center justify-center bg-custom-gradient-4 opacity-0 transition-opacity group-hover:opacity-100 ease-in-out duration-500">
                    <span className="font-heading text-4xl">View Live</span>
                </div>
            </Link>
            <div className="flex flex-col gap-2 px-3 py-4">
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
                    <div className="relative flex-auto font-heading text-xl sm:text-2xl">
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
                        className={`self-center text-3xl sm:text-4xl duration-500 ease-in-out ${
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
