import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { WorkingExp } from 'src/app/pages/createcv/createcv.helper';

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
  @Input() parentDisabled: boolean = false;
  isDisabled: boolean = true;
  constructor() {}
  ngOnChanges(): void {
    this.getFirstStatus(this.workExp.value);
  }
  getFirstStatus(values: WorkingExp) {
    const { fromDate, toDate, companyName, jobTitle, jobDescription } =
      values || {};
    this.isDisabled =
      !(fromDate && toDate && companyName && jobTitle && jobDescription) ||
      this.parentDisabled;
  }
  ngOnInit(): void {
    this.workExp.valueChanges.subscribe((values: any) => {
      this.getFirstStatus(values);
    });
  }
  onFormSubmit(): void {}
  onClickAdd(): void {
    this.onClickAddWE.emit(this.index);
  }
  onClickRemove(): void {
    this.onClickRemoveWE.emit(this.index);
  }
}
