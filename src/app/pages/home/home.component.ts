import { Component, OnInit, Input } from '@angular/core';
import { Home } from './home';
// import * from 'ng-zorro-antd';

@Component({
  selector: 'app-pages-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  homeModel = new Home('', '');
  ngOnInit(): void {}

  onClickTest(): void {
    console.log({ email: this.homeModel.email });
  }
}
