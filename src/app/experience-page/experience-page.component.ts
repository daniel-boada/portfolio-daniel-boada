import { Component, OnInit } from '@angular/core';
import { Skill } from '../interfaces/interfaces';

@Component({
    selector: 'app-experience-page',
    templateUrl: './experience-page.component.html',
    styleUrls: ['./experience-page.component.scss'],
})
export class ExperiencePageComponent implements OnInit {
    constructor() {}

    capgemini = 'assets/Capgemini.png';
  
    skills: Skill[] = [
        {
            title: 'Technical Lead',
            description: 'Lead a team of 8+ developers',
            expandedText:
                "Managed a new team of 8+ developers, supervised development and delegated tasks, while ensuring deliverables were correct and completed on time. \
                Gained 2 new contracts for the company, totaling to more than $320,000 in revenue, by demonstrating to the client the capabilities of the team.  \
                Drove daily stand-ups and delegated tasks to the team in an efficient manner, and coordinated with 3 business partners toward the successful launch of a new functionality for their product. \
                Cultivated a positive team culture by maintaining an open communication with both the development team and clients, which decreased the number of defects in our code by getting correct understanding of client requirements and needs. \
                Reviewed over 100 Pull Requests from the team to ensure clean and high quality deliverables, lowering the total number of defects and incidents found in our code significantly. \
                Mentored 5+ junior developers, guiding them on Web Development (Angular, HTML, CSS), Unit Testing, WebAPI development, Git usage, and enabling them to learn best practices for writing code",
            
        },
        {
            title: 'Angular Developer',
            description: '2+ years of experience',
            expandedText:
                'Engineered fixes and added new functionality to 10+ existing applications, and implemented 2 new Single Page Applications (SPA\'s) using Angular 2+, TypeScript, HTML, and SCSS. \
                Delivered moderate and high complexity stories on time, making sure high quality code was provided and while maintaining high Unit Test coverage using Karma and Jasmine. \
                Built 2 new RESTful API\'s, and upgraded multiple pre-existing WebAPI\'s to add new functionality',
        },
    ];
    ngOnInit(): void {}

    splitText(text: string) {
      const textArray: string[] = text.split('.');
      return textArray;
    }
}
