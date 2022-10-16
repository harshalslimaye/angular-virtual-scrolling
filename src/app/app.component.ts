import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  rows: string[] = Array.from(Array(500000)).map((_, i) => `Row #${i}`);
}
