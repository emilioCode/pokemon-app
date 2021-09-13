import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [
    LayoutComponent,
    TabsComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LayoutComponent,
    CardComponent
  ]
})
export class PokemonModule { }
//to be able for others components you'll need to exports the components 
//througth the 'exports' array
