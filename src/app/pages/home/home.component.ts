import { Component, OnInit, Input } from '@angular/core';
import { Home } from './home';
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
    technicalSkillset: new FormControl('a'),
    competence: new FormControl('b'),
    level: new FormControl('c'),
  });
  // angForm = new FormGroup({
  //   // HEADER
  //   photo: new FormControl('test_photo_link'), // , Validators.required
  //   username: new FormControl('Truong Thanh Triet'),
  //   jobTitle: new FormControl('Front-end developer'),
  //   // PERSONAL INFO
  //   email: new FormControl(''),
  //   phone: new FormControl(''),
  //   address: new FormControl(''),
  //   gender: new FormControl(''),
  //   dob: new FormControl(''),
  //   linkedin: new FormControl(''),
  //   careerObjective: new FormControl(''),
  //   // PERSONAL INFO
  //   programmingLanguages: new FormArray([this.proLanguage]),
  //   // : new FormControl(''),
  // });
  angForm;
  constructor(private fb: FormBuilder) {
    this.angForm = this.fb.group({
      photo: new FormControl('test_photo_link'),
      username: new FormControl('Truong Thanh Triet'),
      jobTitle: new FormControl('Front-end developer'),
      // PERSONAL INFO
      email: new FormControl(''),
      phone: new FormControl(''),
      address: new FormControl(''),
      gender: new FormControl(''),
      dob: new FormControl(''),
      linkedin: new FormControl(''),
      careerObjective: new FormControl(''),
      // PERSONAL INFO
      programmingLanguages: this.fb.array([this.proLanguage]),
    });
  }
  // homeModel = new Home('', '');
  ngOnInit(): void {}

  // get name(): any {
  //   return this.angForm.get('name');
  // }
  get programmingLanguages() {
    return this.angForm.get('programmingLanguages') as FormArray;
  }

  onFormSubmit(): void {
    console.log({ res: this.angForm.value });
  }
  onClickAddPL(index: number = 0): void {
    const test = this.programmingLanguages;
    console.log({ test });
  }
}
