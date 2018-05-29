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
   serverCreationStatus = 'No server was created';
   // serverName starts out as an empty string, but will take in whatever is entered in the input field.
   serverName = '';
   serverCreated = false; // this variable is also added to the onCreateServer() method
   servers= ['Testserver', 'Testserver2'];


   // The constructor is a method that is executed at the time that Angular creates the component.
   constructor() { 
      // after 2 seconds, setTimeout un-disables the 'Add Server' button.
      setTimeout( () => {
         this.allowNewServer = true;
      }, 2000);
   }

   ngOnInit() {
   }

   // method called from the DOM when 'Add Server' button is clicked. When the method is called, the serverStatusCreation property value is changed to 'Server was created'
   onCreateServer(){
      // this variable is initially false, but when the server is added, it changed to 'true'
      this.serverCreated = true;
      this.servers.push(this.serverName);
      this.serverCreationStatus = `Server was created. Its name is ${this.serverName}`;
   }

   onUpdateServerName(event: any) {
      console.log(event);
      // event refers to the input event of entering a server name in the input field. 
      // target is the input element.
      // value is what is entered in the input element as the server name.
      // may need to use:
      // this.serverName = (<HTMLInputElement>event.target).value 
      //  if the code editor does not like it without.
      // this is called 'casting'
      this.serverName = event.target.value;
   }

}
