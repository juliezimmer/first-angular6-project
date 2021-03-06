// Component needs to be brought in from Angular by importing a package from angular core.
import { Component } from '@angular/core';

// add a component Decorator to the ServerComponent 
@Component({
   // pass an object to the component to configure it.
   // The object contains metadata for the class that will be stored in the background and tell Angular what to do with the ServerComponent class.
   // the 'selector' property is an HTML tag that allows this class to be used in other component templates. 
   // the selector should be a string that is prefixed with 'app-   '
   selector: 'app-server',
   // the template file is the path to an external file where this component will be used. This is a path relative to the .ts file. 
   templateUrl: './server.component.html',
   styles: [`
      .online {
         color: white;
      }
   `]
})

// export the class so it is accessible in other files in the application. 
// It will be imported in app.module.ts file. 
export class ServerComponent { 
   serverId: number = 10;
   serverStatus: string = 'offLine';

   constructor () {
      // set the serverStatus to a random value using the Math.random function.
      //If the number is greater than 0.5, serverStatus will be 'online'. Otherwise, it will be 'offline'
      this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
   }   
   
   // serverStatue method
   getServerStatus() {
      return this.serverStatus;
   }

   getColor(){
       return this.serverStatus === 'online' ? 'green' : 'red';
   }

}

// this ServerComponent is also registered in app.module.ts in the NgModule Decorator in the 'providers' array as 'ServerComponent'.