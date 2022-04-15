import { Component, OnInit } from '@angular/core';
import { AppConstants } from '../constants/constants';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
    constructor(private constants: AppConstants) {}

    profilePicture = this.constants.profilePicture;
    ocupations = this.constants.ocupations;
    firstName = this.constants.firstName;
    lastName = this.constants.lastName;

    ocupationIndex = 0;
    ocupationChangeTime = 1000;

    ngOnInit(): void {
        this.changeOcupation();
    }

    changeOcupation() {
        setInterval(() => {
            if (this.ocupationIndex >= this.ocupations.length - 1) {
                this.ocupationIndex = -1;
            }
            this.ocupationIndex++;
        }, this.ocupationChangeTime);
    }
}
