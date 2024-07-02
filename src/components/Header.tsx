import { Link, Outlet, useLocation } from "react-router-dom";
import "../index.css";

export default function Header() {
    const location = useLocation();
    const pathname = location.pathname;
    return (
        <>
            <nav className="fixed top-0 w-full z-50 py-2 px-6 bg-custom-gradient-2 text-white">
                <ul className="flex justify-between w-full">
                    <li className="self-center">
                        <Link to="/" className="text-blue-purple-gradient">
                            <img
                                src="./kl-logo.png"
                                alt="k l logo"
                                className="w-12 sm:w-16 hover:scale-110 active:scale-110 duration-300"
                            />
                        </Link>
                    </li>
                    <li className="self-center">
                        <ul className="flex">
                            <li className="mx-4 self-center">
                                <Link
                                    to="https://www.linkedin.com/in/kaitlin-lovrich/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src="./linkedin-icon.png"
                                        alt="linked-icon"
                                        className="w-8 sm:w-10 hover:scale-110 active:scale-110 duration-300"
                                    />
                                </Link>
                            </li>
                            <li className="">
                                <Link
                                    to="https://github.com/kaitlin-lovrich"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-purple-gradient"
                                >
                                    <img
                                        src="./github-icon.png"
                                        alt="github-icon"
                                        className="w-9 sm:w-11 hover:scale-110 active:scale-110 duration-300"
                                    />
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <aside className="relative z-40">
                <nav className="flex justify-center md:justify-end px-3 sm:px-10">
                    <ul className="flex flex-wrap justify-end gap-1 sm:gap-3 pt-[4.5rem] sm:pt-24 font-heading text-base sm:text-2xl hover:*:font-bold">
                        <li
                            className={
                                pathname.includes("/about")
                                    ? "underline decoration-sky-blue decoration-4 underline-offset-8 white-text"
                                    : "white-text"
                            }
                        >
                            <Link to="/about">About</Link>
                        </li>
                        <span className=" text-coral">|</span>
                        <li
                            className={
                                pathname.includes("/projects")
                                    ? "underline decoration-sky-blue decoration-4 underline-offset-8 white-text"
                                    : "white-text"
                            }
                        >
                            <Link to="/projects">Projects</Link>
                        </li>
                        <span className=" text-coral">|</span>
                        <li
                            className={
                                pathname.includes("/experience")
                                    ? "underline decoration-sky-blue decoration-4 underline-offset-8 white-text"
                                    : "white-text"
                            }
                        >
                            <Link to="/experience">Experience</Link>
                        </li>
                        <span className=" text-coral">|</span>
                        <li
                            className={
                                pathname.includes("/contact")
                                    ? "gradient-text underline decoration-sky-blue decoration-4 underline-offset-8"
                                    : "gradient-text"
                            }
                        >
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </aside>
            <Outlet />
        </>
    );
}
