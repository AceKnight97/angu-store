import {
  HttpClient,
  HttpErrorResponse,
  HttpEvent,
  HttpEventType,
} from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  NumberValueAccessor,
} from '@angular/forms';
import {
  Competence,
  CreateCVService,
  Education,
  Proficiency,
  ProgrammingLanguage,
  Skill,
  TechnicalSkill,
  Certificate,
  WorkingExperience,
  Project,
} from './create-cv.service';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../home/home.service';
export interface Employee {
  name: string;
  jobTitle: string;
  avatar: File;
  email: string;
  phone: string;
  gender: string;
  dateOfBirth: Date;
  address: [''];
}

@Component({
  selector: 'app-create-cv',
  templateUrl: './create-cv.component.html',
  styleUrls: ['./create-cv.component.scss'],
})
export class CreateCVComponent implements OnInit {
  createCVForm: FormGroup = this.fb.group({
    cvType: 'cv_type_1',
    name: ['', Validators.required], // userName
    jobTitle: ['', Validators.required],
    avatarUrl: [''],
    email: [''],
    phone: [''],
    gender: [''],
    dateOfBirth: [''],
    address: [''],
    linkedIn: [''],
    careerObjectives: [''],
    hobby: [''],
    educations: [],
    certificates: [],
    programmingLanguages: [],
    workingExperiences: [],
    projects: [],
  });
  programmingLanguageForm: FormGroup;
  otherSkillsForm: FormGroup;
  technicalSkills: any[] = [];
  competences: Competence[] = [];
  proficiencies: Proficiency[] = [];
  otherSkills: Skill[] = [];
  isSubmitted: boolean = false;
  avatarUrl: string = '';
  progress: number = 0;
  programmingLanguages: ProgrammingLanguage[] = [];
  addedSkills: Skill[] = [];
  educationForm: FormGroup;
  educations: Education[] = [];
  certificateForm: FormGroup;
  certificates: Certificate[] = [];
  workingExperienceForm: FormGroup;
  workingExperiences: WorkingExperience[] = [];
  projectForm: FormGroup;
  projects: Project[] = [];
  ntUserName = 'APAC\\HOO6HC';
  currentType: string;
  cvId: number;
  cvData: any;
  loading: boolean = false;

  constructor(
    private createCVService: CreateCVService,
    private fb: FormBuilder,
    private activeRoute: ActivatedRoute,
    private homeService: HomeService
  ) {
    this.activeRoute.queryParams.subscribe(() => {
      const param: any = this.activeRoute.snapshot.params || {};
      this.cvId = parseInt(param.id, 10);
      if (this.cvId) {
        this.currentType = param.action;
        this.loading = true;
        this.createCVService.getCVById(this.cvId).subscribe((cvData) => {
          Object.assign(cvData, { id: null });
          this.cvData = cvData;
          this.initCVData(cvData);
          this.loading = false;
        });
      } else {
        this.homeService.getUserInfo().subscribe((result: any) => {
          const { email, first_name, last_name } = result || {};
          this.createCVForm = this.fb.group({
            cvType: 'cv_type_1',
            name: [last_name + ' ' + first_name, Validators.required], // userName
            jobTitle: ['', Validators.required],
            avatarUrl: [''],
            email,
            phone: [''],
            gender: [''],
            dateOfBirth: [''],
            address: [''],
            linkedIn: [''],
            careerObjectives: [''],
            hobby: [''],
            educations: [''],
            certificates: [''],
            programmingLanguages: [''],
            workingExperiences: [''],
            projects: [''],
          });
        });
      }
    });
  }

  ngOnInit(): void {
    this.programmingLanguageForm = this.fb.group({
      technicalSkillset: 'Technical skillset',
      competence: 'Competence',
      proficiency: '',
    });

    const skill_competence = this.createCVService.loadTechnicalSkills();
    skill_competence.map((item: any) => {
      this.technicalSkills.push({
        name: item.skillset,
        competences: item.competence,
      });
    });

    this.proficiencies = this.createCVService.proficiencies;
    this.otherSkillsForm = this.fb.group({
      name: 'Other skills',
    });

    this.otherSkills = this.createCVService.loadOtherSkills();
    this.educationForm = this.fb.group({
      university: '',
      major: '',
      from: '',
      to: '',
    });
    this.certificateForm = this.fb.group({
      name: '',
      organization: '',
      issuedDate: '',
    });
    this.workingExperienceForm = this.fb.group({
      companyName: '',
      position: '',
      from: '',
      to: '',
      description: '',
    });
    this.projectForm = this.fb.group({
      name: '',
      technology: '',
      description: '',
    });
  }

