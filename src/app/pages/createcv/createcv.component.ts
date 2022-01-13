import { Component, OnInit, Input } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  FormArray,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import LocalStorage from 'src/app/localStorage';
import { MutationResponse } from 'src/app/models';
import { DigitalcvComponent } from 'src/app/services/digitalcv/digitalcv.component';
import {
  certiForm,
  eduForm,
  projectForm,
  proLanguageForm,
  referForm,
  workingExpForm,
  CREATE_CV_TYPES,
  workingExperiencesCheck,
  programmingLanguagesCheck,
  educationsCheck,
  certificatesCheck,
  projectsCheck,
  referencecvsCheck,
} from './createcv.helper';

const {
  PROGRAMMING,
  WORKING_EXP,
  EDUTCATION,
  CERTIFICATE,
  PROJECT,
  REFERENCE,
} = CREATE_CV_TYPES;

@Component({
  selector: 'app-pages-createcv',
  templateUrl: './createcv.component.html',
  styleUrls: ['./createcv.component.scss'],
})
export class CreateCVComponent implements OnInit {
  angForm;
  //
  proLanguage = proLanguageForm;
  workingExp = workingExpForm;
  edu = eduForm;
  certi = certiForm;
  project = projectForm;
  refer = referForm;
  //
  avatarUrl: string = '';
  skillsets: string[] = [];
  languages: string[] = [];
  //
  proLanguageCheck: boolean = false;
  workingExpCheck: boolean = false;
  eduCheck: boolean = false;
  certiCheck: boolean = false;
  projectCheck: boolean = false;
  referCheck: boolean = false;
  otherSkillsCheck: boolean = false;

  constructor(
    private fb: FormBuilder,
    private digitalcvSv: DigitalcvComponent,
    private localStorage: LocalStorage,
    private _router: Router
  ) {
    this.angForm = this.fb.group({
      photo: '',
      // 'src/app/assests/user-default.jpg', //data:image/jpeg;base64,test
      jobTitle: 'Front-end developer',
      // PERSONAL INFO
      personalInfo: this.fb.group({
        email: this.localStorage.getData().email,
        phone: 'triet test 1',
        address: 'triet test 1',
        gender: 'Male',
        dob: undefined,
        linkedin: 'triet test 1',
        careerObjective: 'triet test 1',
        username: 'Truong Thanh Triet',
      }),
      hobby: 'triet test 1',
      cvType: 'cv_type_1',
      isActive: true,
      // ARRAY INFO
      programmingLanguages: this.fb.array([this.proLanguage]),
      otherSkills: this.fb.array(['']),
      workingExperiences: this.fb.array([this.workingExp]),
      educations: this.fb.array([this.edu]),
      certificates: this.fb.array([this.certi]),
      projects: this.fb.array([this.project]),
      referencecvs: this.fb.array([this.refer]),
    });
    // this.digitalcvSv.getMasterData().subscribe((masterdata: MasterData) => {
    //   console.log({ masterdata });
    //   const arr = masterdata?.SKILL_COMPETENCE || [];
    //   arr.forEach((item: any) => {
    //     this.skillsets.push(item.skillet);
    //     this.languages.push(item.competence);
    //   });
    // });
    this.getFirstStatus(this.angForm.value);
  }

  getFirstStatus(values: any) {
    const {
      programmingLanguages,
      otherSkills,
      workingExperiences,
      educations,
      certificates,
      projects,
      referencecvs,
    } = values || {};
    this.proLanguageCheck = programmingLanguagesCheck(programmingLanguages);
    this.workingExpCheck = workingExperiencesCheck(workingExperiences);
    this.eduCheck = educationsCheck(educations);
    this.certiCheck = certificatesCheck(certificates);
    this.projectCheck = projectsCheck(projects);
    this.referCheck = referencecvsCheck(referencecvs);
    this.otherSkillsCheck = otherSkills.find((x: string) => x === '') === '';
  }

  ngOnInit(): void {
    this.getFirstStatus(this.angForm.value);
    this.angForm.valueChanges.subscribe((values: any) => {
      this.getFirstStatus(values);
    });
  }

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
  get referencecvs() {
    return this.angForm.get('referencecvs') as FormArray;
  }
  // get photo() {
  //   return this.angForm.get('photo') as FormControl;
  // }
  // set photo(val:string) {
  //   this.angForm.set('photo') = val;
  // }

