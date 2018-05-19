import { Component, OnInit } from '@angular/core';

@Component({
   selector: '.app-servers',
   templateUrl: './servers.component.html', 
   styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
   // adding new property to the class and related to the 'Add Server' button.
   // when set to false, the button is not functional and the user won't be able to add a server.  
   allowNewServer = false;
   
   // The constructor is a method that is executed at the time that Angular creates the component.
   constructor() { 
      // after 2 seconds, setTimeout un-disables the 'Add Server' button.
      setTimeout( () => {
         this.allowNewServer = true;
      } ,2000);
   }

   ngOnInit() {
  }

}
