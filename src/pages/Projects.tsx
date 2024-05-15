import Background from "../components/Background";

export default function Projects() {
    return (
        <div className="relative">
            <Background />
            <div className="absolute inset-0">
                <div className="flex justify-center items-center text-center flex-col relative z-30 mx-auto mt-9 sm:mt-20 md:mt-24 w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] xl:w-[75%] xl:max-w-[1145px] bg-custom-gradient-3 rounded-xl text-white py-8 sm:py-14 md:py-20 gap-5 sm:gap-8">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl  font-heading drop-shadow-heading">
                        Projects
                    </h1>
                    <div className="flex flex-col gap-10 w-[85%] overflow-y-scroll">
                        <div className="flex justify-between bg-white/20 rounded-lg p-2 shadow-textBox">
                            <div className="w-full h-full">
                                <img
                                    src="./bullies-bbq-website.png"
                                    alt="Bullies BBQ Website"
                                    width={400}
                                    height={300}
                                />
                            </div>
                            <div>
                                <h2>Bullies BBQ</h2>
                                <p>Team Project</p>
                                <p>Frontend</p>
                                <p>Description text about About Bullies BBQ</p>
                            </div>
                        </div>
                        <div className="flex justify-between bg-white/20 rounded-lg p-2 shadow-textBox">
                            <div className="w-full h-full">
                                <img
                                    src="./anime-almanac-website.png"
                                    alt="Bullies BBQ Website"
                                    width={400}
                                    height={300}
                                />
                            </div>
                            <div>
                                <h2>Anime Almanac</h2>
                                <p>Solo Project</p>
                                <p>Frontend</p>
                                <p>
                                    Description text about About Anime Almanac
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-between bg-white/20 rounded-lg p-2 shadow-textBox">
                            <div className="w-full h-full">
                                <img
                                    src="./grocery-guru-website.png"
                                    alt="Bullies BBQ Website"
                                    width={400}
                                    height={300}
                                />
                            </div>
                            <div>
                                <h2>Grocery Guru</h2>
                                <p>Solo Project</p>
                                <p>Full Stack</p>
                                <p>Description text about About Grocery Guru</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
