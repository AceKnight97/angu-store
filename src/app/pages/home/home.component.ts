import { Component, OnInit, Input } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  FormArray,
  FormBuilder,
} from '@angular/forms';
import { DigitalcvComponent } from 'src/app/services/digitalcv/digitalcv.component';

interface MasterData {
  SKILL_COMPETENCE?: any[];
}

interface SkillSet {
  skillset?: string;
  competence?: string;
}

@Component({
  selector: 'app-pages-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  proLanguage = new FormGroup({
    technicalSkillset: new FormControl(''),
    competence: new FormControl(''),
    level: new FormControl('Learner'),
  });
  workingEpx = new FormGroup({
    fromDate: new FormControl(undefined),
    toDate: new FormControl(undefined),
    companyName: new FormControl('triet test 1'),
    jobTitle: new FormControl('triet test 1'),
    jobDescription: new FormControl('triet test 1'),
  });
  edu = new FormGroup({
    fromDate: new FormControl(undefined),
    toDate: new FormControl(undefined),
    name: new FormControl('triet test 1'),
    major: new FormControl('triet test 1'),
  });
  certi = new FormGroup({
    date: new FormControl(undefined),
    certificateName: new FormControl('triet test 1'),
    organizationName: new FormControl('triet test 1'),
  });
  project = new FormGroup({
    name: new FormControl('triet test 1'),
    languages: new FormControl('triet test 1'),
    description: new FormControl('triet test 1'),
  });
  refer = new FormGroup({
    referenceName: new FormControl('triet test 1'),
    companyName: new FormControl('triet test 1'),
    email: new FormControl('tttriet1997@gmail.com'),
    phone: new FormControl('triet test 1'),
  });
  angForm;
  skillsets: string[] = [];
  languages: string[] = [];
  constructor(
    private fb: FormBuilder,
    private digitalcvSv: DigitalcvComponent
  ) {
    this.angForm = this.fb.group({
      photo: 'data:image/jpeg;base64,test',
      jobTitle: 'Front-end developer',
      // PERSONAL INFO
      personalInfo: this.fb.group({
        email: 'tttriet199@gmail.com',
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
      otherSkills: this.fb.array(['triet test 1']),
      workingExperiences: this.fb.array([this.workingEpx]),
      educations: this.fb.array([this.edu]),
      certificates: this.fb.array([this.certi]),
      projects: this.fb.array([this.project]),
      referencecvs: this.fb.array([this.refer]),
    });
    this.digitalcvSv.getMasterData().subscribe((masterdata: MasterData) => {
      console.log({ masterdata });
      const arr = masterdata?.SKILL_COMPETENCE || [];
      arr.forEach((item: any) => {
        this.skillsets.push(item.skillet);
        this.languages.push(item.competence);
      });
    });
  }
  ngOnInit(): void {
    // this.digitalcvSv.getCVs().subscribe((cvs) => {
    //   console.log({ cvs });
    // });
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

  onFormSubmit(): void {
    const sendingData = JSON.parse(JSON.stringify(this.angForm.value));
    const otherSkills = sendingData?.otherSkills.map((skill: string) => ({
      skill,
    }));
    Object.assign(sendingData, { otherSkills });
    console.log({ sendingData });

    this.digitalcvSv.createCV(sendingData).subscribe((a) => {
      console.log({ a });
    });
  }
  // PROGRAMMING LANGUAGES
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
      console.log({ values });
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
      console.log({ values });
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
      console.log({ values });
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
  // REFERENCE
  onClickAddRefer(index: number = 0): void {
    const values = this.referencecvs.at(index)?.value || {};
    if (Object.values(values)?.includes('')) {
      console.log({ values });
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
}
