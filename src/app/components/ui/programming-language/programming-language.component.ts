import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-programming-language',
  templateUrl: './programming-language.component.html',
  styleUrls: ['./programming-language.component.scss'],
})
export class ProgrammingLanguageComponent implements OnInit {
  @Input() programingLanguage: any = new FormGroup({
    technicalSkillset: new FormControl(''),
    competence: new FormControl(''),
    level: new FormControl(''),
  });
  @Input() index: number = 0;
  @Output() onClickAddPL = new EventEmitter<any>();
  @Output() onClickRemovePL = new EventEmitter<any>();

  constructor() {}
  ngOnChanges(): void {}

  ngOnInit(): void {}
  onFormSubmit(): void {}
  onClickAdd(): void {
    this.onClickAddPL.emit(this.index);
  }
  onClickRemove(): void {
    this.onClickRemovePL.emit(this.index);
  }
}
