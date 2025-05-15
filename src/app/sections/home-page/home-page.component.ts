import { Component, OnInit } from '@angular/core';
import { AppConstants } from '../../common/constants/constants';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
    constructor(private constants: AppConstants) {}

    profilePicture = this.constants.profilePicture;

    openPdfInNewTab() {
        const pdfUrl = 'assets/Daniel Boada Resume 2025.pdf';
        window.open(pdfUrl, '_blank');
    }
}
