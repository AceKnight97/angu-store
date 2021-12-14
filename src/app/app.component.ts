import { Component } from '@angular/core';
import { DigitalcvComponent } from './services/digitalcv/digitalcv.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angu-store';
  constructor(private digitalcvSv: DigitalcvComponent) {
    // this.digitalcvSv.getCVs().subscribe((a) => {
    //   console.log({ a });
    // });
  }
}
