import Background from "../components/Background";

export default function HomePage() {
    return (
        <div className="relative">
            <Background />
            <div className="absolute inset-0">
                <div className="flex justify-center items-center text-center flex-col relative z-30 mx-auto mt-9 sm:mt-20 md:mt-24 w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] xl:w-[75%] xl:max-w-[1145px] bg-custom-gradient-3 rounded-xl text-white py-8 sm:py-14 md:py-20 gap-5 sm:gap-8">
                    <div className="h-[200px] md:h-[230px] lg:h-[260px] xl:h-[290px] w-[200px] md:w-[230px] lg:w-[260px] xl:w-[290px] rounded-full border-4 border-[#4865FD] overflow-hidden">
                        <img
                            src="./kaitlin-lovrich-profile-picture.png"
                            alt="kaitlin lovrich profile picture"
                            className="w-full"
                        />
                    </div>

                    <div className="flex justify-center bg-white/15 rounded-lg p-2 shadow-textBox">
                        <p className="text-base font-body sm:text-xl md:text-2xl ">
                            👋 Hello World! I'm Kaitlin Lovrich,
                        </p>
                    </div>

                    <h1 className="text-2xl sm:text-3xl md:text-4xl  font-heading drop-shadow-heading">
                        Full Stack Developer
                    </h1>

                    <p className="font-body text-lg sm:text-xl md:text-2xl w-[310px] sm:w-[485px] md:w-[555px] lg:w-[675px] xl:w-[795px]">
                        Over 7 years of professional interpersonal experience,
                        delivering quality results to clients. Experienced in
                        freelance work with frontend web development.
                    </p>
                </div>
            </div>
        </div>
    );
}
