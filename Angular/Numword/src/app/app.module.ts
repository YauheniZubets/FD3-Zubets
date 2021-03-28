import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MainComponent } from './main.component';
import {NumwordPipe} from './numword.pipe';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ MainComponent, 
    NumwordPipe
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
