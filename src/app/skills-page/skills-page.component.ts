import { Component, OnInit } from '@angular/core';
import { Logo, Skill } from '../interfaces/interfaces';

@Component({
    selector: 'app-skills-page',
    templateUrl: './skills-page.component.html',
    styleUrls: ['./skills-page.component.scss'],
})
export class SkillsPageComponent implements OnInit {
    constructor() {}
    panelOpenState = false;
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

    skills: Skill[] = [
        {
            title: 'Angular Development',
            description: '2+ years of experience',
            expandedText:
                "2+ years of experience implementing SPA's using TypeScript, HTML and SCSS/CSS. \
                Engineered fixes and added new functionality to 10+ existing applications, and implemented 2 new Single Page Applications (SPA's) using Angular 2+, TypeScript, HTML, and SCSS. \
                Delivered moderate and high complexity stories on time, making sure high quality code was provided and while maintaining high Unit Test coverage using Karma and Jasmine",
        },
        {
            title: 'Technical Lead',
            description: 'Managed a new team of 8+ developers',
            expandedText:
                'Managed a new team of 8+ developers, supervised development and delegated tasks, while ensuring deliverables were correct and completed on time',
        },
        {
            title: 'RESTful Web API',
            description: '2+ years of experience',
            expandedText:
                "2+ Years of professional experience with RESTful Web Services and NodeJS. \
                Built 2 new RESTful API\'s, and upgraded multiple pre-existing WebAPI's to add new functionality",
        },
        {
            title: 'Unit Testing',
            description: '2+ years of experience',
            expandedText:
                'Experience with unit testing tools like Jasmine and Karma.',
        },
        {
            title: 'Version Control',
            description: 'Experience using Git',
            expandedText:
                'Experience using GitHub for source code management and for version control.',
        },
        {
            title: 'Agile Methodologies',
            description: 'Certified SCRUM Master',
            expandedText:
                'Strong understanding and experience with all the phases of Agile development.',
        },
    ];

    ngOnInit(): void {}

    splitText(text: string) {
        const textArray: string[] = text.split('.');
        return textArray;
    }
}
