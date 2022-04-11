import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  constructor() { }

  LinkedInLogo = 'assets/linkedInName.png';
  github = 'assets/githubName.png';

  ngOnInit(): void {
  }

  public redirectTo(website: string) {
    if (website === 'github') {
        window.open('https://github.com/daniel-boada/', '_blank');
    } else if (website === 'linkedIn') {
        window.open('https://www.linkedin.com/in/danielboada/', '_blank');
    }
}
}
