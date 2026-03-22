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
      "Developed a responsive, SEO-friendly website using Next.js, React, and Tailwind CSS, optimizing accessibility and load performance",
      "Redesigned the website wireframe in Figma, blending client preferences with modern design principles while maintaining brand consistency",
      "Integrated Google Analytics and EmailJS to track user engagement and enable automated customer communication",
      "Implemented Google reCAPTCHA and registered the site with Google Search Console to enhance security and improve search visibility",
      "Collaborate with the company President to define project goals, translate requirements into actionable solutions, and deliver tailored tech implementations that support business operations",
      "Managed the full website redesign project, coordinating timelines, milestones, and deliverables while maintaining clear communication with stakeholders",
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
      "Collaborated with two developers to build Bullies BBQ's e-commerce web application in under 8 weeks using Next.js and Git for version control and team collaboration",
      "Structured and organized client menu data into a JSON data model to power dynamic content across menu, catering, and online ordering pages",
      "Styled the application using Tailwind CSS and semantic HTML to enhance visual design, responsiveness, and SEO",
      "Led daily standups and facilitated stakeholder meetings to align on goals, share progress, and integrate feedback into development",
      "Managed project communication and progress tracking using Teams, Zoom, and email to ensure alignment on requirements and deliverables",
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
      "Contributed to three hackathons, collaborating with developers to build projects under tight deadlines while strengthening pair programming skills",
      "Completed 800+ hours of intensive full-stack development training (10-12 hours daily) in a simulated Agile environment",
      "Organized weekly coding challenge meetups with peers to strengthen collaboration, problem-solving, and technical skills among peers",
      "Built full-stack web applications using React, Node.js, Express, and PostgreSQL, implementing RESTful APIs and relational database design",
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
    experienceLocation: "Halo For Men (Luxury men's salon) - Chicago, IL",
    experienceDate: "May 2016 - May 2022",
    experienceBulletPoints: [
      "Managed check-ins, appointment coordination, and office protocols while ensuring accurate message relay to prevent scheduling and communication errors",
      "Handled high-volume phone and digital communications via text, email, and chat; screened and returned calls while supporting appointment scheduling, contributing to increased bookings",
      "Oversaw daily operations including opening procedures, inventory, and client scheduling (50+ per day); coordinated stylist shifts and mentored new hires to uphold service standards and drive client retention",
      "Responded to customer requests and resolved scheduling issues with professionalism and urgency, escalating concerns when needed to maintain smooth daily operations",
      "Streamlined online and in-person bookings through Book4Time POS software, supporting efficient scheduling and business operations",
      "Maintained detailed records of customer interactions and transactions using computerized systems to track service data, hair goals, and discussion notes to support tailored service",
    ],
  },
];
