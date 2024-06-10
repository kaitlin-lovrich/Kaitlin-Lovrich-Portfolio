import { useEffect, useRef } from "react";
import Background from "../components/Background";
import ExperienceCard from "../components/ExperienceCard";
import { experiencesData } from "../lib/data";

export default function Experience() {
    // Create a ref for the content container
    const contentContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Scroll to the top of the content container when the component mounts
        if (contentContainerRef.current) {
            setTimeout(() => {
                if (contentContainerRef.current) {
                    contentContainerRef.current.style.overflow = "hidden";
                    contentContainerRef.current.scrollTop = 0;
                    contentContainerRef.current.style.overflow = "auto";
                }
            }, 100); // 100ms delay
        }
    }, []);

    return (
        <div className="relative">
            <Background />
            <div className="absolute inset-0">
                <div
                    ref={contentContainerRef}
                    className="flex justify-evenly items-center flex-col relative z-30 mx-auto mt-6 sm:mt-12 w-[90%] sm:w-[85%] md:w-[80%] lg:w-[85%] xl:max-w-[1340px] h-[70%] sm:h-[815px] lg:h-[790px] bg-custom-gradient-5 rounded-xl text-white py-4 sm:py-6 xl:py-10"
                >
                    <h1 className="text-3xl sm:text-4xl font-heading drop-shadow-heading py-2 sm:py-4 md:py-8">
                        Tech Stack
                    </h1>
                    <div className="flex flex-col gap-3 bg-white/15 rounded-lg p-4 my-4 shadow-textBox w-[90%] sm:w-[85%] text-lg">
                        <p>
                            <span className="font-bold">Strong:</span>{" "}
                            TypeScript, JavaScript (ES5/ES6), ReactJS, HTML5,
                            CSS3, Rest & Fetch API, CLI, Express
                        </p>
                        <p>
                            <span className="font-bold">Experienced:</span>{" "}
                            NodeJS, NextJS, JSON, Python, AJAX, AWS, SQL, Argon2
                            security, Jest unit testing
                        </p>
                        <p>
                            <span className="font-bold">Tools:</span> Git,
                            GitHub, React Hooks, PostgreSQL, Figma, ESLint, npm,
                            Chrome DevTools
                        </p>
                    </div>

                    <h1 className="text-3xl sm:text-4xl font-heading drop-shadow-heading py-2 sm:py-4 md:py-8">
                        Timeline
                    </h1>
                    <div className="flex flex-col justify-center gap-5 py-4 w-[90%] sm:w-[95%]">
                        {experiencesData.map((experience, index) => (
                            <ExperienceCard
                                key={index}
                                experience={experience}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

// useEffect(() => {
//     if (contentContainerRef.current) {
//         contentContainerRef.current.scrollTop = 0;
//     }
// }, []);
