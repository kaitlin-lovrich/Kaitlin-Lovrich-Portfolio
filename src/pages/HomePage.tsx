import { useEffect, useState } from "react";
import Background from "../components/Background";

export default function HomePage() {
    const [isVisible, setIsVisible] = useState(false);
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    useEffect(() => {
        setIsVisible(true);
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
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
            >
                <article className="flex justify-center items-center text-center flex-col relative z-30 mx-auto mt-4 sm:mt-6 xl:mt-12 w-[90%] min-w-[220px] sm:w-max bg-custom-gradient-3 rounded-xl text-white/95 py-8 sm:py-10 xl:py-16 px-4 sm:px-7 md:px-10 gap-4 xl:gap-6">
                    <figure
                        aria-label="Profile Picture of Kaitlin Lovrich"
                        className={`h-[200px] xl:h-[250px] w-[200px] xl:w-[250px] rounded-full overflow-hidden transition opacity transform duration-1000 ${
                            isImageLoaded
                                ? "opacity-100 scale-100"
                                : "opacity-0 scale-95"
                        }`}
                    >
                        <img
                            src="./kaitlin-lovrich-profile-picture.png"
                            alt="Kaitlin Lovrich profile picture"
                            className="w-full"
                            onLoad={() => setIsImageLoaded(true)}
                        />
                    </figure>

                    <div className="flex justify-center bg-white/15 rounded-lg p-1.5 shadow-textBox">
                        <p className="font-body text-base sm:text-xl">
                            👋 Hello World! I'm Kaitlin Lovrich,
                        </p>
                    </div>

                    <h1 className="text-2xl xl:text-3xl font-heading drop-shadow-heading">
                        FULL STACK DEVELOPER
                    </h1>

                    <p className="font-body text-lg sm:text-xl xl:text-2xl w-full sm:w-[485px] md:w-[555px] lg:w-[675px] xl:w-[795px]">
                        With 2 years of experience creating dynamic,
                        user-friendly web applications and over 11 years in
                        client service, I'm passionate about crafting seamless
                        digital experiences. Skilled in React, Node.js,
                        PostgreSQL, TypeScript, and Express.js, I bring a strong
                        work ethic and a commitment to delivering high-quality
                        results using modern web development practices.
                    </p>
                </article>
            </section>
        </div>
    );
}
