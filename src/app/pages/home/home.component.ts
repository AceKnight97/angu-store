import { Component, OnInit, Input } from '@angular/core';
// import * from 'ng-zorro-antd';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @Input() testTitle: string = 'Hello';

  number1: number = 12;
  number2: number = 0;
  operation: string = '';
  result: number = 0;

  list: number[] = [1, 2, 3];
  constructor() {}

  ngOnInit(): void {}

  onChange(key: string, value: string): void {
    console.log({ key, value });
    this.number1 = parseInt(value, 10);
  }

  onClickTest(): void {
    console.log('Test');
  }
}
