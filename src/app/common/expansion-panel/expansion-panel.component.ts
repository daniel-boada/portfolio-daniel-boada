import { Component, Input, OnInit } from '@angular/core';
import { CardInfo } from '../interfaces/interfaces';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss']
})
export class ExpansionPanelComponent implements OnInit {

  @Input() data?: CardInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
