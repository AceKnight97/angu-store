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
  workingEpx = new FormGroup({
    fromDate: new FormControl(''),
    toDate: new FormControl(''),
    companyName: new FormControl(''),
    jobTitle: new FormControl(''),
    jobDescription: new FormControl(''),
  });
  edu = new FormGroup({
    fromDate: new FormControl(''),
    toDate: new FormControl(''),
    name: new FormControl(''),
    major: new FormControl(''),
  });
  certi = new FormGroup({
    date: new FormControl(''),
    certiName: new FormControl(''),
    organizationName: new FormControl(''),
  });
  project = new FormGroup({
    name: new FormControl(''),
    languages: new FormControl(''),
    description: new FormControl(''),
  });
  refer = new FormGroup({
    referName: new FormControl(''),
    companyName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
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
      hobby: '',
      // ARRAY INFO
      programmingLanguages: this.fb.array([this.proLanguage]),
      otherSkills: this.fb.array(['']),
      workingExperiences: this.fb.array([this.workingEpx]),
      educations: this.fb.array([this.edu]),
      certificates: this.fb.array([this.certi]),
      projects: this.fb.array([this.project]),
      references: this.fb.array([this.refer]),
    });
  }
  ngOnInit(): void {}

  get programmingLanguages() {
    return this.angForm.get('programmingLanguages') as FormArray;
  }
  get otherSkills() {
    return this.angForm.get('otherSkills') as FormArray;
  }
  get workingExperiences() {
    return this.angForm.get('workingExperiences') as FormArray;
  }
  get educations() {
    return this.angForm.get('educations') as FormArray;
  }
  get certificates() {
    return this.angForm.get('certificates') as FormArray;
  }
  get projects() {
    return this.angForm.get('projects') as FormArray;
  }
  get references() {
    return this.angForm.get('references') as FormArray;
  }

  onFormSubmit(): void {
    console.log({ res: this.angForm.value });
  }
  onClickAddPL(index: number = 0): void {
    const values = this.programmingLanguages.at(index)?.value || {};
    if (!values?.technicalSkillset || !values?.competence || !values?.level) {
      console.log({ values });
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
    this.programmingLanguages.removeAt(index);
  }
  onClickAddOS(index: number = 0): void {
    if (!this.otherSkills.at(index)?.value) {
      console.log('Empty: ', { value: this.otherSkills.at(index)?.value });
      return;
    }
    this.otherSkills.insert(index + 1, new FormControl(''));
  }
  onClickRemoveOS(index: number = 0): void {
    if (index == 0) {
      this.otherSkills.at(index).reset();
      return;
    }
    this.otherSkills.removeAt(index);
  }
  onClickAddWE(index: number = 0): void {
    const values = this.workingExperiences.at(index)?.value || {};
    if (Object.values(values)?.includes('')) {
      console.log({ values });
      return;
    }
    this.workingExperiences.insert(
      index + 1,
      new FormGroup({
        fromDate: new FormControl(''),
        toDate: new FormControl(''),
        companyName: new FormControl(''),
        jobTitle: new FormControl(''),
        jobDescription: new FormControl(''),
      })
    );
  }
  onClickRemoveWE(index: number = 0): void {
    if (index == 0) {
      this.workingExperiences.at(index).reset();
      return;
    }
    this.workingExperiences.removeAt(index);
  }
  onClickAddEdu(index: number = 0): void {
    const values = this.educations.at(index)?.value || {};
    if (Object.values(values)?.includes('')) {
      console.log({ values });
      return;
    }
    this.educations.insert(
      index + 1,
      new FormGroup({
        fromDate: new FormControl(''),
        toDate: new FormControl(''),
        name: new FormControl(''),
        major: new FormControl(''),
      })
    );
  }
  onClickRemoveEdu(index: number = 0): void {
    if (index == 0) {
      this.educations.at(index).reset();
      return;
    }
    this.educations.removeAt(index);
  }
  onClickAddCerti(index: number = 0): void {
    const values = this.certificates.at(index)?.value || {};
    if (Object.values(values)?.includes('')) {
      console.log({ values });
      return;
    }
    this.certificates.insert(
      index + 1,
      new FormGroup({
        date: new FormControl(''),
        certiName: new FormControl(''),
        organizationName: new FormControl(''),
      })
    );
  }
  onClickRemoveCerti(index: number = 0): void {
    if (index == 0) {
      this.certificates.at(index).reset();
      return;
    }
    this.certificates.removeAt(index);
  }
  onClickAddPro(index: number = 0): void {
    const values = this.projects.at(index)?.value || {};
    if (Object.values(values)?.includes('')) {
      console.log({ values });
      return;
    }
    this.projects.insert(
      index + 1,
      new FormGroup({
        name: new FormControl(''),
        languages: new FormControl(''),
        description: new FormControl(''),
      })
    );
  }
  onClickRemovePro(index: number = 0): void {
    if (index == 0) {
      this.projects.at(index).reset();
      return;
    }
    this.projects.removeAt(index);
  }
  onClickAddRefer(index: number = 0): void {
    const values = this.references.at(index)?.value || {};
    if (Object.values(values)?.includes('')) {
      console.log({ values });
      return;
    }
    this.references.insert(
      index + 1,
      new FormGroup({
        referName: new FormControl(''),
        companyName: new FormControl(''),
        email: new FormControl(''),
        phone: new FormControl(''),
      })
    );
  }
  onClickRemoveRefer(index: number = 0): void {
    if (index == 0) {
      this.references.at(index).reset();
      return;
    }
    this.references.removeAt(index);
  }
}
