import { useEffect, useState } from "react";
import Background from "../components/Background";
import { Link } from "react-router-dom";

export default function About() {
    const [isMounted, setIsMounted] = useState(false);
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    // Scale and fade in component when it mounts
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

        // Prevent memory leaks if the component unmounts before the timeout completes.
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <div className="min-h-screen pb-14 xl:pb-20">
            <Background />
            <section
                className={`transition opacity transform duration-1000 inset-0 h-full ${
                    isMounted ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
            >
                <article className="flex flex-col items-center relative z-30 mx-auto mt-4 sm:mt-6 xl:mt-12 w-[90%] sm:w-[85%] md:w-[80%] lg:w-[85%] xl:max-w-[1340px] bg-custom-gradient-5 rounded-xl text-white/95 pt-4 pb-10 lg:pb-14 px-4 sm:px-6 overflow-y-auto">
                    <header className="py-4 md:py-5">
                        <h1 className="text-2xl sm:text-3xl xl:text-4xl font-heading drop-shadow-heading">
                            ABOUT ME
                        </h1>
                    </header>
                    <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-6 h-fit">
                        <figure
                            aria-label="Picture of Kaitlin Lovrich Climbing Rocks at Joshua Tree National Park"
                            className={`w-full max-w-[350px] sm:w-[65%] sm:max-w-[390px] lg:max-w-[430px] rounded transition opacity transform duration-1000 ${
                                isImageLoaded
                                    ? "opacity-100 scale-100"
                                    : "opacity-0 scale-95"
                            }`}
                        >
                            <img
                                src="./rock-climbing-kait.jpg"
                                alt="Kaitlin Lovrich - Full Stack Developer"
                                className="w-full rounded-2xl shadow-textBox"
                                onLoad={() => setIsImageLoaded(true)}
                            />
                        </figure>
                        <section className="flex flex-col w-full gap-3 text-justify bg-white/15 rounded-2xl p-4 xl:py-8 xl:px-6 shadow-textBox font-body text-base sm:text-lg xl:text-xl indent-8">
                            <p>
                                Hello! I'm Kaitlin, a software engineer based in
                                Orange County, California.
                            </p>
                            <p>
                                Before diving into the world of coding, I spent
                                over seven years as a hairdresser, where I honed
                                my interpersonal and business management skills.
                                This experience sharpened my attention to detail
                                and design—qualities that seamlessly
                                transitioned into my coding career. Initially,
                                coding was a side hobby, but as my passion grew,
                                I knew I had to fully commit to web development.
                                I find immense satisfaction in creating visually
                                appealing and interactive websites, which is
                                what fuels my drive every day.
                            </p>
                            <p>
                                I had the incredible opportunity to enhance my
                                skills at LearningFuze's immersive web
                                development bootcamp. In this agile work
                                environment, I collaborated with talented
                                instructors and classmates to engineer various
                                apps and projects. This hands-on experience not
                                only refined my problem-solving abilities but
                                also provided practical experience in
                                collaborating effectively with other developers.
                            </p>
                            <p>
                                I'm continually excited by the possibilities in
                                web development and look forward to leveraging
                                my unique blend of skills to create amazing user
                                experiences. If you're interested in discussing
                                potential projects or opportunities, please feel
                                free to{" "}
                                <Link
                                    to="/contact"
                                    className="font-heading underline underline-offset-4 decoration-[2.5px] decoration-sky-blue hover:decoration-coral"
                                >
                                    email me
                                </Link>
                                {"! "}
                                I'd love to connect and explore how we can
                                collaborate to bring innovative ideas to life!
                            </p>
                        </section>
                    </div>
                </article>
            </section>
        </div>
    );
}
