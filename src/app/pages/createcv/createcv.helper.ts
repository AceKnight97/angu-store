import { FormControl, FormGroup } from '@angular/forms';

export const proLanguageForm = new FormGroup({
  technicalSkillset: new FormControl(''),
  competence: new FormControl(''),
  level: new FormControl('Learner'),
});
export const workingEpxForm = new FormGroup({
  fromDate: new FormControl(undefined),
  toDate: new FormControl(undefined),
  companyName: new FormControl('triet test 1'),
  jobTitle: new FormControl('triet test 1'),
  jobDescription: new FormControl('triet test 1'),
});
export const eduForm = new FormGroup({
  fromDate: new FormControl(undefined),
  toDate: new FormControl(undefined),
  name: new FormControl('triet test 1'),
  major: new FormControl('triet test 1'),
});
export const certiForm = new FormGroup({
  date: new FormControl(undefined),
  certificateName: new FormControl('triet test 1'),
  organizationName: new FormControl('triet test 1'),
});
export const projectForm = new FormGroup({
  name: new FormControl('triet test 1'),
  languages: new FormControl('triet test 1'),
  description: new FormControl('triet test 1'),
});
export const referForm = new FormGroup({
  referenceName: new FormControl('triet test 1'),
  companyName: new FormControl('triet test 1'),
  email: new FormControl('tttriet1997@gmail.com'),
  phone: new FormControl('triet test 1'),
});

export const CREATE_CV_TYPES = {
  PROGRAMMING: 'PROGRAMMING',
  WORKING_EXP: 'WORKING_EXP',
  EDUTCATION: 'EDUTCATION',
  CERTIFICATE: 'CERTIFICATE',
  PROJECT: 'PROJECT',
  REFERENCE: 'REFERENCE',
};
