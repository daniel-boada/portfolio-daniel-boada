import { Component } from '@angular/core';
import { AppConstants } from '../constants/constants';

@Component({
    selector: 'app-experience-page',
    templateUrl: './experience-page.component.html',
    styleUrls: ['./experience-page.component.scss'],
})
export class ExperiencePageComponent {
    constructor(private constants: AppConstants) {}

    experiencesInfo = this.constants.experiencesInfo;
    capgeminiLogoWithName = this.constants.capgeminiLogoWithName;
    experienceTitle = this.constants.experienceTitle;
}
