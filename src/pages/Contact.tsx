import { Link } from "react-router-dom";
import Background from "../components/Background";
import { useState, useEffect } from "react";

export default function Contact() {
    const [isVisible, setIsVisible] = useState(false);
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            window.scrollTo(0, 0);
        }, 500);
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <>
            <Background />
            <div
                className={`transition opacity transform duration-1000 inset-0 ${
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
            >
                <div className="flex justify-center items-center text-center flex-col relative z-30 mx-auto mt-4 sm:mt-6 xl:mt-12 w-[80%] min-w-[220px] sm:w-max xl:w-[650px] bg-custom-gradient-3 rounded-xl text-white py-8 sm:py-10 lg:py-14 xl:py-28 px-4 sm:px-14 lg:px-20 gap-4 xl:gap-6">
                    <div
                        className={`h-[200px] xl:h-[250px] w-[200px] xl:w-[250px] rounded-full overflow-hidden transition opacity transform duration-1000 ${
                            isImageLoaded
                                ? "opacity-100 scale-100"
                                : "opacity-0 scale-95"
                        }`}
                    >
                        <img
                            src="./kaitlin-lovrich-profile-picture.png"
                            alt="kaitlin lovrich profile picture"
                            className="w-full"
                            onLoad={() => setIsImageLoaded(true)}
                        />
                    </div>
                    <Link to="/contact2" className="hover:cursor-default">
                        <h1 className="text-2xl xl:text-3xl font-heading drop-shadow-heading">
                            Contact
                        </h1>
                    </Link>

                    <div className="flex justify-center bg-white/15 rounded-lg py-1.5 shadow-textBox px-4">
                        <p className="font-body text-base sm:text-lg xl:text-xl">
                            Email: kaylovrich@gmail.com
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
