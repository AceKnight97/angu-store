import { Component } from '@angular/core';
import { TestComponent } from './services/gets/test/test.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angu-store';
  constructor(private test: TestComponent) {
    // this.test.getData().subscribe((a) => {
    //   console.log({ a });
    // });
  }
}
