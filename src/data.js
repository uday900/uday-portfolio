
import ems from "./assets/ems.png";
import ecommerce from "./assets/ecommerce.avif";
import btc from "./assets/btc.jpg";
import quizapp from "./assets/quizapp.webp";
import todoapp from "./assets/todoapp.avif";
import financialLogo from "./assets/financial-logo.jpg"

export const fullName = "Darla Udaya Kiran";

export const bio = "A recent graduate from R.V.R & J.C College of Engineering\n" +
    "with a strong foundation in full-stack development.\n" +
    "My technical skills have been honed through practical experience, \n" +
    "including internships where I developed comprehensive web applications. \n" +
    "I am passionate about leveraging my technical expertise to drive innovation \n" +
    "and solve complex challenges in the tech industry.";


export const contact = {
    socialLinks: [
        {
            name: "linkedin",
            link: "https://www.linkedin.com/in/darla-uday-kiran-18a450239",
        },
        {
            name: "github",
            link: "https://github.com/uday900",
        },
        {
            name: "twitter",
            link: "https://x.com/Delay1709",
        },
       
        {
            name: "instagram",
            link: "https://www.instagram.com/uday1709_?igsh=MTU1a2s4dWdlcWVmcQ==",
        },
      
        {
            name: "leetcode",
            link: "https://leetcode.com/u/uday080/"
        },
        {
            name: "Naukri", 
            link: "https://www.naukri.com/mnjuser/profile?id=&altresid"
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
                "Redux",
                "Axios",
                "MySQL",
                "Postman",
                "Git",
                "GitHub",
                "Maven",
                "IntelliJ IDEA",
                "VS Code",
                "Exception Handling",
                "Responsive Web Design",
                "API Security"
              ],
                          
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
            git:"https://github.com/uday900/quizapp"
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
    },
    {
        link: "https://udaytodoapp.netlify.app/",
        name: "ToDo App",
        image: todoapp,
        points: [
            "Developed a responsive Todo application that allows users to create, read, update, and delete tasks.",
            "Implemented Redux for state management to handle task data efficiently.",
            "Ensured the application is fully responsive for both desktop and mobile devices, enhancing user experience across platforms.",
            "User-friendly interface for task management."
        ],
        skills: ["React.js", "Redux", "HTML", "CSS", "JavaScript"]
    }
   
];

export const experience= [
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
    "Java",
    "Spring Boot",
    "React",
    "SQL",
    "HTML",
    "CSS",
    "JavaScript",
    "Tailwind",
    "python",
    "C",
    "Excel",
]

export const certifications = [
    
    {
        name: "Java Full Stack",
        issuer: "Digital Lync",
        link: "https://drive.google.com/file/d/1QJQZ-WO-Mbd7RJ-JT5y9c2_uTL-XzMvE/view?usp=sharing"
    },
    {
        name: "React JS",
        issuer: "Infosys Springboard",
        link: "https://drive.google.com/file/d/13ik_Kpz72fZDBHmlg3U9sYGdAQrPtRo-/view?usp=sharing"
    },
    {
        name: "SQL and Relational Databases",
        issuer: "Cognitive Class",
        link: "https://drive.google.com/file/d/1kdYh9bApd8zFLDxoA4Ix9T2NVDYJwOBL/view?usp=sharing"
        
    },
    {
        name: "AWS Academy Graduate - AWS Academy Cloud Foundations",
        issuer: "AWS Academy",
        link: "https://www.credly.com/go/axYx1Se2"
    },
    {
        name: "Programming in Java",
        issuer: "NPTEL",
        link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL22CS47S3345036102220759"
    },
    {
        name: "The Joy of Computing using Python",
        issuer: "NPTEL",
        link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL21CS75S1354014803223592"
    },

   
    {
        name: "Google Data Analytics",
        issuer: "Coursera",
        link: "https://coursera.org/verify/professional-cert/XW5RZV24BQQB"
    },
    {
        name: "AWS Academy Machine Learning Foundations",
        issuer: "AWS Academy",
        link: "https://www.credly.com/go/AHr3r3MA"
    },
  
    {
        name: "TalentNext course on Java Full Stack",
        issuer: "Wipro @TalentNext",
        link: "https://cert.diceid.com/csr/cid/5BjoMa?verify=true"
    },
    
   
   


]

export const education = [
    {
        college: "R.V.R & J.C College of Engineering",
        degree: "B.E. in Computer Science and Engineering",
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

export const interests = [
    "Playing Chess",
    "Yoga",
    "Cricket",
    "Book reading"
]

export const others = [
    "10th Class School First",
    "Participate DSA Work shop",
]

