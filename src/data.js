import {
    FaJava, FaReact, FaHtml5, FaCss3, FaJs,
    FaPython, FaGit, FaDocker
} from "react-icons/fa";

import {
    SiSpringboot, SiMysql, SiTailwindcss,
    SiKubernetes, SiSpring,
    SiPostman, SiIntellijidea,
    SiExpo, SiRedux
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";

import { BiLogoPostgresql } from "react-icons/bi";
import { BsFileEarmarkExcelFill } from "react-icons/bs";
import { TbBrandReactNative } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { g } from "framer-motion/client";


const ems = "/assets/ems.png";
const ecommerce = "/assets/ecommerce.avif";
const btc = "/assets/btc.jpg";
const quizapp = "/assets/quizapp.webp";
const financialLogo = "/assets/financial-logo.jpg";

const awsLogo = "/assets/aws-academy-logo.jpeg";
const digitalLyncLogo = "/assets/digital-lync-logo.jpeg";
const infosysSpringboardLogo = "/assets/infosys-springboard-logo.png";
const cognitiveClassLogo = "/assets/cognitive-class-logo.png";
const nptelLogo = "/assets/nptel-logo.jpeg";
const courseraLogo = "/assets/coursera-logo.jpg";
const wiproLogo = "/assets/wipro-logo.jpeg";

const naukriLogo = "/assets/naukri.png";
const githubLogo = "/assets/github_logo.png";
const linkedinLogo = "/assets/linkedin_logo.png";
const upworkLogo = "/assets/upwork_logo.png";
const mediumLogo = "/assets/medium_logo.png";
const leetcodeLogo = "/assets/leetcode_logo.png";
const instagramLogo = "/assets/instagram_logo.png";
const twitterLogo = "/assets/x_logo.png";
const telegramLogo = "/assets/telegram_logo.png";
const geeksforgeeksLogo = "/assets/gfg_logo.png";

export const fullName = "Darla Udaya Kiran";

export const bio = "I’m a passionate Full Stack Developer with over a year of hands-on experience building scalable backend systems and modern web applications.\n" +
    "I specialize in Java and Spring Boot, designing secure, high-performance REST APIs and microservices for real-world use cases.\n" +
    "On the frontend, I work with React.js to create responsive and user-friendly interfaces that deliver seamless user experiences.\n\n" +
    "I have practical experience deploying and managing applications on AWS, along with working on Docker and CI/CD pipelines to ensure reliable and production-ready systems.\n" +
    "My work includes building secure authentication systems using JWT and OAuth, implementing real-time features with WebSockets, and integrating payment gateways.\n\n" +
    "I enjoy solving complex problems, optimizing performance, and building impactful digital products.\n" +
    "I thrive in Agile environments, collaborating with cross-functional teams to deliver scalable and efficient solutions.\n" +
    "I am continuously learning and exploring new technologies to grow as a software engineer.\n\n" +
    "My goal is to contribute to innovative projects, build high-quality systems, and create meaningful impact through technology.";

export const resumeLink = "https://drive.google.com/file/d/1JBymYlXp9StJFgq-Z1fx7Gv91jUu4sDK/view?usp=drive_link";

export const contact = {
    socialLinks: [
        {
            name: "linkedin",
            display: "LinkedIn",
            link: "https://www.linkedin.com/in/darla-uday-kiran-18a450239",
            icon: linkedinLogo
        },
        {
            name: "github",
            display: "GitHub",
            link: "https://github.com/uday900",
            icon: githubLogo
        },
        {
            name: "upwork",
            display: "Upwork",
            link: "https://www.upwork.com/freelancers/~01b1c8e5a9c0e7d2f6",
            icon: upworkLogo
        },
        {
            name: "leetcode",
            display: "LeetCode",
            link: "https://leetcode.com/u/uday080/",
            icon: leetcodeLogo
        },
        {
            name: "geeeksforgeeks",
            display: "GeeksforGeeks",
            link: "https://www.geeksforgeeks.org/profile/udaykirandbcy6?tab=activity",
            icon: geeksforgeeksLogo
        },
        {
            name: "naukri",
            display: "Naukri",
            link: "https://www.naukri.com/mnjuser/profile?id=&altresid",
            icon: naukriLogo
        },
        {
            name: "medium",
            display: "Medium",
            link: "https://uday900.medium.com/",
            icon: mediumLogo
        },
        {
            name: "instagram",
            display: "Instagram",
            link: "https://www.instagram.com/uday1709_?igsh=MTU1a2s4dWdlcWVmcQ==",
            icon: instagramLogo
        },
        {
            name: "twitter",
            display: "Twitter",
            link: "https://x.com/Delay1709",
            icon: twitterLogo
        },
        {
            name: "telegram",
            display: "Telegram",
            link: "https://t.me/uday1709",
            icon: telegramLogo
        }

    ],

    email: "udaykirandarla2002gmail.com",
    mobile: "+91 6301436515",
    city: "Hyderabad",
    country: "India",
    state: "Telangana",
    zip: "500081",
    town: "Madhapur",

}

export const projects = [
    {
        name: "E-commerce Application",
        image: ecommerce,
        points: [
            "Engineered and deployed a full-stack e-commerce platform using Java, Spring Boot, and REST APIs for the backend, and React with Tailwind CSS for the frontend, resulting in a 40% improvement in system efficiency.",
            "Integrated OAuth authentication and secured the platform using Spring Security and JWT, reducing unauthorized access incidents by 95%.",
            "Implemented Razorpay payment gateway, enabling secure transactions and improving checkout success rate by 30%.",
            "Built dynamic features including product search, filtering, cart, order tracking, and review & rating systems, leading to a 35% boost in user engagement.",
            "Enhanced admin panel with tools for real-time product management, user monitoring, order status updates, and payment tracking.",
            "Improved system reliability by integrating robust exception handling, ensuring a smooth and consistent user experience."
        ],
        skills: [
            "React",
            "Tailwind CSS",
            "Java",
            "Spring Boot",
            "REST API",
            "JWT",
            "Spring Security",
            "OAuth",
            "Razorpay Integration",
            "HTML",
            "CSS",
            "JavaScript",

            "Axios",
            "PostgresSQL",
            "Postman",
            "Git",
            "GitHub",
            "Maven",
            "Spring Tool Suite",
            "VS Code",
            "Exception Handling",
            "Responsive Web Design",
            "API Security",
            "Netlify",
            "Render",
            "Neon DB",
            "Upstash"
        ],
        link: "https://darlastores.netlify.app/",
        git: "https://github.com/uday900/Darla-Stores"
    },
    {
        name: "Employee Management System",
        image: ems,
        points: [
            "Developed an Employee Management System using React, Vite, Redux, and Tailwind CSS with role-based access control (RBAC), reducing administrative workload by 40%.",
            "Designed a responsive and intuitive UI with Tailwind CSS, HTML, and JavaScript, improving engagement by 35% and reducing data entry errors by 25%.",
            "Implemented role assignment, access level visualization, and dynamic UI updates, enhancing system adaptability by 50%."
        ],
        skills: ["React", "Vite", "Redux", "Tailwind CSS", "RBAC"],
        link: "https://role-based-access-control-ui-task.netlify.app/",
        git: "https://github.com/uday900/-Role-Based-Access-Control-UI"
    },
    {
        name: "Quiz Application",
        image: quizapp,
        points: [
            "Developed a Quiz Application using React, Vite, and Redux, ensuring 99% compatibility across devices, leading to increased user engagement.",
            "Integrated Redux for real-time quiz tracking and user interaction, improving user experience and boosting retention rates by 20%.",
            "Implemented quiz creation, quiz-taking functionality, and score tracking, resulting in a 30% increase in daily active users."
        ],
        skills: ["React", "Vite", "Redux"],
        link: "https://udayquizapp.netlify.app/",
        git: "https://github.com/uday900/quizapp"
    },

    {
        name: "Brain Tumor Classification",
        image: btc,
        points: [
            "Developed a Machine Learning-based Brain Tumor Detection model for MRI images, distinguishing between different tumor types with 95% accuracy.",
            "Conducted on a dataset of 3064 images which contain three types of Brain Tumor (glioma, meningioma, pituitary)."
        ],
        skills: ["Python", "Machine Learning"]
    },

    {
        link: "https://financialcalculatorhub.netlify.app/",
        name: "Financial Calculator Hub",
        image: financialLogo,
        points: [
            "Developed a Financial Calculator Hub to provide users with various financial calculation tools, including Loan EMI and Interest Calculators.",
            "Built using React, ensuring a smooth and interactive user experience with real-time calculations.",
            "Designed a responsive interface with Bootstrap, making it accessible across all devices.",
            "Implemented a search feature to help users quickly find the required financial calculator.",
            "Improved user engagement by 40% with an intuitive layout and easy-to-use functionalities."
        ],
        skills: ["React", "HTML", "CSS", "JavaScript"]
    }

];

export const experience = [
    {
        duration: "Aug 2025 – Present",
        company_name: "Mojoes Technologies",
        role: "Junior Java Developer",
        points: [
            "Developing and maintaining enterprise-level Java applications using Spring Boot, RESTful APIs, and microservices architecture.",
            "Collaborating with cross-functional teams to design and implement scalable backend systems and ensure smooth data flow.",
            "Managing deployment and monitoring processes using AWS services including EC2, S3, and RDS.",
            "Promoted from Intern to Junior Developer for delivering high-quality, production-grade backend modules within tight deadlines."
        ],
        skills: ["Java", "Spring Boot", "Microservices", "AWS", "RESTful APIs", "PostgreSQL", "Git", "Bit bucket", "CI/CD"]
    },
    {
        duration: "Apr 2025 – Jul 2025",
        company_name: "Mojoes Technologies",
        role: "Java Developer Intern",
        points: [
            "Assisted in backend development using Java and Spring Boot under senior developer guidance.",
            "Participated in designing RESTful APIs and integrating them with front-end interfaces.",
            "Built responsive user interfaces using HTML, CSS, and JavaScript for internal modules.",
            "Gained exposure to debugging, testing, and optimizing code for better performance."
        ],
        skills: ["Java", "Spring Boot", "PostgreSQL", "AWS", "REST", "HTML", "CSS", "JavaScript", "Git"]
    },
    {
        duration: "Apr 2022 to Jun 2022",
        company_name: "Indian Servers",
        role: "Machine Learning Intern",
        points: [
            "Gained practical experience in Python modules and Machine Learning",
            "Developed a machine learning model for brain tumor classification using Python, achieving a 95% accuracy rate on a dataset of 3064 MRI images."
        ],
        skills: ["Python", "Machine Learning", "Pandas", "Numpy"]
    },
    {
        duration: "Apr 2022 to Jun 2022",
        company_name: "IIDT Blackbucks",
        role: "Web Developer Intern",
        points: [
            `Engaged in hands-on training in web development, focusing on front-end and back-end technologies`,
            `Collaborated with senior developers to implement best practices and enhance application functionality`,
        ],
        skills: ["HTML", "CSS", "JavaScript", "React.js"]
    }
]
export const skills = [
    { name: "Java", icon: FaJava, color: "#007396", delay: 0, type: "top", category: "Backend" },
    { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F", delay: 0.2, type: "top", category: "Backend" },
    { name: "React", icon: FaReact, color: "#61DAFB", delay: 0.4, type: "top", category: "Frontend" },
    { name: "Docker", icon: FaDocker, color: "#2496ED", delay: 0.6, type: "top", category: "DevOps" },
    { name: "AWS", icon: FaAws, color: "#FF9900", delay: 0.8, type: "top", category: "DevOps" },

    { name: "Redux", icon: SiRedux, color: "#764ABC", delay: 1.0, category: "Frontend" },
    { name: "HTML", icon: FaHtml5, color: "#E34F26", category: "Frontend" },
    { name: "CSS", icon: FaCss3, color: "#1572B6", category: "Frontend" },
    { name: "JavaScript", icon: FaJs, color: "#F7DF1E", category: "Frontend" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#38B2AC", category: "Frontend" },

    { name: "Python", icon: FaPython, color: "#3776AB", category: "Backend" },

    { name: "MySQL", icon: SiMysql, color: "#4479A1", category: "Database" },
    { name: "PostgreSQL", icon: BiLogoPostgresql, color: "#336791", category: "Database" },

    { name: "Git", icon: FaGit, color: "#F05032", category: "DevOps" },
    { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5", category: "DevOps" },

    { name: "React Native", icon: TbBrandReactNative, color: "#61DAFB", category: "Mobile" },
    { name: "Expo", icon: SiExpo, color: "#000020", category: "Mobile" },

    { name: "Excel", icon: BsFileEarmarkExcelFill, color: "#217346", category: "Tools" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37", category: "Tools" },
    { name: "Spring Tool Suite", icon: SiSpring, color: "#6DB33F", category: "Tools" },
    { name: "IntelliJ IDEA", icon: SiIntellijidea, color: "#000000", category: "Tools" },
    { name: "VS Code", icon: VscVscode, color: "#007ACC", category: "Tools" }
];

export const certifications = [
    {
        name: "TalentNext course on Java Full Stack",
        issuer: "Wipro @TalentNext",
        issuerLogo: wiproLogo,
        link: "https://cert.diceid.com/csr/cid/5BjoMa?verify=true"
    },
    {
        name: "AWS Academy Graduate - AWS Academy Cloud Foundations",
        issuer: "AWS Academy",
        issuerLogo: awsLogo,
        link: "https://www.credly.com/go/axYx1Se2"
    },
    {
        name: "React JS",
        issuer: "Infosys Springboard",
        issuerLogo: infosysSpringboardLogo,
        link: "https://drive.google.com/file/d/13ik_Kpz72fZDBHmlg3U9sYGdAQrPtRo-/view?usp=sharing"
    },
    {
        name: "SQL and Relational Databases",
        issuer: "Cognitive Class",
        issuerLogo: cognitiveClassLogo,
        link: "https://drive.google.com/file/d/1kdYh9bApd8zFLDxoA4Ix9T2NVDYJwOBL/view?usp=sharing"

    },
    {
        name: "Java Full Stack",
        issuer: "Digital Lync",
        issuerLogo: digitalLyncLogo,
        link: "https://drive.google.com/file/d/1QJQZ-WO-Mbd7RJ-JT5y9c2_uTL-XzMvE/view?usp=sharing"
    },

    {
        name: "Programming in Java",
        issuer: "NPTEL",
        issuerLogo: nptelLogo,
        link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL22CS47S3345036102220759"
    },
    {
        name: "The Joy of Computing using Python",
        issuer: "NPTEL",
        issuerLogo: nptelLogo,
        link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL21CS75S1354014803223592"
    },
    {
        name: "Google Data Analytics",
        issuer: "Coursera",
        issuerLogo: courseraLogo,
        link: "https://coursera.org/verify/professional-cert/XW5RZV24BQQB"
    },
    {
        name: "AWS Academy Machine Learning Foundations",
        issuer: "AWS Academy",
        issuerLogo: awsLogo,
        link: "https://www.credly.com/go/AHr3r3MA"
    }
]

export const education = [
    {
        college: "R.V.R & J.C College of Engineering",
        degree: "B.Tech in Computer Science and Engineering",
        duration: "2020-2024",
        grade: "CGPA: 8.16"
    },
    {
        college: "Sri Pratibha Junior College",
        degree: "Intermediate",
        duration: "2018-2020",
        grade: "CGPA: 9.78"
    },
    {
        college: "ZPH Boys High School",
        degree: "SSC",
        duration: "2017-2018",
        grade: "CGPA: 9.7"
    }
]

export const interest = {
    title: "Beyond the Code",
    description:
        "Apart from coding, I enjoy activities that help me stay sharp, balanced, and creative.",
    items: [
        "<b>Playing Chess</b> - sharpens my strategic thinking and focus.",
        "<b>Yoga</b> - keeps me balanced and mindful.",
        "<b>Cricket</b> - encourages teamwork and sportsmanship.",
        "<b>Book Reading</b> - broadens my knowledge and creativity."
    ]
};


export const acheivments = [
    "🏆 Secured 1st Rank in 10th Grade (School Topper)",
    "🧠 Actively participated in Data Structures & Algorithms (DSA) workshops",
    "📈 Solved 150+ Data Structures and Algorithms problems on LeetCode",
];

