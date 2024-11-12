import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name: string = '';
  greetingMassage: string = '';

  displaygreeting() {
    this.greetingMassage = `Hello, ${this.name} welcome!`;
    console.log(this.name);
  }
}