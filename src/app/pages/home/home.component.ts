import { Component, OnInit, Input } from '@angular/core';
// import * from 'ng-zorro-antd';

@Component({
  selector: 'app-pages-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @Input() testTitle: string = 'Hello';

  email: string = '';
  constructor() {}

  ngOnInit(): void {}

  onEmailChange(value: string): void {
    this.email = value;
  }

  onClickTest(): void {
    console.log('Test');
  }
}
