import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ABoxModelComponent } from './a-box-model/a-box-model.component';

@NgModule({
  declarations: [
    AppComponent,
    ABoxModelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
