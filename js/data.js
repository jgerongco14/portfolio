const portfolioData = {
  skills: {
    Languages: [
      {
        name: "Java",
        level: 85,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        name: "Dart",
        level: 85,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
      },
      {
        name: "JavaScript",
        level: 85,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "PHP",
        level: 90,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      },
      {
        name: "Python",
        level: 80,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "TypeScript",
        level: 80,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
    ],
    Frontend: [
      {
        name: "React",
        level: 75,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Bootstrap",
        level: 90,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      },
      {
        name: "HTML5",
        level: 95,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        level: 95,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "Flutter",
        level: 95,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
      },
    ],
    Backend: [
      {
        name: "Laravel",
        level: 90,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
      },
      {
        name: "Node.js",
        level: 80,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
    ],
    Database: [
      {
        name: "MySQL",
        level: 90,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "PostgreSQL",
        level: 85,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "Firebase",
        level: 70,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      },
      {
        name: "PocketBase",
        level: 95,
        logo: "https://pocketbase.io/images/logo.svg",
      },
    ],
    Tools: [
      {
        name: "Git",
        level: 90,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "Github",
        level: 90,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
      {
        name: "Visual Studio Code",
        level: 95,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      },
    ],
  },
  projects: [
    {
      id: 1,
      title: "ChumSpace",
      description:
        "A mobile app built with Flutter and Pocketbase to support individuals with Down syndrome. It provides interactive tools for cognitive development, communication, and daily routines.",
      technologies: ["Flutter", "Dart", "Pocketbase"],
      platform: "Mobile",
      image: "assets/projects/chumspace.png",
      fullStory: "ChumSpace was inspired by a desire to help individuals with Down syndrome. I led the development using Flutter for the frontend and Pocketbase for the backend. The app features interactive games, daily routines, and communication tools, all designed with accessibility in mind. The project was a collaboration with special education professionals and received positive feedback from users and their families.",
    },
    {
      id: 2,
      title: "Guess That Sound",
      description:
        "A Flutter-based mobile game integrated with Firebase, where I contributed as a part-time Full Stack Developer, focusing on UI design and user experience.",
      technologies: ["Flutter", "Dart", "Firebase"],
      platform: "Mobile",
      image: "assets/projects/guess that sound.png",
      fullStory: "Guess That Sound is a fun and educational game for children. My role was to design the UI and enhance the user experience. The game uses Firebase for real-time data and user authentication. It was well-received in local schools and helped children improve their auditory recognition skills.",
    },
    {
      id: 3,
      title: "Coco",
      description:
        "Converted a classmate's web project into a mobile-friendly Flutter app, improving accessibility. Later continued by others, COCO is now an active startup with SEC registration and IP rights.",
      technologies: ["Flutter", "Dart", "Firebase"],
      platform: "Mobile",
      image: "assets/projects/coco.png",
      fullStory: "COCO started as a simple web project and evolved into a full-fledged mobile app. I was responsible for the Flutter migration and UI/UX improvements. The project gained traction and is now a registered startup, providing valuable services to its users.",
    },
    {
      id: 4,
      title: "BMI Checker",
      description:
        "A simple Flutter app that calculates Body Mass Index (BMI) and health categories, developed as a college project to strengthen my mobile development skills.",
      technologies: ["Dart", "Flutter"],
      platform: "Mobile",
      image: "assets/projects/bmi_checker.png",
      fullStory: "BMI Checker was my first solo mobile project. It helped me understand the basics of Flutter and mobile app development. The app is simple but effective, and it was used as a learning tool in my college classes.",
    },
    {
      id: 5,
      title: "SpedCademy",
      description:
        "An educational platform designed for special education students and teachers",
      technologies: [
        "Laravel",
        "React",
        "MySQL",
        "Inertia",
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "PHP",
      ],
      platform: "Web",
      image: "assets/projects/spedcademy.png",
      fullStory: "SpedCademy was a collaborative project aimed at making education more accessible. I worked on both the backend (Laravel) and frontend (React). The platform supports teachers and students with special needs, offering custom lesson plans and progress tracking.",
    },
    {
      id: 6,
      title: "Pickleball",
      description:
        "A Laravel-based web platform developed with HTML, JavaScript, Bootstrap, and MySQL, applying system analysis and full stack development principles.",
      technologies: [
        "Laravel",
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "PHP",
        "MySQL",
      ],
      platform: "Web",
      image: "assets/projects/pickleball.png",
      fullStory: "Pickleball was developed for a local sports club. I handled the full stack development, from database design to frontend implementation. The system manages tournaments, player stats, and scheduling, and is still in use today.",
    },
    {
      id: 7,
      title: "Ayumi's Vlogging Project",
      description:
        "Created UI/UX design concepts for a proposed web application using React.js. Although the project was paused, the design remains part of my portfolio.",
      technologies: ["React", "React Native", "Node"],
      platform: "Web",
      image: "assets/projects/ayumi.png",
      fullStory: "This project was a creative challenge. I designed the UI/UX for a vlogging platform using Figma and React.js. Although the project was paused, the design was praised for its modern look and user-friendly flow.",
    },
    {
      id: 8,
      title: "HRIS – Client Project",
      description:
        "A custom Human Resource Information System built with Laravel, Bootstrap, and MySQL to streamline employee management, payroll, and internal communication for a school client.",
      technologies: [
        "Laravel",
        "MySQL",
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "PHP",
      ],
      platform: "Web",
      image: "assets/projects/hris.jpg",
      fullStory: "HRIS was a client project for a local school. I developed the backend and worked closely with the client to ensure all HR processes were automated. The system includes payroll, employee management, and internal communications, making HR tasks much more efficient.",
    },
  ],
  experience: [
    {
      title: "Instructor - Part-time",
      company: "Mindanao Kokusai Daigaku (MKD) | Davao City, Philippines",
      period: "2025 - Present",
      description:
        "I am teaching mobile application development using Dart and Flutter.",
      technologies: [
        "Dart",
        "Flutter",
        "Appwrite",
        "Github",
        "Figma",
        "Visual Studio Code",
        "Google Classroom",
      ],
    },
    {
      title: "Project Assistant II",
      company:
        "University of the Immaculate Conception | Davao City, Philippines",
      period: "2024 - 2025",
      description:
        "As part of a University of the Immaculate Conception project funded by the Department of Science and Technology (DOST), I contributed to a research initiative focused on functional foods endemic to the Philippines.",
      technologies: [
        "Google Sheets",
        "Google Docs",
        "Microsoft Office Word",
        "Microsoft Office PowerPoint",
      ],
    },
    {
      title: "Instructor - Part-time",
      company:
        "University of the Immaculate Conception | Davao City, Philippines",
      period: "2025 - Present",
      description:
        "For almost a year, I have been teaching Data Analytics, Artificial Intelligence, and IT Era to students pursuing a Bachelor of Medical Laboratory Science (BMLS).",
      technologies: [
        "Google Classroom",
        "Canva",
        "Microsoft Office Word",
        "Microsoft Office PowerPoint",
      ],
    },
    {
      title: "Instructor - Part-time",
      company: "Philippine Women's College of Davao | Davao City, Philippines",
      period: "2024 - Present",
      description:
        "Teaching college-level students in advanced computer science subjects including Mobile Development, System Integration and Architecture, Complex Systems, and Advanced Database Systems.",
      technologies: [
        "Microsoft Teams",
        "Canva",
        "Microsoft Office Word",
        "Microsoft Office PowerPoint",
      ],
    },
    {
      title: "Part-time Full Stack Developer",
      company: "Mistfits | Canada",
      period: "2023 - 2024",
      description:
        "I worked at Misfits for almost a year and a half, primarily focusing on front-end tasks using Flutter and Firebase.",
      technologies: ["Dart", "Flutter", "Firebase", "Bitbucket", "Figma"],
    },
  ],
  education: [
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "University of the Immaculate Conception",
      period: "2020 - 2024",
      description:
        "Graduated with Latin Honors, My major is Healthcare Technologies, Forte Programming",
      achievements: [
        "Cum Laude",
        "Dean's List",
        "Best Research Award",
        "Leadership Award",
        "Best Internship Award",
        "SSG Service Award",
      ],
    },
    {
      degree: "Senior High School",
      institution: "Philippine Women's College of Davao",
      period: "2018-2020",
      description: "Graduated with honors. ICT-Computer Programming.",
      achievements: [
        "With Honors",
        "Strand Excellence Award",
        "3rd Place - ICT Quiz Bee",
        "Best Research Award",
      ],
    },
    {
      degree: "Junior High School",
      institution: "Mabini National High School",
      period: "2013-2018",
      description:
        "Actively participated in various academic and extracurricular activities, demonstrating leadership and teamwork skills.",
      achievements: [
        "Leadership Award",
        "Organization President",
        "Scout Leader",
        "Loyalty Award",
      ],
    },
  ],
  achievements: [
    {
      title: "Graduated Cum Laude",
      year: "2024",
      description:
        "Earned a Bachelor's degree in Information Technology, Major in Healthcare Technology from the University of Immaculate Conception.",
      category: "Academic",
    },
    {
      title: "Best Research (Capstone)",
      year: "2024",
      description:
        "Recognized for outstanding research and innovation during the capstone project presentation.",
      category: "Academic",
    },
    {
      title: "Vice Governor Internal - College of Computer Studies",
      year: "2022-2023",
      description:
        "Served as Vice Governor Internal, providing leadership and support to the College of Computer Studies.",
      category: "Leadership",
    },
    {
      title: "Executive Public Information Officer",
      year: "2021-2022",
      description:
        "Handled communication and information dissemination for the University of Immaculate Conception Student Government.",
      category: "Leadership",
    },
    {
      title: "Kumu Hackathon Finalist",
      year: "2021",
      description:
        "Selected as a finalist in the Kumu Hackathon for innovative project development.",
      category: "Competition",
    },
  ],
};
