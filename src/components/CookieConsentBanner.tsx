import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function CookieConsentBanner() {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const userConsent = localStorage.getItem("cookieConsent");
        if (!userConsent) {
            setShowBanner(true);
        }
    }, []);

    function handleConsentClick(userResponse: string) {
        localStorage.setItem("cookieConsent", userResponse);
        setShowBanner(false);
        if (userResponse === "accept") loadGoogleAnalytics();
    }

    function loadGoogleAnalytics() {
        const script = document.createElement("script");
        script.src = "https://www.googletagmanager.com/gtag/js?id=G-NDC9J1X662";
        script.async = true;
        document.head.appendChild(script);

        const inlineScript = document.createElement("script");
        inlineScript.innerHTML = `
            window.dataLayer = window.dataLayer || [];
            function gtag() {
                dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', 'G-NDC9J1X662');
        `;
        document.head.appendChild(inlineScript);
    }

    return showBanner ? (
        <div className="flex justify-evenly items-center flex-col fixed z-40 w-[94%] md:w-[80%] max-w-[700px] bg-custom-gradient-5 rounded-xl text-white py-5 bottom-3 right-3 sm:right-5 shadow-textBox">
            <div className="flex flex-col text-base xl:text-lg w-[90%] md:w-[80%] gap-2">
                <h1 className="text-xl sm:text-xl xl:text-2xl font-heading drop-shadow-heading text-center">
                    COOKIE CONSENT
                </h1>

                <p>
                    This website uses cookies for analytical purposes.{" "}
                    <Link
                        to="/privacy"
                        aria-label="Privacy Policy"
                        className="font-bold"
                    >
                        Privacy Policy
                    </Link>
                </p>
                <div className="flex flex-col min-[360px]:flex-row gap-3 sm:gap-6 justify-center pt-3">
                    <div className="relative w-[142px] xl:w-[214px] h-[48px] self-center *:hover:scale-105 *:transition *:transform *:duration-300 *:ease-in-out">
                        <button
                            className="flex justify-center relative z-10 w-[142px] xl:w-[215px] px-5 xl:px-6 py-2 xl:py-3 border-2 border-white/85 hover:border-sky-blue rounded-full text-base xl:text-2xl font-heading"
                            onClick={() => handleConsentClick("accept")}
                        >
                            ACCEPT
                        </button>
                        <div className="w-[87%] xl:w-[91%] h-[70%] xl:h-[88%] top-[-3px] xl:top-[0px] left-[3px] absolute m-2 bg-bubble-gradient blur-[4px] rounded-full"></div>
                    </div>
                    <div className="relative w-[142px] xl:w-[214px] h-[48px] self-center *:hover:scale-105 *:transition *:transform *:duration-300 *:ease-in-out">
                        <button
                            className="flex justify-center relative z-10 w-[142px] xl:w-[215px] px-5 xl:px-6 py-2 xl:py-3 border-2 border-white/85 hover:border-sky-blue rounded-full text-base xl:text-2xl font-heading"
                            onClick={() => handleConsentClick("deny")}
                        >
                            DENY
                        </button>
                        <div className="w-[87%] xl:w-[91%] h-[70%] xl:h-[88%] top-[-3px] xl:top-[0px] left-[3px] absolute m-2 bg-bubble-gradient blur-[4px] rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
    ) : null;
}
