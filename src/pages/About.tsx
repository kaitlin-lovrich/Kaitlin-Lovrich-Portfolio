import Background from "../components/Background";

export default function About() {
    return (
        <div className="relative">
            <Background />
            <div className="absolute inset-0">
                <div className="flex flex-col items-center relative z-30 mx-auto mt-6 md:mt-12 w-[90%] sm:w-[85%] md:w-[80%] lg:w-[85%] xl:max-w-[1340px] h-[70%] sm:h-[815px] lg:h-[790px]  bg-custom-gradient-5 rounded-xl text-white py-4 sm:py-6 xl:py-10 overflow-y-auto">
                    <h1 className="text-3xl sm:text-4xl font-heading drop-shadow-heading py-2 sm:py-4 md:py-8">
                        About Me
                    </h1>
                    <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-6 w-[95%] h-fit">
                        <div className=" w-[90%] max-w-[350px] sm:w-[65%] sm:max-w-[390px] lg:max-w-[430px] rounded">
                            <img
                                src="./rock-climbing-kait.jpg"
                                alt="rock climbing Kait"
                                className="w-full rounded-2xl shadow-textBox"
                            />
                        </div>

                        <div className="flex flex-col w-full gap-3 text-justify bg-white/15 rounded-2xl p-4 xl:py-8 xl:px-6 shadow-textBox font-body text-base sm:text-lg xl:text-xl indent-8">
                            <p>
                                👋 Hello World! My name is Kaitlin and I am a
                                software engineer located in Orange County,
                                California!
                            </p>
                            <p>
                                Through hairdressing, I have spent 7+ years
                                honing my interpersonal and business management
                                skills. I started learning to code part-time
                                after trying a python 2 course. As the course
                                progressed and passion grew, the decision to
                                fully commit myself to advancing my career in
                                web development was easy. Finding the solution
                                to complex problems for me is like solving a
                                puzzle, it's challenging but immensely rewarding
                                and this is what drives me.
                            </p>
                            <p>
                                With my career pivot, I have had the opportunity
                                to experience self-teaching and working with
                                talented instructors/classmates at
                                LearningFuze's fully immersed, agile work
                                environment web development bootcamp. Through
                                this program, I have engineered different apps
                                and projects, continued practicing my problem
                                solving skills, and gained practical working
                                experience collaborating with developers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
