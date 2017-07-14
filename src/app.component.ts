import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'App',
  templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {
  public readonly name = 'electron-forge';
  title = 'AbyaCast 2.0';

  ngOnInit(): void { }
}

@NgModule({
  imports: [
     BrowserModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
