import { Component, OnInit, Input } from '@angular/core';
// import * from 'ng-zorro-antd';

@Component({
  selector: 'app-pages-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public email: string = '';
  username: string = '';
  constructor() {}

  ngOnInit(): void {}

  onEmailChange(value: string): void {
    this.email = value;
  }
  onUsernameChange(value: string): void {
    this.username = value;
  }

  onClickTest(): void {
    console.log({ email: this.email, username: this.username });
  }
}
