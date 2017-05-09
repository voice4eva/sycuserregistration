// angular packages imports
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule }  from '@angular/forms';

// app imports
import { AppComponent }  from './app.component';
import { UsersComponent }  from './components/users.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [ AppComponent, UsersComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
