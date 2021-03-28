import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MainComponent } from './main.component';
import { SpriteComponent } from './sprite.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ MainComponent, 
    SpriteComponent
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
