import { FormControl, FormGroup } from '@angular/forms';

export interface Programming {
  technicalSkillset: string;
  competence: string;
  level: string;
}
export interface WorkingExp {
  fromDate: string;
  toDate: string;
  companyName: string;
  jobTitle: string;
  jobDescription: string;
}
export interface Education {
  fromDate: string;
  toDate: string;
  name: string;
  major: string;
}
export interface Certificate {
  date: string;
  certificateName: string;
  organizationName: string;
}
export interface Project {
  name: string;
  languages: string;
  description: string;
}
export interface Reference {
  referenceName: string;
  companyName: string;
  email: string;
  phone: string;
}

export const proLanguageForm = new FormGroup({
  technicalSkillset: new FormControl(''),
  competence: new FormControl(''),
  level: new FormControl('Learner'),
});
export const workingExpForm = new FormGroup({
  fromDate: new FormControl('2022-01-04'),
  toDate: new FormControl('2022-01-04'),
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

export const workingExperiencesCheck = (
  workingExperiences: WorkingExp[]
): boolean => {
  let res;
  res = !!workingExperiences.find(
    (x: WorkingExp) =>
      !(
        x.fromDate &&
        x.toDate &&
        x.companyName &&
        x.jobTitle &&
        x.jobDescription
      )
  );
  return res;
};
// programmingLanguages,
// otherSkills,
// workingExperiences,
// educations,
// certificates,
// projects,
// referencecvs,

export const programmingLanguagesCheck = (
  programmingLanguages: Programming[]
): boolean => {
  let res;
  res = !!programmingLanguages.find(
    (x: Programming) => !(x.technicalSkillset && x.competence && x.level)
  );
  return res;
};
export const educationsCheck = (educations: Education[]): boolean => {
  let res;
  res = !!educations.find(
    (x: Education) => !(x.fromDate && x.toDate && x.name && x.major)
  );
  return res;
};
export const certificatesCheck = (certificates: Certificate[]): boolean => {
  let res;
  res = !!certificates.find(
    (x: Certificate) => !(!x.date && !x.certificateName && !x.organizationName)
  );
  return res;
};
export const projectsCheck = (projects: Project[]): boolean => {
  let res;
  res = !!projects.find(
    (x: Project) => !(x.name && x.languages && x.description)
  );
  return res;
};
export const referencecvsCheck = (referencecvs: Reference[]): boolean => {
  let res;
  res = !!referencecvs.find(
    (x: Reference) => !(x.referenceName && x.companyName && x.email && x.phone)
  );
  return res;
};
