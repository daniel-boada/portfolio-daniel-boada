import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  groupWinCleaners = 'assets/groupwin.JPG';
  groupWinCleanersLogo = 'assets/groupWinCleaners.png';

  ngOnInit(): void {
  }

}
