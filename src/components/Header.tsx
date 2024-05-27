import { Link, Outlet } from "react-router-dom";
import "../index.css";

export default function Header() {
    return (
        <>
            <nav className="fixed top-0 w-full z-50 py-2 px-6 bg-custom-gradient-2 text-white">
                <ul className="flex justify-between w-full">
                    <li className="self-center">
                        <Link to="/" className="text-blue-purple-gradient">
                            <img
                                src="./kl-logo.png"
                                alt="k l logo"
                                width={60}
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
                                        width={40}
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
                                        width={45}
                                    />
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <aside className="relative z-40">
                <nav className="flex justify-center md:justify-end px-3 sm:px-10">
                    <ul className="flex gap-1 sm:gap-3 pt-24 font-heading text-white text-lg sm:text-2xl">
                        <li className=" text-white sm:text-red-200 md:text-green-200 lg:text-red-800 xl:text-white">
                            <Link to="/about">About</Link>
                        </li>
                        <span className=" text-coral">|</span>
                        <li className="">
                            <Link to="/projects">Projects</Link>
                        </li>
                        <span className=" text-coral">|</span>
                        <li className="">
                            <Link to="/experience">Experience</Link>
                        </li>
                        <span className=" text-coral">|</span>
                        <li className="gradient-text">
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </aside>
            <Outlet />
        </>
    );
}
