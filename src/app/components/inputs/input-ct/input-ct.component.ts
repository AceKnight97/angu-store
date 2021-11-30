import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-ct',
  templateUrl: './input-ct.component.html',
  styleUrls: ['./input-ct.component.scss'],
})
export class InputCTComponent implements OnInit {
  @Input() value: any = '';
  @Input('title') title: string = '';

  constructor() {}

  ngOnInit(): void {}

  onChange(value: string): void {
    this.value = value;
  }
}
