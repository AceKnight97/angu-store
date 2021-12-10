import { Component, OnInit, Input } from '@angular/core';
import { Home } from './home';
import { FormControl, Validators, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-pages-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  angForm = new FormGroup({
    // HEADER
    photo: new FormControl('test_photo_link'), // , Validators.required
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
    programmingLanguages: new FormArray([
      new FormControl('Mahesh'),
      new FormControl('Krishna'),
    ]),
    // : new FormControl(''),
    // : new FormControl(''),
    // : new FormControl(''),
    // : new FormControl(''),
    // : new FormControl(''),
  });
  constructor() {}
  // homeModel = new Home('', '');
  ngOnInit(): void {}

  get name(): any {
    return this.angForm.get('name');
  }
  get age(): any {
    return this.angForm.get('age');
  }
  get college(): any {
    return this.angForm.get('college');
  }
  get programmingLanguages() {
    return this.angForm.get('programmingLanguages') as FormArray;
  }

  onFormSubmit(): void {
    console.log(
      'Name: ' + this.angForm.get('name')?.value + ' =',
      this.name.value
    );
    console.log(
      'Age: ' + this.angForm.get('age')?.value + ' =',
      this.age.value
    );
    console.log(
      'College: ' + this.angForm.get('college')?.value + ' =',
      this.college.value
    );
  }
}
