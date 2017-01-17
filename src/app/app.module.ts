import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { App } from './app';
import { AppBar, NoteCard } from './ui';
import { Main, NotesContainer } from './containers';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    App,
    Main,
    AppBar,
    NoteCard,
    NotesContainer
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent, App]
})
export class AppModule { }