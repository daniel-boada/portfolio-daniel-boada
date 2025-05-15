import { Component } from '@angular/core';
import { AppConstants } from 'src/app/common/constants/constants';
import { CardInfo } from 'src/app/common/interfaces/interfaces';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent{

    constructor(public constants: AppConstants) {}

  groupWinCleaners = 'assets/groupwin.JPG';
  groupWinCleanersLogo = 'assets/groupWinCleaners.png';

  // cards = this.constants.projectsInfo

  // cards: CardInfo[] = [
  //   {
  //     title: 'Group win cleaners | 2021',
  //     image: 'assets/groupWinCleaners.png',
  //     description: "Designed a website for a small family owned cleaning business. The client requested a clean modern look and a way to modify make changes to the website after it was built"
  //   },
  //   {
  //     title: 'Group win cleaners | 2021',
  //     image: 'assets/groupWinCleaners.png',
  //     description: "Designed a website for a small family owned cleaning business. The client requested a clean modern look and a way to modify make changes to the website after it was built"
  //   }
  // ]

}
