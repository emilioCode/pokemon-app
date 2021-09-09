import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LayoutComponent
  ]
})
export class PokemonModule { }
//to be able for others components you'll need to exports the components 
//througth the 'exports' array
