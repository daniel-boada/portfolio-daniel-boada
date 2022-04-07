import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-page',
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.scss']
})
export class SkillsPageComponent implements OnInit {

  constructor() { }

  icons = [
    "assets/angular.svg",
    "assets/javascript.svg",
    "assets/html.svg",
    "assets/css.svg",
    "assets/git.svg",
    "assets/jira.svg",
    "assets/nodejs.svg",
    "assets/typescript.svg",
    "assets/vscode.png"
  ]

  ngOnInit(): void {
  }

}
