import Background from "../components/Background";

export default function HomePage() {
    return (
        <div className="relative">
            <Background />
            <div className="absolute inset-0">
                <div className="flex justify-center items-center text-center flex-col relative z-30 mx-auto mt-4 sm:mt-6 xl:mt-12 w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] xl:w-[75%] xl:max-w-[1145px] bg-custom-gradient-3 rounded-xl text-white py-8 sm:py-10 xl:py-16 gap-4 xl:gap-6">
                    <div className="h-[200px] xl:h-[250px] w-[200px] xl:w-[250px] rounded-full border-4 border-[#4865FD] overflow-hidden">
                        <img
                            src="./kaitlin-lovrich-profile-picture.png"
                            alt="kaitlin lovrich profile picture"
                            className="w-full"
                        />
                    </div>

                    <div className="flex justify-center bg-white/15 rounded-lg p-1.5 shadow-textBox">
                        <p className="font-body text-base sm:text-xl w-[185px] sm:w-full">
                            👋 Hello World! I'm Kaitlin Lovrich,
                        </p>
                    </div>

                    <h1 className="text-2xl xl:text-3xl font-heading drop-shadow-heading">
                        Full Stack Developer
                    </h1>

                    <p className="font-body text-lg sm:text-xl xl:text-2xl w-[90%] sm:w-[485px] md:w-[555px] lg:w-[675px] xl:w-[795px]">
                        Over 7 years of professional interpersonal experience,
                        delivering quality results to clients. Experienced in
                        freelance work with frontend web development.
                    </p>
                </div>
            </div>
        </div>
    );
}
