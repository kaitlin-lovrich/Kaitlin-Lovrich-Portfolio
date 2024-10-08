import { useState } from "react";
import { ExperienceCardProps } from "../lib/types";

export default function ExperienceCard({ experience }: ExperienceCardProps) {
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const {
        imageSrc,
        altText,
        imageWidth,
        experienceTitle,
        experienceLocation,
        experienceDate,
        experienceBulletPoints,
    } = experience;

    return (
        <article
            className={`flex flex-col lg:flex-row justify-between items-center lg:items-start gap-2 md:gap-6 bg-white/15 rounded-lg p-4 shadow-textBox w-full max-w-[480px] sm:max-w-full transition opacity transform duration-1000 ${
                isImageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
        >
            <figure className={`${imageWidth} max-w-[290px] sm:max-w-full`}>
                <img
                    src={imageSrc}
                    alt={altText}
                    className="bg-custom-gradient-4 opacity-100 w-full sm:max-w-full h-full rounded-lg"
                    onLoad={() => setIsImageLoaded(true)}
                />
            </figure>
            <div className="w-90% lg:w-3/4 sm:px-4">
                <h2 className="font-heading text-2xl">{experienceTitle}</h2>
                <div className="flex flex-col-reverse min-[1300px]:flex-row justify-between font-semibold gap-1 min-[1300px]:gap-20 pt-1.5 pb-3 italic">
                    <p className="max-w-[327px]">{experienceLocation}</p>
                    <p className="sm:min-w-[260px] min-[1300px]:text-end">
                        {experienceDate}
                    </p>
                </div>
                <ul className="flex flex-col gap-3 px-4 list-disc">
                    {experienceBulletPoints.map((bulletPoint, index) => (
                        <li key={index}>{bulletPoint}</li>
                    ))}
                </ul>
            </div>
        </article>
    );
}
