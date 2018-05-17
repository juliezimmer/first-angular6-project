import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// FormsModule does not come loaded when creating a new project using the CLI. It must be manually added
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';

// Decorator for the AppModule class. Note that it is imported from the angular core package (on line 2).
@NgModule({
   declarations: [
      AppComponent,
      ServerComponent,
      ServersComponent // needs to be imported at the top of the file.
   ],
   imports: [ 
      BrowserModule, 
      FormsModule,
      HttpModule
      ],
  providers: [],
  bootstrap: [AppComponent] // refers to app.component.ts file contents; this tells Angular to bootstrap the entire application with this file/component as the root component.  
})

// makes  this class available in other files for use there. 
export class AppModule { }
