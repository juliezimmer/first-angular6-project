import { Component, OnInit } from '@angular/core';

@Component({
   // using a selector that is an attribute
   // selector: '[app-servers]',
   // using a selector that is a class
   selector: '.app-servers',
   template: `
      <app-server></app-server>
      <app-server></app-server>`,
   styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

   constructor() { }

   ngOnInit() {
  }

}
