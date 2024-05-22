import { projectDataType } from "./types";
import { experienceDataType } from "./types";

export const projectsData: projectDataType[] = [
    {
        imageSrc: "./bullies-bbq-website.png",
        altText: "Bullies BBQ Website",
        projectName: "Bullies BBQ",
        projectURL: "https://www.bulliesbbq.restaurant/",
        projectSourceCode: "https://github.com/Bullies-BBQ-dev/Bullies-BBQ",
        projectDescription:
            "Website for a popular restaurant in Hilton Head, North Carolina.",
        projectType: "Team Project",
        projectRole: "Frontend",
    },
    {
        imageSrc: "./anime-almanac-website.png",
        altText: "Anime Almanac Website",
        projectName: "Anime Almanac",
        projectURL: "https://anime-almanac.vercel.app/",
        projectSourceCode: "https://github.com/kaitlin-lovrich/Anime-Almanac",
        projectDescription:
            "Browse anime, view trailers, and save favorite titles to a personalized collection.",
        projectType: "Solo Project",
        projectRole: "Frontend",
    },
    {
        imageSrc: "./grocery-guru-website.png",
        altText: "Grocery Guru Website",
        projectName: "Grocery Guru",
        projectURL: "http://grocery-guru-dev.us-west-2.elasticbeanstalk.com/",
        projectSourceCode: "https://github.com/kaitlin-lovrich/Grocery-Guru",
        projectDescription:
            "Grocery list generator and meal planner catering to culinary enthusiasts.",
        projectType: "Solo Project",
        projectRole: "Full Stack",
    },
];

export const experiencesData: experienceDataType[] = [
    {
        imageSrc: "./coding-cat3.jpg",
        altText: "coding cat",
        imageWidth: "w-[280px]",
        experienceTitle: "Freelance Web Developer",
        experienceLocation: "Bullies BBQ - Irvine, CA",
        experienceDate: "February 2024 - March 2024",
        experienceBulletPoints: [
            "Collaborated with 2 developers to build the company's E-Commerce web application in 7 weeks",
            "Utilized Next.js for optimizing page loading efficiency, leveraging its server-side rendering, automatic code splitting, and built-in routing for maximum speed and scalability in the React project's architecture",
            "Maintained cohesive styling across web pages and implemented semantic HTML for improved SEO",
            "Interfaced with company stakeholders in bi-weekly meetings to discuss software needs and progress",
        ],
    },
    {
        imageSrc: "./learningfuze-cohort-0823.jpg",
        altText: "learning fuze cohort 0823",
        imageWidth: "w-[286px] sm:w-[480px]",
        experienceTitle: "Web Development Student",
        experienceLocation: "LearningFuze - Irvine, CA",
        experienceDate: "August 2023 - December 2024",
        experienceBulletPoints: [
            "Collaborated with 2 developers to build the company's E-Commerce web application in 7 weeks",
            "Utilized Next.js for optimizing page loading efficiency, leveraging its server-side rendering, automatic code splitting, and built-in routing for maximum speed and scalability in the React project's architecture",
            "Maintained cohesive styling across web pages and implemented semantic HTML for improved SEO",
            "Interfaced with company stakeholders in bi-weekly meetings to discuss software needs and progress",
        ],
    },
    {
        imageSrc: "./kaitlin-the-hairdresser.png",
        altText: "Kaitlin the hairdresser",
        imageWidth: "w-[230px] sm:w-[250px]",
        experienceTitle: "Hair Stylist",
        experienceLocation:
            "Halo For Men (Lady Janes's Haircuts for Men, Sport Clips) - Chicago, IL",
        experienceDate: "May 2016 - May 2022",
        experienceBulletPoints: [
            "Built and maintained client relationships, driving repeat business and surpassing sales goals by 30%",
            "Resolved client issues professionally, ensuring 100% satisfaction through effective communication",
            "Ensured punctual store openings and managed backend operations for 40 daily bookings",
            "Organized schedules to optimize accommodations for 5 team members and mentored new stylists",
        ],
    },
];
