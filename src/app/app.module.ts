import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// FormsModule does not come loaded when creating a new project using the CLI. It must be manually added
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [ 
      BrowserModule, 
      FormsModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
