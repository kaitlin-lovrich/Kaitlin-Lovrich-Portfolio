import Background from "../components/Background";
import { useState, useEffect } from "react";
import { PaperPlaneIcon } from "../components/Icons.tsx";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const [isVisible, setIsVisible] = useState(false);
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const [formData, setFormData] = useState({
        "from_name": "",
        "reply_to": "",
        message: "",
    });
    const [status, setStatus] = useState("");
    const [isIconHovered, setIsIconHovered] = useState(false);
    const [planeIconColors, setPlaneIconColors] = useState({
        color1: "rgba(255, 255, 255, .95)",
        color2: "rgba(255, 255, 255, .95)",
    });
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const myPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

    useEffect(() => {
        emailjs.init(myPublicKey);
        setIsVisible(true);
    }, [myPublicKey]);

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

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        async function submitForm() {
            try {
                await emailjs.sendForm(
                    serviceId,
                    templateId,
                    e.target as HTMLFormElement,
                    {
                        publicKey: myPublicKey,
                    }
                );
                setStatus("Message sent successfully!");
                setFormData({ "from_name": "", "reply_to": "", message: "" });
            } catch (error) {
                setStatus("Failed to send message.");
            }
        }

        submitForm();
    }

    function handleMouseEnter() {
        setIsIconHovered(!isIconHovered);
        setPlaneIconColors({
            color1: "rgb(105, 241, 192)",
            color2: "rgb(72, 209, 253)",
        });
    }

    function handleMouseLeave() {
        setIsIconHovered(!isIconHovered);
        setPlaneIconColors({
            color1: "rgba(255, 255, 255, .95)",
            color2: "rgba(255, 255, 255, .95)",
        });
    }

    return (
        <div className="min-h-screen pb-14 xl:pb-20">
            <Background />
            <section
                className={`transition opacity transform duration-1000 inset-0 ${
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
            >
                <article className="flex justify-center items-center text-center flex-col relative z-30 mx-auto mt-4 sm:mt-6 xl:mt-12 w-[90%] min-w-[220px] sm:w-[85%] md:w-[80%] lg:w-[75%] xl:max-w-[1020px] bg-custom-gradient-3 rounded-xl text-white py-8 sm:py-10 lg:py-14 xl:py-28  gap-4 xl:gap-8">
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
                            alt="kaitlin lovrich profile picture"
                            className="w-full"
                            onLoad={() => setIsImageLoaded(true)}
                        />
                    </figure>
                    <p className="text-xl lg:text-2xl font-body font-semibold w-[85%] sm:w-[75%] max-w-[530px] lg:max-w-[572px]">
                        All messages will be sent via emial to Kaitlin Lovrich{" "}
                        {"("}:
                    </p>
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-5 xl:gap-7 relative w-[90%] md:w-[80%] lg:w-[80%] white-text text-lg font-semibold"
                    >
                        <div className="flex flex-col lg:flex-row w-[100%] gap-5 xl:gap-7 justify-between">
                            <label htmlFor="from_name" className="lg:w-[50%]">
                                <input
                                    type="text"
                                    id="from_name"
                                    name="from_name"
                                    value={formData["from_name"]}
                                    onChange={handleChange}
                                    required
                                    placeholder="Name"
                                    aria-label="Name Input"
                                    className="w-full p-2 xl:p-3 rounded bg-white/20 focus:outline-2 focus:outline focus:outline-sky-blue"
                                />
                            </label>
                            <label htmlFor="reply_to" className="lg:w-[50%]">
                                <input
                                    type="email"
                                    id="reply_to"
                                    name="reply_to"
                                    value={formData["reply_to"]}
                                    onChange={handleChange}
                                    required
                                    placeholder="Email"
                                    aria-label="Email Input"
                                    className="w-full p-2 xl:p-3 rounded bg-white/20 focus:outline-2 focus:outline focus:outline-sky-blue"
                                ></input>
                            </label>
                        </div>
                        <label htmlFor="message">
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Message"
                                aria-label="Message Input"
                                rows={4}
                                className="p-2 xl:p-3 rounded bg-white/20 w-full focus:outline-2 focus:outline focus:outline-sky-blue"
                            ></textarea>
                        </label>
                        <div
                            className="g-recaptcha"
                            data-sitekey={siteKey}
                        ></div>
                        <button
                            className="*:size-6 absolute bottom-9 right-3 text-xl hover:cursor-pointer hover:scale-110 transition transform duration-300 ease-in-out"
                            type="submit"
                            aria-label="Submit"
                            onMouseEnter={() => handleMouseEnter()}
                            onMouseLeave={() => handleMouseLeave()}
                        >
                            <PaperPlaneIcon
                                color1={planeIconColors.color1}
                                color2={planeIconColors.color2}
                            />
                        </button>
                        {status && <p>{status}</p>}
                    </form>
                </article>
            </section>
        </div>
    );
}
