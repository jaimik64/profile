export const profileData = {
    personalInfo: {
        name: "Diya Chauhan",
        subtitle: "UI/UX & Frontend Developer",
        contact: {
            phone: "+91 9898506910",
            email: "chauhandiya2114@gmail.com",
            location: "Gujarat, India",
            linkedin: "https://www.linkedin.com/in/diya-chauhan14/",
            github: "https://github.com/Diya-Chauhan"
        },
        summary: "UI/UX & Frontend Developer with experience in creating high-fidelity prototypes and developing responsive layouts using HTML, CSS, JavaScript, and Bootstrap. Strong background in Python development, UI redesigns, and user-centric interfaces."
    },
    education: [
        {
            id: 1,
            institution: "U.V. Patel College Of Engineering, Ganpat University",
            degree: "B.Tech in Computer Engineering",
            duration: "Aug'21 - May'25",
            gpa: "7.0 CGPA"
        },
        {
            id: 2,
            institution: "Shri Vividhlaxi Vidyamandir, Palanpur",
            degree: "XII",
            duration: "Mar'21",
            gpa: "70%"
        },
        {
            id: 3,
            institution: "Shri Vividhlaxi Vidyamandir, Palanpur",
            degree: "X",
            duration: "Mar'19",
            gpa: "60%"
        }
    ],
    experiences: [
        {
            role: "UI/UX Intern",
            company: "Vnnovate Solutions Pvt. Ltd.",
            period: "Jan'25 - April'25",
            achievements: [
                "Led the redesign of the official Vnnovate Solutions website as part of a strategic UX improvement project",
                "Created high-fidelity prototypes in Figma focusing on modern aesthetics, usability, and responsiveness",
                "Developed responsive front end layouts using HTML, CSS, and Bootstrap without custom CSS",
                "Improved website structure and user flow to enhance engagement and performance."
            ]
        },
        {
            role: "Python Development Intern",
            company: "Vnnovate Solutions Pvt. Ltd.",
            period: "Dec'23 - Jan'24",
            achievements: [
                "Developed a facial recognition system using OpenCV, Python, and Firebase",
                "Integrated core libraries like CVZone to enhance system performance",
                "Successfully completed the project, showcasing strong technical skills."
            ]
        }
    ],
    projects: [
        {
            id: 1,
            title: 'Cashsnap - Accounting Web Application',
            problem: 'Small businesses needed a way to manage daily financial transactions efficiently.',
            solution: 'Created a financial management app focusing on streamlined transaction management and advanced reporting features for strategic decision-making.',
            tags: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap', 'Firebase'],
            image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800&h=500',
            codeLink: 'https://github.com/Diya-Chauhan'
        },
        {
            id: 2,
            title: 'Vnnovate Solutions: Website Redesign',
            problem: 'The company website needed enhancement in user experience, visual design, and performance.',
            solution: 'Designed user-centric interfaces in Figma and developed the frontend utilizing HTML, CSS, and Bootstrap, replicating exact designs.',
            tags: ['UI/UX', 'Figma', 'HTML', 'CSS', 'Bootstrap'],
            image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=800&h=500'
        }
    ] as any[],
};
