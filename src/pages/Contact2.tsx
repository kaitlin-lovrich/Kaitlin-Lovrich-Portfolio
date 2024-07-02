import { FaPaperPlane } from "react-icons/fa";
import Background from "../components/Background";
import { Link } from "react-router-dom";

// Under construction
export default function Contact() {
    return (
        <div className="relative">
            <Background />
            <div className="absolute inset-0">
                <div className="flex justify-center items-center text-center flex-col relative z-30 mx-auto mt-4 sm:mt-6 md:mt-12 w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] xl:w-[75%] xl:max-w-[1145px] bg-custom-gradient-3 rounded-xl text-white py-8 sm:py-14 md:py-20 gap-5 sm:gap-8">
                    <h1 className="text-3xl sm:text-4xl font-heading drop-shadow-heading py-2 sm:py-0">
                        Under Construction
                    </h1>
                    <p className="text-xl md:text-2xl font-body font-bold sm:w-[488px] md:w-[572px]">
                        More convenience coming soon! For now, click{" "}
                        <Link
                            to="/contact"
                            className="font-heading underline underline-offset-4 decoration-4 decoration-coral"
                        >
                            Contact
                        </Link>{" "}
                        for my email {"("}:
                        {/* All messages will be sent via emial to me, Kaitlin
                        Lovrich {"("}: */}
                    </p>
                    <form className="flex flex-col gap-5 relative">
                        <div className="flex gap-5 w-[50%] justify-between">
                            <label htmlFor="name" className=" w-1/3">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    placeholder="Name"
                                    className="p-2 rounded bg-white/20"
                                />
                            </label>
                            <label htmlFor="email" className=" w-2/3">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="Email"
                                    className="p-2 rounded bg-white/20"
                                ></input>
                            </label>
                        </div>
                        <label htmlFor="message">
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Message"
                                rows={4}
                                // onChange={handleChange}
                                className="p-2 rounded bg-white/20 w-full"
                            ></textarea>
                        </label>
                        <button
                            className="absolute bottom-4 right-3 text-xl"
                            type="submit"
                        >
                            <FaPaperPlane />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
