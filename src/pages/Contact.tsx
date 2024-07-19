import { Link } from "react-router-dom";
import Background from "../components/Background";

export default function Contact() {
    return (
        <div className="relative">
            <Background />
            <div className="absolute inset-0">
                <div className="flex justify-center items-center text-center flex-col relative z-30 mx-auto mt-4 sm:mt-6 xl:mt-12 w-[80%] min-w-[220px] sm:w-max xl:w-[650px] bg-custom-gradient-3 rounded-xl text-white py-8 sm:py-10 lg:py-14 xl:py-28 px-4 sm:px-14 lg:px-20 gap-4 xl:gap-6">
                    <div className="h-[200px] xl:h-[250px] w-[200px] xl:w-[250px] rounded-full border-4 border-[#4865FD] overflow-hidden">
                        <img
                            src="./kaitlin-lovrich-profile-picture.png"
                            alt="kaitlin lovrich profile picture"
                            className="w-full"
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
        </div>
    );
}
