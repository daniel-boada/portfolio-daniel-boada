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
                'I have 2+ years of angular development expereience in Capgemini',
        },
        {
            title: 'RESTful Web API',
            description: '2+ years of experience',
            expandedText:
                'I have 2+ years of angular development expereience in Capgemini',
        },
        {
            title: 'Unit Testing',
            description: '2+ years of experience',
            expandedText:
                'I have 2+ years of angular development expereience in Capgemini',
        },
        {
            title: 'Version Control',
            description: '2+ years of experience',
            expandedText:
                'I have 2+ years of angular development expereience in Capgemini',
        },
        {
            title: 'Technical Lead',
            description: '2+ years of experience',
            expandedText:
                'I have 2+ years of angular development expereience in Capgemini',
        },
        {
            title: 'Agile Methodologies',
            description: '2+ years of experience',
            expandedText:
                'I have 2+ years of angular development expereience in Capgemini',
        },
    ];

    ngOnInit(): void {}

    splitText(text: string) {
        const textArray: string[] = text.split('.');
        return textArray;
      }
}
