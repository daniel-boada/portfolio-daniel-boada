import { Component, OnInit } from '@angular/core';
import { AppConstants } from '../../common/constants/constants';
import { Logo, CardInfo } from '../../common/interfaces/interfaces';

@Component({
    selector: 'app-skills-page',
    templateUrl: './skills-page.component.html',
    styleUrls: ['./skills-page.component.scss'],
})
export class SkillsPageComponent {
    constructor(private constants: AppConstants) {}

    icons = this.constants.icons;
    skills = this.constants.skills;
    skillsTitle = this.constants.skillsTitle
}
