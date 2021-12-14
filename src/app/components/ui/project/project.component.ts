import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  @Input() project: any = new FormGroup({
    name: new FormControl(''),
    languages: new FormControl(''),
    description: new FormControl(''),
  });
  @Input() index: number = 0;
  @Output() onClickAddPro = new EventEmitter<any>();
  @Output() onClickRemovePro = new EventEmitter<any>();

  constructor() {}
  ngOnChanges(): void {}

  ngOnInit(): void {}
  onFormSubmit(): void {}
  onClickAdd(): void {
    this.onClickAddPro.emit(this.index);
  }
  onClickRemove(): void {
    this.onClickRemovePro.emit(this.index);
  }
}
