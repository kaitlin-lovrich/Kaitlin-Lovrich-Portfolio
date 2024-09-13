import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { LinkedInIcon, GithubIcon } from "./Icons.tsx";

export default function Footer() {
    const [linkedInColors, setLinkedInColors] = useState({
        color1: "rgba(255, 255, 255, .85)",
        color2: "rgba(255, 255, 255, .85)",
    });

    const [githubColors, setGithubColors] = useState({
        color1: "rgba(255, 255, 255, .85)",
        color2: "rgba(255, 255, 255, .85)",
    });

    const [isHovered, setIsHovered] = useState({
        contact: false,
        figma: false,
        vscode: false,
        react: false,
        tailwind: false,
        vercel: false,
        linkedin: false,
        github: false,
    });
    const location = useLocation();

    const handleMouseEnter = (key: string) => {
        setIsHovered((prevState) => ({ ...prevState, [key]: true }));
        if (key === "linkedin") {
            setLinkedInColors({
                color1: "rgb(105, 241, 192)",
                color2: "rgb(72, 101, 253)",
            });
        } else if (key === "github") {
            setGithubColors({
                color1: "rgb(105, 241, 192)",
                color2: "rgb(72, 101, 253)",
            });
        }
    };

    const handleMouseLeave = (key: string) => {
        setIsHovered((prevState) => ({ ...prevState, [key]: false }));
        if (key === "linkedin") {
            setLinkedInColors({
                color1: "rgba(255, 255, 255, .85)",
                color2: "rgba(255, 255, 255, .85)",
            });
        } else if (key === "github") {
            setGithubColors({
                color1: "rgba(255, 255, 255, .85)",
                color2: "rgba(255, 255, 255, .85)",
            });
        }
    };

    const handleContactClick = () => {
        if (location.pathname === "/contact") {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    };

    return (
        <>
            <Outlet />

            <footer className="bg-custom-gradient-6 text-white z-[40]">
                <div className="flex flex-col md:flex-row w-[95%] 2xl:w-[80%] mx-auto items-end py-4 xl:py-6 gap-6">
                    <h2 className="text-6xl xl:text-7xl font-heading drop-shadow-heading self-start">
                        LET'S
                        <br /> CONNECT
                    </h2>
                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 justify-start mx-auto pb-4">
                        <p className="flex items-center xl:items-end text-xl font-bold xl:text-2xl text-white/95">
                            Interested in collaborating with me?
                        </p>
                        <div className="relative w-[185px] xl:w-[214px] h-[48px] self-center *:hover:scale-105 *:transition *:transform *:duration-300 *:ease-in-out">
                            <Link
                                to="/contact"
                                aria-label="Contact Me"
                                className={`flex justify-center relative z-10 w-[186px] xl:w-[215px] px-5 xl:px-6 py-2 xl:py-3 border-2 border-white/85 hover:border-sky-blue rounded-full text-xl xl:text-2xl font-heading ${
                                    isHovered.contact
                                        ? "gradient-text"
                                        : "text-white/95"
                                }`}
                                onMouseEnter={() => handleMouseEnter("contact")}
                                onMouseLeave={() => handleMouseLeave("contact")}
                                onClick={() => handleContactClick()}
                            >
                                CONTACT ME
                            </Link>
                            <div className="w-[91%] h-[70%] xl:h-[88%] top-[0px] left-[3px] absolute m-2 bg-bubble-gradient blur-[4px] rounded-full"></div>
                        </div>
                    </div>
                </div>

                <hr className="w-full border-t-2 border-coral"></hr>

                <div className="flex flex-col md:flex-row w-[90%] xl:w-[80%] mx-auto py-4 xl:py-6 gap-4 md:gap-0">
                    <nav aria-label="Social Media Links">
                        <ul className="flex justify-center items-center">
                            <li className="mx-4">
                                <a
                                    href="https://www.linkedin.com/in/kaitlin-lovrich/"
                                    target="_blank"
                                    aria-label="Kaitlin Lovrich LinkedIn Profile"
                                    rel="noopener noreferrer"
                                    className="*:size-11 *:xl:size-14 *:hover:scale-110 *:active:scale-105 *:transition *:transform *:duration-300 *:ease-in-out hover:cursor-pointer"
                                    onMouseEnter={() =>
                                        handleMouseEnter("linkedin")
                                    }
                                    onMouseLeave={() =>
                                        handleMouseLeave("linkedin")
                                    }
                                >
                                    <LinkedInIcon
                                        color1={linkedInColors.color1}
                                        color2={linkedInColors.color2}
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/kaitlin-lovrich"
                                    aria-label="Kaitlin Lovrich Github Profile"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="*:size-11 *:xl:size-14 *:hover:scale-110 *:active:scale-105 *:transition *:transform *:duration-300 *:ease-in-out hover:cursor-pointer"
                                    onMouseEnter={() =>
                                        handleMouseEnter("github")
                                    }
                                    onMouseLeave={() =>
                                        handleMouseLeave("github")
                                    }
                                >
                                    <GithubIcon
                                        color1={githubColors.color1}
                                        color2={githubColors.color2}
                                    />
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <div className="flex flex-col gap-3 w-[339px] xl:w-[483px] text-justify mx-auto text-white/70 text-sm xl:text-base">
                        <p className="*:font-semibold *:text-white/85 *:hover:cursor-pointer">
                            Designed in{" "}
                            <a
                                href="https://www.figma.com/"
                                aria-label="Figma Website"
                                className={`${
                                    isHovered.figma ? "gradient-text" : ""
                                }`}
                                onMouseEnter={() => handleMouseEnter("figma")}
                                onMouseLeave={() => handleMouseLeave("figma")}
                            >
                                Figma
                            </a>{" "}
                            and coded in{" "}
                            <a
                                href="https://code.visualstudio.com/"
                                aria-label="Visual Studio Code Website"
                                className={`${
                                    isHovered.vscode ? "gradient-text" : ""
                                }`}
                                onMouseEnter={() => handleMouseEnter("vscode")}
                                onMouseLeave={() => handleMouseLeave("vscode")}
                            >
                                Visual Studio Code
                            </a>{" "}
                            by yours truly. Built with{" "}
                            <a
                                href="https://react.dev/"
                                aria-label="React Website"
                                className={`${
                                    isHovered.react ? "gradient-text" : ""
                                }`}
                                onMouseEnter={() => handleMouseEnter("react")}
                                onMouseLeave={() => handleMouseLeave("react")}
                            >
                                React
                            </a>{" "}
                            and{" "}
                            <a
                                href="https://tailwindcss.com/"
                                aria-label="Tailwind CSS Website"
                                className={`${
                                    isHovered.tailwind ? "gradient-text" : ""
                                }`}
                                onMouseEnter={() =>
                                    handleMouseEnter("tailwind")
                                }
                                onMouseLeave={() =>
                                    handleMouseLeave("tailwind")
                                }
                            >
                                Tailwind CSS
                            </a>
                            , deployed with{" "}
                            <a
                                href="https://vercel.com/"
                                aria-label="Vercel Website"
                                className={`${
                                    isHovered.vercel ? "gradient-text" : ""
                                }`}
                                onMouseEnter={() => handleMouseEnter("vercel")}
                                onMouseLeave={() => handleMouseLeave("vercel")}
                            >
                                Vercel
                            </a>
                            . Animated with custom CSS keyframes.
                        </p>
                        <p className="text-xs xl:text-sm text-center">
                            © 2024 Kaitlin Lovrich. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}
