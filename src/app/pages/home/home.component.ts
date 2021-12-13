import { Component, OnInit, Input } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  FormArray,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-pages-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  proLanguage = new FormGroup({
    technicalSkillset: new FormControl(''),
    competence: new FormControl(''),
    level: new FormControl(''),
  });
  angForm;
  constructor(private fb: FormBuilder) {
    this.angForm = this.fb.group({
      photo: 'test_photo_link',
      username: 'Truong Thanh Triet',
      jobTitle: 'Front-end developer',
      // PERSONAL INFO
      email: '',
      phone: '',
      address: '',
      gender: '',
      dob: '',
      linkedin: '',
      careerObjective: '',
      // PERSONAL INFO
      programmingLanguages: this.fb.array([this.proLanguage]),
      otherSkills: this.fb.array(['']),
    });
  }
  ngOnInit(): void {}

  get programmingLanguages() {
    return this.angForm.get('programmingLanguages') as FormArray;
  }
  get otherSkills() {
    return this.angForm.get('otherSkills') as FormArray;
  }

  onFormSubmit(): void {
    console.log({ res: this.angForm.value });
  }
  onClickAddPL(index: number = 0): void {
    const values = this.programmingLanguages.at(index)?.value || {};
    if (!values?.technicalSkillset || !values?.competence || !values?.level) {
      console.log('Empty some fields: ', { values });
      return;
    }
    this.programmingLanguages.insert(
      index + 1,
      new FormGroup({
        technicalSkillset: new FormControl(''),
        competence: new FormControl(''),
        level: new FormControl(''),
      })
    );
  }
  onClickRemovePL(index: number = 0): void {
    if (index == 0) {
      this.programmingLanguages.at(index).reset();
      return;
    }
    console.log({ index });
    this.programmingLanguages.removeAt(index);
  }
}
