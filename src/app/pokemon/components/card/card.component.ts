import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pokemon-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() title: any;

  constructor() { 
    console.log('title: ', this.title );
  }

  ngOnInit(): void {
  }

}
