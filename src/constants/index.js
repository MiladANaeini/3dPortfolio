import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "React.js Developer",
        company_name: "freelancer",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "May 2020- December 2020",
        points: [
            "Built a dashboard using JavaScript, React, Ant Design, and asynchronous API calling.",
            "Designed the application’s user interface.",
            "Implemented login for users using an authentication token.",
            "Designed and created a website with gaming content using HTML and CSS.",
            "Handled responsive web view using Bootstrap.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "DayaSoft - Nuremberg, Germany",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "December 2020- October 2022",
        points: [
            "Collaborated In a team of 23 people closely with designers, developers, scrum masters, and product managers using Scrum and was promoted in 3 months due to strong performance.",
            "Thoroughly tested the company’s apps which resulted in finding and fixing around 90% of its bugs.",
            "Used Microsoft Active Directory B2C authentication.",
            "Developed features and maintained the desktop applications using React, JavaScript.",
            "Redux, Formik, CSS, SCSS, asynchronous API calling, and hooks.",
            "Controlled more than 50 different permissions on client-side forms, pages, and buttons.",
            "Handled both client-side and server-side localization and culture for multilingual platforms.",
            "Broke down around 30 big components to smaller ones to make unit testing easier.",
            "Got promoted again after about 9 months for gaining more experience and handling more responsibilities.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "DevoTeam - Malmö, Sweden",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "November 2022- January 202",
        points: [
            "Worked on an office platform project using React, Tailwind, Firebase, and Next Js.",
            "Maintained the project with Typescript.",
            "Used Github as DevOps.",
            "Collaborated with a team of 5 developers.",
            "Used Tailwind animations for project interface.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];