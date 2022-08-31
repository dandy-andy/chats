import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  publishers = ['Mediagroup 1', 'Mediagroup 2', 'Mediagroup 3', 'Mediagroup 4'];
}
