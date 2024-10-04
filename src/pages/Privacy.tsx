import { useEffect, useState } from "react";
import Background from "../components/Background";

export default function Privacy() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }, 100);

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <div className="min-h-screen pb-14 xl:pb-20">
            <Background />
            <section
                className={`transition opacity transform duration-1000 inset-0 ${
                    isMounted ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
            >
                <article className="flex justify-evenly items-center flex-col relative z-30 mx-auto mt-4 sm:mt-6 xl:mt-12 w-[90%] sm:w-[85%] md:w-[80%] lg:w-[85%] xl:max-w-[1340px] bg-custom-gradient-5 rounded-xl text-white pt-4 pb-4 lg:pb-8 px-3">
                    <h1 className="text-2xl sm:text-3xl xl:text-4xl font-heading drop-shadow-heading py-4 md:py-5">
                        PRIVACY POLICY
                    </h1>
                    <div className="flex flex-col text-base sm:text-lg xl:text-xl w-[90%] md:w-[80%] py-4 md:py-5 gap-3 sm:gap-6">
                        <h2 className="text-xl sm:text-2xl xl:text-3xl font-bold">
                            Use of Google Analytics
                        </h2>

                        <p>
                            I use Google Analytics to help analyze how visitors
                            use this website. Google Analytics is a tool that
                            tracks and reports on various user activities such
                            as page views, clicks, scrolls, and user engagement.
                            Specifically, I track the following metrics:
                        </p>
                        <ul className="list-disc mx-8">
                            <li>
                                <span className="font-bold">Page views:</span>{" "}
                                The number of times a page on this site is
                                viewed.
                            </li>
                            <li>
                                <span className="font-bold">Event count:</span>{" "}
                                Interactions like clicks on buttons or links and
                                page scrolls.
                            </li>
                            <li>
                                <span className="font-bold">
                                    Engaged sessions:
                                </span>{" "}
                                Sessions where the user actively interacts with
                                the site.
                            </li>
                            <li>
                                <span className="font-bold">Active users:</span>{" "}
                                The number of users currently on the site.
                            </li>
                        </ul>

                        <p>
                            Google Analytics collects this data using cookies or
                            similar technologies, which may include information
                            like your IP address. This data helps me understand
                            user behavior on the site to improve user
                            experience, design, and content.
                        </p>

                        <h2 className="text-xl sm:text-2xl xl:text-3xl font-bold">
                            Data Privacy and Your Rights
                        </h2>

                        <ul className="list-disc mx-8">
                            <li>
                                All information collected through Google
                                Analytics is anonymous and used strictly for
                                analytical purposes.
                            </li>
                            <li>
                                No personal information such as names, emails,
                                or specific user-identifiable details are
                                collected through this tool.
                            </li>
                            <li>
                                You can choose to disable cookies through your
                                browser settings or opt out of Google Analytics
                                tracking by installing the{" "}
                                <a
                                    href="https://tools.google.com/dlpage/gaoptout"
                                    aria-label="Google Analytics Opt-out Browser Add-on"
                                    className="font-heading underline underline-offset-4 decoration-[2.5px] decoration-sky-blue hover:decoration-coral"
                                >
                                    Google Analytics opt-out browser add-on
                                </a>
                                .
                            </li>
                        </ul>
                        <p>
                            You will be prompted to accept or decline tracking
                            when you visit this site.
                        </p>
                    </div>
                </article>
            </section>
        </div>
    );
}
