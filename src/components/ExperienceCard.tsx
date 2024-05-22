import { ExperienceCardProps } from "../lib/types";

export default function ProjectCard({ experience }: ExperienceCardProps) {
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
        <div className="">
            <div className="flex justify-between gap-8 bg-white/15 rounded-lg p-4 shadow-textBox w-full">
                <div className={imageWidth}>
                    <img
                        src={imageSrc}
                        alt={altText}
                        className="bg-custom-gradient-4 opacity-100 w-full h-[326px]"
                    />
                </div>
                <div className="w-3/4">
                    <h2 className="font-heading text-2xl">{experienceTitle}</h2>
                    <div className="flex justify-between font-semibold gap-10  pt-1.5 pb-3 italic">
                        <p className="max-w-[327px]">{experienceLocation}</p>
                        <p className="min-w-[260px] text-end">
                            {experienceDate}
                        </p>
                    </div>
                    <ul className="flex flex-col gap-3 list-disc">
                        {experienceBulletPoints.map((bulletPoint, index) => (
                            <li key={index}>{bulletPoint}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
