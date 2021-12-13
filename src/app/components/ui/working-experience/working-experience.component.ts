import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-working-experience',
  templateUrl: './working-experience.component.html',
  styleUrls: ['./working-experience.component.scss'],
})
export class WorkingExperienceComponent implements OnInit {
  @Input() workExp: any = new FormGroup({
    fromDate: new FormControl(''),
    toDate: new FormControl(''),
    companyName: new FormControl(''),
    jobTitle: new FormControl(''),
    jobDescription: new FormControl(''),
  });
  @Input() index: number = 0;
  @Output() onClickAddWE = new EventEmitter<any>();
  @Output() onClickRemoveWE = new EventEmitter<any>();

  constructor() {}
  ngOnChanges(): void {}

  ngOnInit(): void {}
  onFormSubmit(): void {}
  onClickAdd(): void {
    this.onClickAddWE.emit(this.index);
  }
  onClickRemove(): void {
    this.onClickRemoveWE.emit(this.index);
  }
}
