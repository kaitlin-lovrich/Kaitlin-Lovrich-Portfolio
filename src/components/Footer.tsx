import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
// import { ReactComponent as LinkedInIcon } from "../assets/linkedin.svg";
import linkedInIcon from "../assets/linkedin.svg";
import LinkedInIcon from "../assets/linkedin.svg";

export default function Footer() {
    const [isHovered, setIsHovered] = useState({
        figma: false,
        vscode: false,
        react: false,
        tailwind: false,
        vercel: false,
    });

    const handleMouseEnter = (key: string) => {
        setIsHovered((prevState) => ({ ...prevState, [key]: true }));
    };

    const handleMouseLeave = (key: string) => {
        setIsHovered((prevState) => ({ ...prevState, [key]: false }));
    };

    return (
        <>
            <Outlet />

            <div className="bg-custom-gradient-6 text-white z-[40]">
                <div className="flex w-[80%] mx-auto justify-around items-end py-6 gap-4">
                    <h1 className="text-6xl xl:text-7xl font-heading drop-shadow-heading">
                        LET'S
                        <br /> CONNECT
                    </h1>

                    <p className="text-xl pb-4">
                        Interested in collaborating with me?
                    </p>
                    <div className="relative pb-4 w-[216px]">
                        <Link
                            to="/contact"
                            className="relative z-10 px-5 xl:px-6 py-2 xl:py-3 border-[2.5px] border-sky-blue rounded-full text-xl xl:text-2xl font-heading"
                        >
                            CONTACT ME
                        </Link>
                        <div className="w-[89%] h-[80%] top-[-12px] left-[3px] absolute m-2 bg-bubble-gradient blur-[4px] rounded-full"></div>
                    </div>
                </div>

                <hr className="w-full border-t-2 border-coral"></hr>

                <div className="flex w-[70%] mx-auto py-6">
                    <ul className="flex justify-center items-center">
                        <li className="mx-4">
                            <a
                                href="https://www.linkedin.com/in/kaitlin-lovrich/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="./linkedin-icon.png"
                                    alt="linked-icon"
                                    className="w-[34px] xl:w-[40px] hover:scale-110 active:scale-110 duration-300 hover:cursor-pointer"
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/kaitlin-lovrich"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-purple-gradient"
                            >
                                <img
                                    src="./github-icon.png"
                                    alt="github-icon"
                                    className="w-[36px] xl:w-[42px] hover:scale-110 active:scale-110 duration-300"
                                />
                            </a>
                        </li>
                    </ul>

                    <div className="flex flex-col gap-3 w-[385px] text-justify mx-auto text-white/70">
                        <p className="*:font-semibold *:text-white/95 *:hover:cursor-pointer">
                            Designed in{" "}
                            <a
                                href="https://www.figma.com/"
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
                        <p>© 2024 Kaitlin Lovrich. All Rights Reserved.</p>
                        <LinkedInIcon className="w-8 h-8 gradient-svg" />
                        <img src={linkedInIcon} alt="LinkedIn Icon" />
                    </div>
                </div>
            </div>
        </>
    );
}
