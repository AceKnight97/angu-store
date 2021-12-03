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

  onEmailChange(value: string): void {
    this.homeModel.setEmail(value);
    // console.log({ email: this.homeModel.email });
  }

  onUsernameChange(value: string): void {
    // this.username = value;
    // console.log({ username: this.username });
  }

  onClickTest(): void {
    console.log({ email: this.homeModel.email });
  }
}
