import { Component } from '@angular/core';
import { AppConstants } from './constants/constants';
import { HelperFunctionsService } from './services/helper-functions.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    constructor(
        private constants: AppConstants,
        private helperFunctionsService: HelperFunctionsService
    ) {}

    linkedInIcon = this.constants.linkedInIcon;
    mailIcon = this.constants.mailIcon;
    githubIcon = this.constants.githubIcon;
    skillsTitle = this.constants.skillsTitle;
    projectsTitle = this.constants.projectsTitle;
    experienceTitle = this.constants.experienceTitle;
    contactTitle = this.constants.contactTitle;
    homeTitle = this.constants.homeTitle;
    mailToPersonalEmail = this.constants.mailToPersonalEmail;

    public redirectToGithub() {
        this.helperFunctionsService.redirectToGithub();
    }

    public redirectToLinkedIn() {
        this.helperFunctionsService.redirectToLinkedIn();
    }
}
