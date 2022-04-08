import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
    constructor() {}
    ocupations = [
        'FrontEnd Developer',
        'UI/UX Developer',
        'Front End Engineer',
        'UI/UX Programmer',
        'Software Developer',
        'Computer Engineer',
    ];
    ocupationIndex = 0;
    image = 'assets/danielBoada.png';

    ngOnInit(): void {
        setInterval(() => {
            if (this.ocupationIndex >= this.ocupations.length - 1) {
                this.ocupationIndex = -1;
            }
            this.ocupationIndex++;
        }, 1000);
    }
}
