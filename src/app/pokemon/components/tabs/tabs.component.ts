import { Component } from '@angular/core';

type Tabs = 'tab-favorites' | 'tab-pokemons'; //with 'type' datatype option 1
// enum Tabs{ //option 2
//   tabfavorites,
//   tabPokemons
// }

@Component({
  selector: 'pokemon-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {

  public currentTab: Tabs  = 'tab-pokemons' //?tab-favorites | tab-pokemons (option 1)
  // public currentTab : Tabs = Tabs.tabPokemons; // with enum (option 2)

  constructor() { }


}
