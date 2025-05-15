import { Injectable } from '@angular/core';
import { Logo, CardInfo } from '../interfaces/interfaces';

@Injectable({
    providedIn: 'root',
})
export class AppConstants {
    //Personal Info
    personalGithubUrl = 'https://github.com/daniel-boada/';
    personalLinkedInUrl = 'https://www.linkedin.com/in/danielboada/';
    firstName = 'Daniel';
    lastName = 'Boada';

    //Assets
    profilePicture = 'assets/DanielBoada.png';
    profileIcon = 'assets/logo.png';
    menuNavBarIcon = 'assets/menu_navbar.svg';

    //pages
    skillsTitle = 'Skills';
    projectsTitle = 'Projects';
    experienceTitle = 'Experience';
    contactTitle = 'Contact';
    homeTitle = 'Home'

    //Experience
    experiencesInfo: CardInfo[] = [
        {
            title: 'Technical Lead',
            description: 'Lead a team of 8+ developers',
            logo: "/assets/westgate_horizontal.png",
            dates: "Dec 2022 - Present",
            expandedText: [
                'Developed new features and enhancements for client-facing websites, focusing on adding new functionality and fixing existing bugs, taking into account performance and seamless user experience, while implementing good code practices focused on scalability and readability',
                'Delivered high-quality projects by developing new features, refactoring existing code, and collaborating closely with Designers, Backend Developers, Project Managers, and other Front-end Developers to meet deadlines and maintain project and code standards.',
                'Modernized legacy JSP components by refactoring them into an Angular-based framework, improving code maintainability and scalability. This allowed the team to increase our delivery speed by having cleaner code.',
                'Contributed significantly to accessibility improvements by implementing key changes, enhancing usability and compliance with industry standards using the WCAG standards for ADA compliance, including adding focus states, text-to-speech labels, improving keyboard accessibility, and using semantic HTML elements.',
                'Integrated Google Analytics to track key website metrics, enabling data-driven decision-making by providing detailed insights into user behavior, navigation patterns, and engagement levels, allowing the team to identify areas for improvement to optimize user experience and implement strategic enhancements.',
            ],
        },
        {
            title: 'Technical Lead',
            description: 'Lead a team of 8+ developers',
            logo: "assets/disney-cruise-line.svg",
            dates: "Apr 2021 - Jul 2022",
            expandedText: [
                'Managed a new team of 8+ developers, supervised development and delegated tasks, while ensuring deliverables were correct and completed on time.',
                'Gained 2 new contracts for the company, totaling to more than $320,000 in revenue, by demonstrating to the client the capabilities of the team.',
                'Drove daily stand-ups and delegated tasks to the team in an efficient manner, and coordinated with 3 business partners toward the successful launch of a new functionality for their product.',
                'Cultivated a positive team culture by maintaining an open communication with both the development team and clients, which decreased the number of defects in our code by getting correct understanding of client requirements and needs.',
                'Reviewed over 100 Pull Requests from the team to ensure clean and high quality deliverables, lowering the total number of defects and incidents found in our code significantly.',
                'Mentored 5+ junior developers, guiding them on Web Development (Angular, HTML, CSS), Unit Testing, WebAPI development, Git usage, and enabling them to learn best practices for writing code",',
            ],
        },
        {
            title: 'Angular Developer',
            description: '2+ years of experience',
            logo: "assets/Walt-Disney-World-Logo.svg",
            dates: "Mar 2020 - Apr 2021",
            expandedText: [
                "Engineered fixes and added new functionality to 10+ existing applications, and implemented 2 new Single Page Applications (SPA's) using Angular 2+, TypeScript, HTML, and SCSS.",
                'Delivered moderate and high complexity stories on time, making sure high quality code was provided and while maintaining high Unit Test coverage using Karma and Jasmine.',
                "Built 2 new RESTful API's, and upgraded multiple pre-existing WebAPI's to add new functionality",
            ],
        },
    ];

    //Experience
    projectsInfo: CardInfo[] = [
        {
            title: 'Technical Lead',
            description: 'Lead a team of 8+ developers',
            logo: "/assets/nova-logo-2024.png",
            dates: "Oct 2022 - Dec 2022",
            website: "www.novausawood.com",
            expandedText: [
                'Updated website into a modern looking web application by translating existing Figma designs using ASP.NET, HTML, CSS'    
            ],
        },
        {
            title: 'Technical Lead',
            description: 'Lead a team of 8+ developers',
            logo: "/assets/groupWinCleaners.png",
            dates: "Jul 2022 - Oct 2022",
            website: "www.groupwincleaners.com",
            expandedText: [
                'Designed and developed a website for a family-owned cleaning company to reflect a modern and clean look using Squarespace'
            ],
        },
    ];

    //Skills Page
    icons: Logo[] = [
        {
            description: 'Angular',
            url: 'assets/angular.svg',
        },
        {
            description: 'JavaScript',
            url: 'assets/javascript.svg',
        },
        {
            description: 'HTML',
            url: 'assets/html.svg',
        },
        {
            description: 'CSS/SCSS',
            url: 'assets/css.svg',
        },
        // {
        //     description: 'Git',
        //     url: 'assets/git.svg',
        // },
        {
            description: 'Jira',
            url: 'assets/jira.svg',
        },
        {
            description: 'NodeJS',
            url: 'assets/nodejs.svg',
        },
        {
            description: 'TypeScript',
            url: 'assets/typescript.svg',
        },
        {
            description: 'VS Code',
            url: 'assets/vscode.png',
        },
    ];

    skills: CardInfo[] = [
        {
            title: 'Angular Development',
            description: '2+ years of experience',
            expandedText: [
                '2+ years of experience implementing SPA\'s using TypeScript, HTML and SCSS/CSS.',
                'Engineered fixes and added new functionality to 10+ existing applications, and implemented 2 new Single Page Applications (SPA\'s) using Angular 2+, TypeScript, HTML, and SCSS.',
                'Delivered moderate and high complexity stories on time, making sure high quality code was provided and while maintaining high Unit Test coverage using Karma and Jasmine'
            ]
        },
        {
            title: 'Technical Lead',
            description: 'Managed a new team of 8+ developers',
            expandedText: [
                'Managed a new team of 8+ developers, supervised development and delegated tasks, while ensuring deliverables were correct and completed on time'
            ]
        },
        {
            title: 'RESTful Web API',
            description: '2+ years of experience',
            expandedText: [
                '2+ Years of professional experience with RESTful Web Services and NodeJS.',
                'Built 2 new RESTful API\'s, and upgraded multiple pre-existing WebAPI\'s to add new functionality'
            ]
        },
        {
            title: 'Unit Testing',
            description: '2+ years of experience',
            expandedText: [
                'Experience with unit testing tools like Jasmine and Karma.'
            ]
        },
        {
            title: 'Version Control',
            description: 'Experience using Git',
            expandedText: [
                'Experience using GitHub for source code management and for version control.'
            ]
        },
        {
            title: 'Agile Methodologies',
            description: 'Certified SCRUM Master',
            expandedText: [
                'Strong understanding and experience with all the phases of Agile development.'
            ]
        },
    ];

}
