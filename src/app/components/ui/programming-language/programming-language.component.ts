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
  @Input() onClickAddPL: any = () => {};
  @Output() onClickAddPLChange = new EventEmitter<any>();

  constructor() {}
  ngOnChanges(): void {
    // console.log('object: ', this.onClickAddPL);
    this.onClickAddPLChange.emit(this.onClickAddPL);
  }

  ngOnInit(): void {}
  onFormSubmit(): void {}
  onClickAdd(): void {
    // console.log({ index: this.index, asdas: this.onClickAddPL });
    this.onClickAddPL(this.index);
  }
  onClickRemove(): void {}
}
