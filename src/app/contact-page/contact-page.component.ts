import { Component } from '@angular/core';
import { AppConstants } from '../constants/constants';

@Component({
    selector: 'app-contact-page',
    templateUrl: './contact-page.component.html',
    styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent {
    constructor(
        private constants: AppConstants,
    ) {}
}
