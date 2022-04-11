import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    LinkedInLogo = 'assets/linkedin.svg';
    mailLogo = 'assets/mail.svg';
    github = 'assets/github.svg';

    public redirectTo(website: string) {
        if (website === 'github') {
            window.open('https://github.com/daniel-boada/', '_blank');
        } else if (website === 'linkedIn') {
            window.open('https://www.linkedin.com/in/danielboada/', '_blank');
        }
    }
}
