// This file is sourced into app.component.html when the application runs. It can be seen by inspecting the page elements in the console. 

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// bootstraps(starts) the Angular application by passing AppModule, which was imported from ./app/app.module on line 6, to the platformBrowserDynamic().bootstrapModule(). AppModule refers to app.module.ts  
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
