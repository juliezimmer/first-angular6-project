// This is the definition of the component
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// 'title' is seen in app.component.html as "Welcome to {{ title }}!" 
// if title is changed to 'my App', the title on the browser page is changed to "Welcome to my App!"
// This dynamically changes what browser output.
export class AppComponent {
  name = 'Julie';   
}
