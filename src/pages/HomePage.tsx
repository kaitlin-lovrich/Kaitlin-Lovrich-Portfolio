import Background from "../components/Background";

export default function HomePage() {
    return (
        <div className="relative">
            <Background />
            <div className="absolute inset-0">
                <div className="flex justify-center items-center text-center flex-col relative z-30 mx-auto mt-4 sm:mt-6 xl:mt-12 w-[80%] min-w-[220px] sm:w-max bg-custom-gradient-3 rounded-xl text-white py-8 sm:py-10 xl:py-16 px-4 sm:px-7 md:px-10 gap-4 xl:gap-6">
                    <div className="h-[200px] xl:h-[250px] w-[200px] xl:w-[250px] rounded-full border-4 border-[#4865FD] overflow-hidden">
                        <img
                            src="./kaitlin-lovrich-profile-picture.png"
                            alt="kaitlin lovrich profile picture"
                            className="w-full"
                        />
                    </div>

                    <div className="flex justify-center bg-white/15 rounded-lg p-1.5 shadow-textBox">
                        <p className="font-body text-base sm:text-xl">
                            👋 Hello World! I'm Kaitlin Lovrich,
                        </p>
                    </div>

                    <h1 className="text-2xl xl:text-3xl font-heading drop-shadow-heading">
                        Full Stack Developer
                    </h1>

                    <p className="font-body text-lg sm:text-xl xl:text-2xl w-full sm:w-[485px] md:w-[555px] lg:w-[675px] xl:w-[795px]">
                        Over 7 years of professional interpersonal experience,
                        delivering quality results to clients. Experienced in
                        freelance work with frontend web development.
                    </p>
                </div>
            </div>
        </div>
    );
}
