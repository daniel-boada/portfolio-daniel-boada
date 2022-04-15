import { Injectable } from '@angular/core';
import { Logo, TileInfo } from '../interfaces/interfaces';

@Injectable({
    providedIn: 'root',
})
export class AppConstants {
    //Personal Info
    personalGithubUrl = 'https://github.com/daniel-boada/';
    personalLinkedInUrl = 'https://www.linkedin.com/in/danielboada/';
    personalEmail = 'danielboada.db@gmail.com';
    firstName = 'Daniel';
    lastName = 'Boada';
    mailToPersonalEmail = 'mailto:danielboada.db@gmail.com';

    //Assets
    linkedInLogoWithName = 'assets/linkedInName.png';
    githubLogoWithName = 'assets/githubName.png';
    capgeminiLogoWithName = 'assets/Capgemini.png';
    profilePicture = 'assets/danielBoada.png';
    profileIcon = 'assets/logo.png';
    menuNavBarIcon = 'assets/menu_navbar.svg';
    linkedInIcon = 'assets/linkedin.svg';
    mailIcon = 'assets/mail.svg';
    githubIcon = 'assets/github.svg';

    //pages
    skillsTitle = 'Skills';
    projectsTitle = 'Projects';
    experienceTitle = 'Experience';
    contactTitle = 'Contact';
    homeTitle = 'Home'

    //Experience
    experiencesInfo: TileInfo[] = [
        {
            title: 'Technical Lead',
            description: 'Lead a team of 8+ developers',
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
            expandedText: [
                "Engineered fixes and added new functionality to 10+ existing applications, and implemented 2 new Single Page Applications (SPA's) using Angular 2+, TypeScript, HTML, and SCSS.",
                'Delivered moderate and high complexity stories on time, making sure high quality code was provided and while maintaining high Unit Test coverage using Karma and Jasmine.',
                "Built 2 new RESTful API's, and upgraded multiple pre-existing WebAPI's to add new functionality",
            ],
        },
    ];

    //Home Page
    ocupations = [
        'Web Developer',
        'UI/UX Developer',
        'Front End Engineer',
        'UI/UX Programmer',
        'Software Developer',
        'Computer Engineer',
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
        {
            description: 'Git',
            url: 'assets/git.svg',
        },
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

    skills: TileInfo[] = [
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
