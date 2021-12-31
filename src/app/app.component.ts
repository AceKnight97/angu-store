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
    // this.digitalcvSv.getCVs().subscribe((cvs) => {
    //   console.log({ cvs });
    // });
    // this.digitalcvSv.getMasterData().subscribe((masterdata) => {
    //   console.log({ masterdata });
    // });
    // this.digitalcvSv.getCVManagement().subscribe((managementData) => {
    //   console.log({ managementData });
    // });
  }
}
