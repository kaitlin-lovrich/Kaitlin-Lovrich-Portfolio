import { useEffect, useState } from "react";
import Background from "../components/Background";
import ExperienceCard from "../components/ExperienceCard";
import { experiencesData } from "../lib/data";

export default function Experience() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 500);
    });

    return (
        <div className="min-h-screen pb-14 xl:pb-20">
            <Background />
            <div
                className={`transition opacity transform duration-1000  inset-0 ${
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
            >
                <div className="flex justify-evenly items-center flex-col relative z-30 mx-auto mt-4 sm:mt-6 xl:mt-12 w-[90%] sm:w-[85%] md:w-[80%] lg:w-[85%] xl:max-w-[1340px] bg-custom-gradient-5 rounded-xl text-white pt-4 pb-4 lg:pb-8 px-3">
                    <h1 className="text-2xl sm:text-3xl xl:text-4xl font-heading drop-shadow-heading py-4 md:py-5">
                        Tech Stack
                    </h1>
                    <div className="flex flex-col gap-1.5 bg-white/15 rounded-lg p-4 mb-4 shadow-textBox w-[90%] xl:w-[85%] text-base xl:text-lg">
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

                    <h1 className="text-2xl sm:text-3xl xl:text-4xl font-heading drop-shadow-heading py-4 md:py-5">
                        Timeline
                    </h1>
                    <div className="flex flex-col justify-center gap-5 pb-4 sm:w-[95%]">
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
