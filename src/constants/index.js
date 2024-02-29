import { meta, shopify, starbucks, tesla,logo } from "../assets/images";
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
        icon: logo,
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
        icon: logo,
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
        icon: logo,
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
        link: 'https://github.com/MiladANaeini',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/milad-a-naeini-ba46611b9/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Quiz-Game',
        description: 'Developed a time based game of questions and answares using JavaScript and React.',
        link: 'https://miladanaeini.github.io/quiz-game/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'The Words',
        description: 'Using React,Node.js and (express- Web hosting:) Docker in AWS developed The Words which is an app to search for existing synonyms for words and also gives the user the ability to add new words and synonyms.',
        link: 'http://ec2-16-170-167-40.eu-north-1.compute.amazonaws.com:3001/',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Media-Tool',
        description: 'Using TypeScript developed an app which receives an excel file, given in the format of the sample file provided in the task repository and sorts the scores.',
        link: 'https://github.com/MiladANaeini/Mediatool',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'The Red Mustang',
        description: 'Used Unreal Engine 5 to create a short animation with market assets.',
        link: 'https://drive.google.com/file/d/1W8VO2WNDVpBLfnQ5sX8KZENHbezdnfVT/view',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'The Blue Dude',
        description: 'Used Unreal Engine 5 to develope a platformer game from the ground up with movement mechanics.',
        link: 'https://drive.google.com/file/d/1Zda9ZX8yy6uV6eEbvs0Rz0x9M1_UF5Ur/view',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'The Abandoned Temple',
        description: 'Used Unreal Engine 5 to develop a first-person puzzle game from the ground up, designed the levels and puzzles.',
        link: 'https://drive.google.com/file/d/1pWJtjldJnJUT_7s-OLUyZeP4QL8Jlk29/view',
    }
];