  createCV() {
    this.isSubmitted = true;
    this.createCVForm.value['avatarUrl'] = this.avatarUrl;
    this.createCVForm.value['educations'] = this.educations;
    this.createCVForm.value['certificates'] = this.certificates;
    this.createCVForm.value['programmingLanguages'] = this.programmingLanguages;
    this.createCVForm.value['addedSkills'] = this.addedSkills;
    this.createCVForm.value['workingExperiences'] = this.workingExperiences;
    this.createCVForm.value['projects'] = this.projects;
    const mappedCV = this.createCVService.mapData(this.createCVForm.value);
    console.log(mappedCV);
    switch (this.currentType) {
      case 'edit':
        this.createCVService.editCV(this.createCVForm.value, this.cvId);
        break;
      default:
        this.createCVService.createCV(this.createCVForm.value);
        break;
    }
  }

  onUploadFile(event: any) {
    const file = event.target.files[0];
    this.createCVForm.patchValue({
      avatar: file,
    });
    this.createCVForm.get('avatar')?.updateValueAndValidity();

    // this.createCVService.uploadFile(this.createCVForm.value['avatar']).subscribe(event => {
    //   switch (event.type) {
    //     case HttpEventType.UploadProgress:
    //       var eventTotal = event.total ? event.total : 0;
    //       this.progress = Math.round(event.loaded / eventTotal * 100);
    //       break;
    //     case HttpEventType.Response:
    //       this.progress = 0;
    //       break;
    //   }
    // });

    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.avatarUrl = reader.result as string;
    };

