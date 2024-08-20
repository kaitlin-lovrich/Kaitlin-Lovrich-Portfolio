import { Link, Outlet, useLocation } from "react-router-dom";
import "../index.css";

export default function Header() {
    const location = useLocation();
    const pathname = location.pathname;
    return (
        <>
            <nav className="fixed top-0 w-full z-50 py-1 px-6 bg-custom-gradient-2 text-white">
                <ul className="flex justify-between w-full">
                    <li className="self-center">
                        <Link to="/" className="text-blue-purple-gradient">
                            <img
                                src="./kl-logo.png"
                                alt="k l logo"
                                className="w-12 xl:w-14 hover:scale-110 active:scale-110 duration-300"
                            />
                        </Link>
                    </li>
                    <li className="self-center">
                        <ul className="flex">
                            <li className="mx-4 self-center">
                                <a
                                    href="https://www.linkedin.com/in/kaitlin-lovrich/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src="./linkedin-icon.png"
                                        alt="linked-icon"
                                        className="w-[34px] xl:w-[40px] hover:scale-110 active:scale-110 duration-300"
                                    />
                                </a>
                            </li>
                            <li className="">
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
                    </li>
                </ul>
            </nav>
            <aside className="relative z-40">
                <nav className="flex justify-center md:justify-end px-3 sm:px-10">
                    <ul className="flex flex-wrap justify-end gap-1 sm:gap-3 pt-14 xl:pt-20 font-heading text-base min-[390px]:text-lg sm:text-xl xl:text-2xl hover:*:font-bold">
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
