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
                'Responsible for making sure tasks and deliverables were completed on time.\
                Drove daily stand-ups and delegated tasks to the team in an efficient manner.\
                Reviewed team\'s code and PR\'s to ensure consistent and high quality code.\
                Communicated with the client frequently to clarify requirements\
                ',
        },
        {
            title: 'Technical Lead',
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
