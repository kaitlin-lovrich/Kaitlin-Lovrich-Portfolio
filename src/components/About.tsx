export default function About() {
    return (
        <div className="absolute inset-0">
            <div className="flex justify-center items-center text-center flex-col relative z-30 mx-auto mt-9 sm:mt-20 md:mt-24 w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] xl:w-[75%] xl:max-w-[1145px]   bg-custom-gradient-3 rounded-xl text-white font-heading py-8 sm:py-14 md:py-20 gap-5 sm:gap-8">
                <div className="h-[200px] md:h-[230px] lg:h-[260px] xl:h-[290px] w-[200px] md:w-[230px] lg:w-[260px] xl:w-[290px] rounded-full border-4 border-[#4865FD] overflow-hidden">
                    <img
                        src="./kaitlin-lovrich-profile-picture.png"
                        alt="kaitlin lovrich profile picture"
                        className="w-full"
                    />
                </div>
                <div>
                    <p className="text-xl sm:text-2xl md:text-3xl pb-1.5 sm:pb-4 ">
                        Kaitlin Lovrich
                    </p>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl">
                        Full Stack Developer
                    </h1>
                </div>

                <p className="font-body text-base sm:text-lg md:text-xl w-[310px] sm:w-[485px] md:w-[555px] lg:w-[675px] xl:w-[795px]">
                    Who lives in a pineapple under the sea? Spongebob
                    Squarepants. Who's nautical nonsense means something you
                    wish? Spongebob Squarepants. Drop on the deck and flop like
                    a fish. Spongebob Squarepants, Spongebob Squarepants,
                    Spongey-bob SquArepants. 🎶
                </p>
            </div>
        </div>
    );
}
