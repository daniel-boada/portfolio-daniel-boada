import { Component } from '@angular/core';
import { AppConstants } from '../constants/constants';
import { HelperFunctionsService } from '../services/helper-functions.service';

@Component({
    selector: 'app-contact-page',
    templateUrl: './contact-page.component.html',
    styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent {
    constructor(
        private constants: AppConstants,
        private helperFunctionsService: HelperFunctionsService
    ) {}

    linkedInLogoWithName = this.constants.linkedInLogoWithName;
    githubLogoWithName = this.constants.githubLogoWithName;
    personalEmail = this.constants.personalEmail;

    public redirectToGithub() {
        this.helperFunctionsService.redirectToGithub();
    }

    public redirectToLinkedIn() {
        this.helperFunctionsService.redirectToLinkedIn();
    }
}
