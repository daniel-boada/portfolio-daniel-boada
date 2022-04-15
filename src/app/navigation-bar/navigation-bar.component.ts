import { Component } from '@angular/core';
import { AppConstants } from '../constants/constants';

@Component({
    selector: 'app-navigation-bar',
    templateUrl: './navigation-bar.component.html',
    styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent {
    constructor(private constants: AppConstants) {}

    profileLogo = this.constants.profileIcon;
    menuNavBarIcon = this.constants.menuNavBarIcon;
    skillsTitle = this.constants.skillsTitle;
    projectsTitle = this.constants.projectsTitle;
    experienceTitle = this.constants.experienceTitle;
    contactTitle = this.constants.contactTitle;
    homeTitle = this.constants.homeTitle;
    firstName = this.constants.firstName;
    lastName = this.constants.lastName;

    scrollTo(elementId: string) {
        if (document && document.getElementById(elementId)) {
            document?.getElementById(elementId)?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest',
            });
        }
    }
}
