import { Component } from '@angular/core';
import { AppConstants } from './common/constants/constants';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    constructor(
        private constants: AppConstants    
    ) {}

    skillsTitle = this.constants.skillsTitle;
    projectsTitle = this.constants.projectsTitle;
    experienceTitle = this.constants.experienceTitle;
    contactTitle = this.constants.contactTitle;
    homeTitle = this.constants.homeTitle;

    projects = this.constants.projectsInfo;
    experiences = this.constants.experiencesInfo;
}
