import { Component, Input, OnInit } from '@angular/core';
import { CardInfo } from '../interfaces/interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() data?: CardInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
