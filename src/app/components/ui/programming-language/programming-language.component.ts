import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Programming } from 'src/app/pages/createcv/createcv.helper';

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
  @Input() skillsets: string[] = [];
  @Input() languages: string[] = [];
  @Output() onClickAddPL = new EventEmitter<any>();
  @Output() onClickRemovePL = new EventEmitter<any>();
  @Input() parentDisabled: boolean = false;
  isDisabled: boolean = true;

  constructor() {}
  ngOnChanges(): void {
    this.getFirstStatus(this.programingLanguage.value);
  }

  getFirstStatus(values: Programming) {
    const { technicalSkillset, competence, level } = values || {};
    this.isDisabled =
      !(technicalSkillset && competence && level) || this.parentDisabled;
  }

  ngOnInit(): void {
    this.programingLanguage.valueChanges.subscribe((values: any) => {
      this.getFirstStatus(values);
    });
  }

  onFormSubmit(): void {}
  onClickAdd(): void {
    this.onClickAddPL.emit(this.index);
  }
  onClickRemove(): void {
    this.onClickRemovePL.emit(this.index);
  }
}
