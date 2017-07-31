import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

import { RouterModule, Routes }   from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';


@Component({
  selector: 'App',
  templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {
  public readonly name = 'electron-forge';
  title = 'AbyaCast 2.0';

  ngOnInit(): void { }
}

const appRoutes: Routes = [

];

@NgModule({
  imports: [
     BrowserModule,
     RouterModule.forRoot(appRoutes),
     HttpModule,
     FormsModule],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