  onFormSubmit(): void {
    const sendingData = JSON.parse(JSON.stringify(this.angForm.value));
    const otherSkills = sendingData?.otherSkills.map((skill: string) => ({
      skill,
    }));
    Object.assign(sendingData, { otherSkills });
    // console.log({ sendingData });

    this.digitalcvSv
      .createCV(sendingData, this.localStorage.getData().token)
      .subscribe((createcv: MutationResponse) => {
        if (createcv.isSuccess) {
          alert('Create CV successsfully!');
          this._router.navigate(['home']);
        } else {
          const mes = createcv.message || 'Failed to create CV!';
          alert(mes);
        }
      });
  }

  onClickBack() {
    this._router.navigate(['home']);
  }

  onClickAdd(index: number, type: string) {
    let values;
    switch (type) {
      case PROGRAMMING:
        values = this.programmingLanguages.at(index)?.value || {};
        values.insert(
          index + 1,
          new FormGroup({
            technicalSkillset: new FormControl(''),
            competence: new FormControl(''),
            level: new FormControl(''),
          })
        );
        break;
      case WORKING_EXP:
        values = this.workingExperiences.at(index)?.value || {};
        break;
      case EDUTCATION:
        values = this.educations.at(index)?.value || {};
        break;
      case CERTIFICATE:
        values = this.certificates.at(index)?.value || {};
        break;
      case PROJECT:
        values = this.projects.at(index)?.value || {};
        break;
      case REFERENCE:
        values = this.referencecvs.at(index)?.value || {};
        break;
      default:
        break;
    }
  }

  // PROGRAMMING LANGUAGES
  onClickAddPL(index: number = 0): void {
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
  // OTHER SKILLS
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
  // WORKING EXPERIENCE
  onClickAddWE(index: number = 0): void {
    const values = this.workingExperiences.at(index)?.value || {};
    if (Object.values(values)?.includes('')) {
      // console.log({ values });
      return;
    }
    this.workingExperiences.insert(
      index + 1,
      new FormGroup({
        fromDate: new FormControl(undefined),
        toDate: new FormControl(undefined),
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
  // EDUCATION
  onClickAddEdu(index: number = 0): void {
    const values = this.educations.at(index)?.value || {};
    if (Object.values(values)?.includes('')) {
      // console.log({ values });
      return;
    }
    this.educations.insert(
      index + 1,
      new FormGroup({
        fromDate: new FormControl(undefined),
        toDate: new FormControl(undefined),
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
  // CERTIFICATE
  onClickAddCerti(index: number = 0): void {
    const values = this.certificates.at(index)?.value || {};
    if (Object.values(values)?.includes('')) {
      // console.log({ values });
      return;
    }
    this.certificates.insert(
      index + 1,
      new FormGroup({
        date: new FormControl(undefined),
        certificateName: new FormControl(''),
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
  // PROJECT
  onClickAddPro(index: number = 0): void {
    const values = this.projects.at(index)?.value || {};
    if (Object.values(values)?.includes('')) {
      // console.log({ values });
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
  // REFERENCE
  onClickAddRefer(index: number = 0): void {
    const values = this.referencecvs.at(index)?.value || {};
    if (Object.values(values)?.includes('')) {
      // console.log({ values });
      return;
    }
    this.referencecvs.insert(
      index + 1,
      new FormGroup({
        referenceName: new FormControl(''),
        companyName: new FormControl(''),
        email: new FormControl(''),
        phone: new FormControl(''),
      })
    );
  }
  onClickRemoveRefer(index: number = 0): void {
    if (index == 0) {
      this.referencecvs.at(index).reset();
      return;
    }
    this.referencecvs.removeAt(index);
  }

  // PHOTO
  onUploadFile(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.angForm.controls['photo'].setValue(reader.result as string);
    };

    reader.readAsDataURL(file);
    setTimeout(() => {
      // console.log({ file, res: this.angForm.controls['photo'].value });
    }, 200);
  }
  onClickChangePhoto() {
    const avatarInputE = document.getElementById('avatarInput');
    if (avatarInputE) {
      avatarInputE.click();
    }
  }
}
