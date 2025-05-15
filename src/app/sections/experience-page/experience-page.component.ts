import { Component, Input } from '@angular/core';
import { AppConstants } from '../../common/constants/constants';
import { CardInfo } from '../../common/interfaces/interfaces';

@Component({
    selector: 'app-experience-page',
    templateUrl: './experience-page.component.html',
    styleUrls: ['./experience-page.component.scss'],
})
export class ExperiencePageComponent {

    @Input() data?: CardInfo[];

    constructor() {}
}
