import { Component, OnInit } from '@angular/core';
import { AppConstants } from '../constants/constants';
import { HelperFunctionsService } from '../services/helper-functions.service';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
    constructor(
        private constants: AppConstants,
        private helperFunctionsService: HelperFunctionsService
    ) {}

    profilePicture = this.constants.profilePicture;
    ocupations = this.constants.ocupations;
    firstName = this.constants.firstName;
    lastName = this.constants.lastName;

    linkedInIcon = this.constants.linkedInIcon;
    mailIcon = this.constants.mailIcon;
    githubIcon = this.constants.githubIcon;
    skillsTitle = this.constants.skillsTitle;
    projectsTitle = this.constants.projectsTitle;
    experienceTitle = this.constants.experienceTitle;
    contactTitle = this.constants.contactTitle;
    homeTitle = this.constants.homeTitle;
    mailToPersonalEmail = this.constants.mailToPersonalEmail;

    ngOnInit(): void {}

    public redirectToGithub() {
        this.helperFunctionsService.redirectToGithub();
    }

    public redirectToLinkedIn() {
        this.helperFunctionsService.redirectToLinkedIn();
    }
}
