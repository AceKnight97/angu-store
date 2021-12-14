import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.scss'],
})
export class ReferenceComponent implements OnInit {
  @Input() refer: any = new FormGroup({
    referenceName: new FormControl(''),
    companyName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
  });
  @Input() index: number = 0;
  @Output() onClickAddRefer = new EventEmitter<any>();
  @Output() onClickRemoveRefer = new EventEmitter<any>();

  constructor() {}
  ngOnChanges(): void {}

  ngOnInit(): void {}
  onFormSubmit(): void {}
  onClickAdd(): void {
    this.onClickAddRefer.emit(this.index);
  }
  onClickRemove(): void {
    this.onClickRemoveRefer.emit(this.index);
  }
}