    reader.readAsDataURL(file);
  }

  isStringEmpty(str: string): boolean {
    if (str.length === 0) return true;
    return false;
  }

  ifFormValid(): boolean {
    if (this.createCVForm.value['name'].length === 0) return false;
    if (this.createCVForm.value['jobTitle'].length === 0) return false;
    if (this.avatarUrl.length === 0) return false;
    return false;
  }

  get f() {
    return this.createCVForm.controls;
  }

  onChangeTechnicalSkillset(): void {
    const _technicalSkillSet = this.technicalSkills.find(
      (t) => t.name === this.programmingLanguageForm.value['technicalSkillset']
    );
    _technicalSkillSet.competences.map((competence: any) => {
      this.competences.push({
        name: competence,
      });
    });
  }

  addProgammingLanguage(): void {
    const _technicalSkill = this.technicalSkills.find(
      (t) => t.name === this.programmingLanguageForm.value['technicalSkillset']
    );
    const competenceName = _technicalSkill.competences.find(
      (c: any) => c === this.programmingLanguageForm.value['competence']
    );
    const _competence: Competence = {
      name: competenceName,
    };
    const _proficiency = this.proficiencies.find(
      (p) => p.name === this.programmingLanguageForm.value['proficiency']
    );
    const programmingLanguage: ProgrammingLanguage = {
      technicalSkill: _technicalSkill,
      competence: _competence,
      proficiency: _proficiency,
    };
    this.programmingLanguages.push(programmingLanguage);
    this.programmingLanguageForm.reset();
    this.programmingLanguageForm = this.fb.group({
      technicalSkillset: 'Technical skillset',
      competence: 'Competence',
      proficiency: '',
    });
  }

  removeProgrammingLanguage(index: number): void {
    this.programmingLanguages.splice(index, 1);
  }

  addSkill(): void {
    const skill: Skill = this.otherSkills.find(
      (s) => s.name === this.otherSkillsForm.value['name']
    );
    this.addedSkills.push(skill);
    console.log(this.addedSkills);
    this.otherSkillsForm.reset();
  }

  removeAddedSkill(index: number): void {
    this.addedSkills.splice(index, 1);
  }

  addEducation(): void {
    const education: Education = {
      university: this.educationForm.value['university'],
      major: this.educationForm.value['major'],
      from: this.educationForm.value['from'],
      to: this.educationForm.value['to'],
    };
    this.educations.push(education);
    this.educationForm.reset();
  }

  removeEducation(index: number) {
    this.educations.splice(index, 1);
  }

  addCertificate(): void {
    const certificate: Certificate = {
      name: this.certificateForm.value['name'],
      organization: this.certificateForm.value['organization'],
      issuedDate: this.certificateForm.value['issuedDate'],
    };
    this.certificates.push(certificate);
    this.certificateForm.reset();
  }

  removeCertificate(index: number): void {
    this.certificates.splice(index, 1);
  }

  addWorkingExperience(): void {
    const workingExperience: WorkingExperience = {
      companyName: this.workingExperienceForm.value['companyName'],
      position: this.workingExperienceForm.value['position'],
      from: this.workingExperienceForm.value['from'],
      to: this.workingExperienceForm.value['to'],
    };

    this.workingExperiences.push(workingExperience);
    this.workingExperienceForm.reset();
  }

  removeWorkingExperience(index: number): void {
    this.workingExperiences.splice(index, 1);
  }

  addProject(): void {
    const project: Project = {
      name: this.projectForm.value['name'],
      technology: this.projectForm.value['technology'],
      description: this.projectForm.value['description'],
    };

    this.projects.push(project);
    this.projectForm.reset();
  }

  removeProject(index: number): void {
    this.projects.splice(index, 1);
  }

  initCVData(existData: any = {}) {
    const {
      cvType,
      personalInfo,
      photo,
      jobTitle,
      hobby,
      educations,
      certificates,
      programmingLanguages,
      projects,
      workingExperiences,
      otherSkills,
    } = existData;
    const {
      address,
      careerObjective,
      dob,
      email,
      gender,
      linkedin,
      phone,
      username,
    } = personalInfo;
    this.avatarUrl = photo;
    this.createCVForm = this.fb.group({
      id: existData.id,
      cvType,
      name: [username, Validators.required],
      jobTitle: [jobTitle, Validators.required],
      avatar: photo,
      avatarUrl: [photo, Validators.required],
      email,
      phone,
      gender,
      dateOfBirth: dob,
      address,
      linkedIn: linkedin,
      careerObjectives: careerObjective,
      hobby: hobby,
    });
    educations.forEach((x: any) => {
      this.educations.push({
        id: x.id,
        university: x.name,
        major: x.major,
        from: x.fromDate,
        to: x.toDate,
      });
    });
    certificates.forEach((x: any) => {
      this.certificates.push({
        id: x.id,
        name: x.certificateName,
        organization: x.organizationName,
        issuedDate: x.date,
      });
    });
    programmingLanguages.forEach((x: any) => {
      this.programmingLanguages.push({
        id: x.id,
        technicalSkill: x.technicalSkillset,
        competence: x.competence,
        proficiency: x.level,
      });
    });
    otherSkills.forEach((x: any) => {
      this.addedSkills.push(x.skill);
    });
    workingExperiences.forEach((x: any) => {
      this.workingExperiences.push({
        id: x.id,
        companyName: x.companyName,
        position: x.jobDescription,
        from: x.fromDate,
        to: x.toDate,
      });
    });
    projects.forEach((x: any) => {
      this.projects.push({
        id: x.id,
        name: x.name,
        technology: x.languages,
        description: x.description,
      });
    });
  }

  fetchSampleData() {
    this.homeService.getUserInfo().subscribe((result: any) => {
      const { email, first_name, last_name } = result || {};
      const CV = this.createCVService.fetchSampleData();
      this.avatarUrl = CV.avatarUrl;
      this.createCVForm = this.fb.group({
        cvType: 'cv_type_1',
        name: last_name + ' ' + first_name,
        jobTitle: CV.jobTitle,
        avatarUrl: CV.avatarUrl,
        email,
        phone: CV.phone,
        gender: CV.gender,
        dateOfBirth: CV.dateOfBirth,
        address: CV.address,
        linkedIn: CV.linkedIn,
        careerObjectives: CV.careerObjectives,
        hobby: CV.hobby,
        educations: [],
        certificates: [],
        programmingLanguages: [],
        workingExperiences: [],
        projects: [],
      });

      CV.educations.forEach((x: any) => {
        this.educations.push({
          university: x.university,
          major: x.major,
          from: x.from,
          to: x.to,
        });
      });

      CV.certificates.forEach((x: any) => {
        this.certificates.push({
          name: x.name,
          organization: x.organization,
          issuedDate: x.issuedDate,
        });
      });
      CV.programmingLanguages.forEach((x: any) => {
        this.programmingLanguages.push({
          technicalSkill: x.technicalSkill,
          competence: x.competence,
          proficiency: x.proficiency,
        });
      });
      CV.addedSkills.forEach((x: any) => {
        this.addedSkills.push({
          name: x.name,
        });
      });
      CV.workingExperiences.forEach((x: any) => {
        this.workingExperiences.push({
          companyName: x.companyName,
          position: x.position,
          from: x.from,
          to: x.to,
        });
      });
      CV.projects.forEach((x: any) => {
        this.projects.push({
          name: x.name,
          technology: x.technology,
          description: x.description,
        });
      });
    });
  }
}
