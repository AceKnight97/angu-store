import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  @Input() edu: any = new FormGroup({
    fromDate: new FormControl(''),
    toDate: new FormControl(''),
    name: new FormControl(''),
    major: new FormControl(''),
  });
  @Input() index: number = 0;
  @Output() onClickAddEdu = new EventEmitter<any>();
  @Output() onClickRemoveEdu = new EventEmitter<any>();

  constructor() {}
  ngOnChanges(): void {}

  ngOnInit(): void {}
  onFormSubmit(): void {}
  onClickAdd(): void {
    this.onClickAddEdu.emit(this.index);
  }
  onClickRemove(): void {
    this.onClickRemoveEdu.emit(this.index);
  }
}
