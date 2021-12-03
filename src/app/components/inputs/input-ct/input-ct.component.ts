import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-ct',
  templateUrl: './input-ct.component.html',
  styleUrls: ['./input-ct.component.scss'],
})
export class InputCTComponent implements OnInit {
  @Input() value: any = '';
  @Input('title') title: string = '';
  @Input('placeholder') placeholder: string = '';
  @Input('ngModel') ngModel: any;
  @Output() ngModelChange = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onChange(): void {
    this.ngModelChange.emit(this.ngModel);
  }
}
