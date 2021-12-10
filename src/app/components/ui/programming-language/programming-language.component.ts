import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-programming-language',
  templateUrl: './programming-language.component.html',
  styleUrls: ['./programming-language.component.css'],
})
export class ProgrammingLanguageComponent implements OnInit {
  @Input() technicalSkillset: any = '';
  @Input() competence: any = '';
  @Input() level: any = '';

  angForm = new FormGroup({
    technicalSkillset: new FormControl(this.technicalSkillset),
    competence: new FormControl(this.competence),
    level: new FormControl(this.level),
  });
  constructor() {}

  ngOnInit(): void {}
}
