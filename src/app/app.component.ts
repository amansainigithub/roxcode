import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  showFiller = false;
  title = 'JET-ANGULAR-2';

  constructor() { }

  ngOnInit(): void {
  }

  logout(): void {
  }
}
