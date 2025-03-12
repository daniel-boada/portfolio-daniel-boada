import { Component, Input } from '@angular/core';
import { AppConstants } from '../constants/constants';
import { TileInfo } from '../interfaces/interfaces';

@Component({
    selector: 'app-experience-page',
    templateUrl: './experience-page.component.html',
    styleUrls: ['./experience-page.component.scss'],
})
export class ExperiencePageComponent {

    @Input() data?: TileInfo[];
    @Input() id?: string;

    constructor() {}
}
