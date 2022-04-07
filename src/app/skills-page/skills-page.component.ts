import { Component, OnInit } from '@angular/core';
import { Skill } from '../interfaces/interfaces';

@Component({
  selector: 'app-skills-page',
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.scss']
})
export class SkillsPageComponent implements OnInit {

  constructor() { }
  panelOpenState = false;
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

  skills: Skill[] = [
  {
    title: 'Angular Development',
    description: '2+ years of experience',
    expandedText: 'I have 2+ years of angular development expereience in Capgemini'
  },
  {
    title: 'RESTful Web API',
    description: '2+ years of experience',
    expandedText: 'I have 2+ years of angular development expereience in Capgemini'
  }, {
    title: 'Unit Testing',
    description: '2+ years of experience',
    expandedText: 'I have 2+ years of angular development expereience in Capgemini'
  }, {
    title: 'Version Control',
    description: '2+ years of experience',
    expandedText: 'I have 2+ years of angular development expereience in Capgemini'
  }, {
    title: 'Technical Lead',
    description: '2+ years of experience',
    expandedText: 'I have 2+ years of angular development expereience in Capgemini'
  }, {
    title: 'Agile Methodologies',
    description: '2+ years of experience',
    expandedText: 'I have 2+ years of angular development expereience in Capgemini'
  }
]

  ngOnInit(): void {
  }

}
