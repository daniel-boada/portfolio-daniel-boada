import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }
  ocupations = [ "Front End Developer", "UI/UX Developer", "Programmer", "Software Developer"];
  ocupationIndex = 0;

  ngOnInit(): void {
    setInterval(() => {
      if (this.ocupationIndex >= this.ocupations.length - 1 ) {
        this.ocupationIndex = -1;
      }
      this.ocupationIndex++;
    }, 1500);
  }

}
