import { useEffect, useRef, useState } from "react";
import { TbHeartCode } from "react-icons/tb";
import { ProjectCardProps } from "../lib/types";

export default function ProjectCard({ project }: ProjectCardProps) {
    const [showOptions, setShowOptions] = useState(false);
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const containerRef = useRef<HTMLElement>(null);

    const handleTouchOutside = (event: TouchEvent) => {
        console.log(event);
        if (
            containerRef.current &&
            !containerRef.current.contains(event.target as Node)
        ) {
            setShowOptions(false); // Hide options when touching outside
        }
    };

    useEffect(() => {
        if (showOptions) {
            document.addEventListener("touchstart", handleTouchOutside);
        } else {
            document.removeEventListener("touchstart", handleTouchOutside);
        }

        // Cleanup the listener when the component unmounts or options are hidden
        return () => {
            document.removeEventListener("touchstart", handleTouchOutside);
        };
    }, [showOptions]);

    const {
        imageSrc,
        altText,
        projectName,
        projectURL,
        projectSourceCode,
        projectDescription,
        projectType,
        projectRole,
        projectTechStack,
    } = project;

    return (
        <article
            className={`flex flex-col items-center bg-white/15 rounded-lg px-2 pt-2 shadow-textBox w-full min-w-[245px] max-w-[320px] lg:max-w-[340px] min-[1415px]:max-w-[360px] transition-all opacity transform duration-1000 ${
                isImageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
        >
            <figure
                className="relative group w-full"
                onTouchStart={() => setShowOptions(true)}
            >
                <img
                    src={imageSrc}
                    alt={altText}
                    className="w-full h-full"
                    onLoad={() => setIsImageLoaded(true)}
                />
                <figcaption
                    ref={containerRef}
                    onClick={() => setShowOptions(true)}
                    onMouseLeave={() => setShowOptions(false)}
                    className={`absolute inset-0 flex items-center justify-center bg-custom-gradient-4 opacity-0 transition-opacity group-hover:opacity-100 ease-in-out duration-500 ${
                        showOptions
                            ? "ease-in-out duration-500 opacity-100"
                            : ""
                    }`}
                >
                    <div className="flex flex-col justify-evenly text-center font-heading text-3xl h-2/3">
                        <div className="relative w-[138px] xl:w-[151px] h-[42px] self-center *:hover:scale-105 *:transition *:transform *:duration-300 *:ease-in-out">
                            <a
                                href={projectURL}
                                target="_blank"
                                aria-label="View Live Website"
                                className="flex justify-center relative z-10 w-[136px] xl:w-[154px] px-5 xl:px-6 py-1.5 xl:py-2 border-2 border-white/85 hover:border-sky-blue rounded-full text-base xl:text-lg font-heading"
                            >
                                VIEW LIVE
                            </a>
                            <div className="w-[88%] xl:w-[92%] h-[70%] xl:h-[88%] top-[-3px] left-[3px] absolute m-2 bg-bubble-gradient blur-[4px] rounded-full"></div>
                        </div>
                        <div className="relative w-[176px] xl:w-[192px] h-[42px] self-center *:hover:scale-105 *:transition *:transform *:duration-300 *:ease-in-out">
                            <a
                                href={projectSourceCode}
                                target="_blank"
                                aria-label="View Source Code"
                                className="flex justify-center relative z-10 w-[170px] xl:w-[192px] px-5 xl:px-6 py-1.5 xl:py-2 border-2 border-white/85 hover:border-sky-blue rounded-full text-base xl:text-lg font-heading"
                            >
                                SOURCE CODE
                            </a>
                            <div className="w-[88%] xl:w-[92%] h-[70%] xl:h-[88%] top-[-3px] left-[3px] absolute m-2 bg-bubble-gradient blur-[4px] rounded-full"></div>
                        </div>
                    </div>
                </figcaption>
            </figure>

            <div className="flex flex-col gap-2 px-1.5 min-[1415px]:px-3 py-4">
                <div className="flex justify-between">
                    <div className="flex-auto">
                        <h2 className="font-heading text-xl xl:text-2xl">
                            {projectName}
                        </h2>
                    </div>
                    <div className="relative group">
                        <a
                            href={projectSourceCode}
                            target="_blank"
                            aria-label="View Source Code"
                            className="self-center text-3xl md:text-4xl xl:text-5xl duration-500 ease-in-out hover:scale-110 hover:drop-shadow-custom-blue custom-pulse"
                        >
                            <TbHeartCode />
                        </a>
                        <div className="absolute z-50 hidden group-hover:block bg-blue-950 bg-opacity-100 w-[145px] text-white text-sm rounded px-3 py-1 -top-full">
                            View source code on Github
                        </div>
                    </div>
                </div>

                <div className="font-bold">
                    <p>{projectType}</p>
                    <p>{projectRole}</p>
                </div>
                <p>{projectDescription}</p>
                <ul className="flex flex-wrap *:mr-4 pt-2">
                    {projectTechStack.map((technology, index) => (
                        <li key={index}>#{technology}</li>
                    ))}
                </ul>
            </div>
        </article>
    );
}
