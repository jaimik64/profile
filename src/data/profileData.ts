export const profileData = {
    personalInfo: {
        name: "Jaimik Chauhan",
        subtitle: "Full-Stack Developer",
        contact: {
            phone: "+91 84015 63076",
            email: "jaimik.chauhan06@gmail.com",
            location: "Noida, UP, India",
            linkedin: "https://linkedin.com/in/jaimikchauhan64",
            github: "https://github.com/jaimik64" // Inferred from portfolio URL
        },
        summary: "Versatile Full-Stack Developer experienced in React, Angular, Node.js, and Spring Boot, collaborating across teams to design responsive frontends and robust backends that power efficient, user-centric applications."
    },
    education: [
        {
            id: 1,
            institution: "Institute of Technology, Nirma University",
            degree: "Bachelor's, Computer Science",
            duration: "July 2020 - June 2023",
            gpa: "8.23"
        },
        {
            id: 2,
            institution: "B AND B INSTITUTE OF TECHNOLOGY, GUJARAT TECHNOLOGICAL UNIVERSITY",
            degree: "Diploma, Computer Engineering",
            duration: "July 2017 - June 2020",
            gpa: "9.81"
        }
    ],
    experiences: [
        {
            role: "Software Developer",
            company: "Addverb Technology",
            period: "January 2023 - Present",
            achievements: [
                "Designed and implemented user-friendly UIs for multiple modules, including collaborations with leading Indian fashion warehouse brands and market leaders in fashion, grocery, and beauty, delivering intuitive and seamless designs",
                "Developed generic reusable components using Angular and Angular Material UI, accelerating project delivery.",
                "Built RESTful APIs using Spring Boot and integrated them with Angular frontends for seamless data exchange.",
                "Developed database schemas, wrote optimized SQL queries, and managed CRUD operations using MySQL/PostgreSQL."
            ]
        },
        {
            role: "Software Engineer Intern",
            company: "eInfoChips - An Arrow Company",
            period: "May 2022 - July 2022",
            achievements: [
                "Developed a .NET-based web application to help bookstore owners efficiently manage their inventory and stock levels.",
                "Designed and implemented frontend interfaces for seamless user interaction and backend services for robust stock management."
            ]
        },
        {
            role: "Full Stack Developer",
            company: "Webmate.in",
            period: "June 2020 - Dec 2020",
            achievements: [
                "Developed end-to-end full stack solutions tailored to business requirements.",
                "Maintained and improved existing codebase ensuring code quality and performance."
            ]
        }
    ],
    projects: [

        {
            id: 1,
            title: 'Document Reviewer',
            problem: 'Banking clients needed an efficient way to review and analyze customer account statements.',
            solution: 'Designed and developed a React-based web application calculating credit and loans eligibility, improving decision-making accuracy.',
            tags: ['React', 'JavaScript', 'Tailwind CSS'],
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=500'
        },
        {
            id: 2,
            title: 'Mess Eats',
            problem: 'Bachelors faced frequent difficulties tracking and managing their daily meals efficiently.',
            solution: 'Engineered a highly responsive MERN stack web application to solve common food-related problems with seamless frontend interaction.',
            tags: ['MERN Stack', 'MongoDB', 'Node.js', 'React'],
            codeLink: 'https://github.com/jaimik64/MERN_Mess_Eats',
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800&h=500'
        },
        {
            id: 3,
            title: 'Donation Management System',
            problem: 'NGOs required an organized web-based platform to manage and track global donations.',
            solution: 'A full-stack web application built efficiently parsing SQL operations ensuring solid administration workflows.',
            tags: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
            codeLink: 'https://github.com/jaimik64/pro_donate',
            image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb0?auto=format&fit=crop&q=80&w=800&h=500'
        },
        {
            id: 4,
            title: 'Car Rental System',
            problem: 'Manual tracking of car rental lifecycles was tedious and error-prone.',
            solution: 'Developed a robust Django application focused on easy reservations and seamless scalable backends.',
            tags: ['Django', 'Python', 'HTML/CSS'],
            codeLink: 'https://github.com/jaimik64/django_CarRentalSystem',
            image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800&h=500'
        }
    ]
};
