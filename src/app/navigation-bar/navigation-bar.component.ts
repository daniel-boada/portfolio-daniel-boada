import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navigation-bar',
    templateUrl: './navigation-bar.component.html',
    styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent implements OnInit {
    constructor() {}

    logo = 'assets/logo.png';
    LinkedInLogo = 'assets/linkedin.svg';
    mailLogo = 'assets/mail.svg';
    github = 'assets/github.svg';
    menu_navbar_icon = 'assets/menu_navbar.svg';
    ngOnInit(): void {}


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
