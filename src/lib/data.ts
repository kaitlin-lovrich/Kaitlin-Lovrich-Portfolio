import { projectDataType } from "./types";
import { experienceDataType } from "./types";

export const projectsData: projectDataType[] = [
    {
        imageSrc: "./rolling-hills-industries-website.png",
        altText: "Rolling Hills Industries Website",
        projectName: "Rolling Hills Industries",
        projectURL: "https://rollinghillsindustries.com/",
        projectSourceCode:
            "https://github.com/kaitlin-lovrich/Rolling-Hills-Industries",
        projectDescription: "Website for a commercial cleaning company.",
        projectType: "Solo Project",
        projectRole: "Frontend",
        projectTechStack: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    },
    {
        imageSrc: "./bullies-bbq-website.png",
        altText: "Bullies BBQ Website",
        projectName: "Bullies BBQ",
        projectURL: "https://www.bulliesbbq.com",
        projectSourceCode: "https://github.com/Bullies-BBQ-dev/Bullies-BBQ",
        projectDescription:
            "Website for a popular restaurant in Hilton Head, North Carolina.",
        projectType: "Team Project",
        projectRole: "Frontend",
        projectTechStack: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
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
        projectTechStack: ["React", "TypeScript", "Tailwind CSS"],
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
        projectTechStack: [
            "React",
            "TypeScript",
            "Node.js",
            "Express.js",
            "PostgreSQL",
            "CSS",
        ],
    },
];

export const experiencesData: experienceDataType[] = [
    {
        imageSrc: "./rolling-hills-industries-logo.png",
        altText: "Rolling Hills Industries",
        imageWidth: "w-full sm:w-[280px]",
        experienceTitle: "Freelance Web Developer",
        experienceLocation: "Rolling Hills Industries - Irvine, CA",
        experienceDate: "October 2024 - Current",
        experienceBulletPoints: [
            "Redesigned the website wireframe for Rolling Hills Industries using Figma, blending client preferences with creative input to modernize the design while maintaining the existing color scheme and aesthetic",
            "Implemented responsive styling with TailwindCSS and React, optimizing accessibility, fast load times using Next.js Image component, and SEO-friendly HTML elements for a user-friendly experience",
            "Collaborated with the company President to set up Google Analytics for tracking website performance metrics and EmailJS for automated customer emails with professional templates for instant responses",
            "Integrated Google reCAPTCHA to strengthen email security against cyber threats, and registered the website with Google Site Verification  to boost search engine visibility, ensuring higher rankings",
        ],
    },
    {
        imageSrc: "./coding-cat3.jpg",
        altText: "coding cat",
        imageWidth: "w-full sm:w-[280px]",
        experienceTitle: "Freelance Web Developer",
        experienceLocation: "Bullies BBQ - Irvine, CA",
        experienceDate: "February 2024 - March 2024",
        experienceBulletPoints: [
            "Collaborated with 2 developers to build Bullies BBQ's E-Commerce web application in under 8 weeks, utilizing Vite's build system for rapid development and Git for efficient version control and collaboration",
            "Utilized Next.js for optimizing page loading efficiency, leveraging its server-side rendering, automatic code splitting, and built-in routing for maximum speed and scalability in the React project's architecture",
            "Maintained cohesive and responsive styling across all web pages using TailwindCSS, while implementing semantic HTML elements to enhance accessibility and improve SEO performance",
            "Interfaced with company stakeholders in bi-weekly meetings to discuss software needs and progress",
        ],
    },
    {
        imageSrc: "./learningfuze-cohort-0823.jpg",
        altText: "learning fuze cohort 0823",
        imageWidth: "w-full sm:w-[480px]",
        experienceTitle: "Web Development Student",
        experienceLocation: "LearningFuze - Irvine, CA",
        experienceDate: "August 2023 - December 2024",
        experienceBulletPoints: [
            "Participated in three hackathons, collaborating with developers and gaining pair programming expertise",
            "Programmed 10-12 hours a day for 14 weeks (800+ hours) in a simulated Agile work environment",
        ],
    },
    {
        imageSrc: "./california-palm-trees.jpg",
        altText: "california palm trees",
        imageWidth: "w-full sm:w-[300px]",
        experienceTitle: "Career Transition",
        experienceLocation: "Career Break - Irvine, CA",
        experienceDate: "May 2022 - Aug 2023",
        experienceBulletPoints: [
            "After concluding a successful career as a Hairdresser, I transitioned to programming, dedicating myself full-time to learning to code. I completed 16 courses through Codecademy, covering various programming languages and frameworks before applying to the LearningFuze Web Development bootcamp in Irvine, California",
            "Capstone project: Developed Django Delights, an inventory management application using Python, Django, Handlebars, and CSS. The app features JavaScript event listeners for dynamic database interactions, allowing users to efficiently track and manage food inventory",
            "Python Mini Projects: Created several mini-projects, including a command-line battleship game, a Scrabble word game, a trip calculator, and a program to manage business, franchise, and menu profiles",
            "Additional Learning: Supplemented CodeCademy courses with MDN documentation, Stack Overflow, and W3Schools",
        ],
    },
    {
        imageSrc: "./star-graphic-haircut.jpg",
        altText: "Star graphic haircut",
        imageWidth: "w-full sm:w-[260px]",
        experienceTitle: "Hair Stylist",
        experienceLocation:
            "Halo For Men (Lady Janes's Haircuts for Men, Sport Clips) - Chicago, IL",
        experienceDate: "May 2016 - May 2022",
        experienceBulletPoints: [
            "Managed and streamlined both online and in-person bookings effectively through Book4Time POS software, gaining familiarity with software tools and technologies that support business operations",
            "Built and maintained client relationships, driving repeat business and surpassing sales goals by 30%",
            "Resolved client issues professionally, ensuring 100% satisfaction through effective communication",
            "Ensured punctual store openings and managed backend operations for 40 daily bookings",
            "Organized schedules to optimize accommodations for 5 team members and mentored new stylists",
        ],
    },
];
