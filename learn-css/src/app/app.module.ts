import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ABoxModelComponent } from './a-box-model/a-box-model.component';
import { BSelectorComponent } from './b-selector/b-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    ABoxModelComponent,
    BSelectorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
