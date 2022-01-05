enum Gender {
  Male,
  Female,
  Others,
}
export interface AuthInterface {
  username?: string;
  email?: string;
  token?: string;
  photo?: string;
  isSuccess?: boolean;
  id?: number;
  address?: string;
  careerObjective?: string;
  dob?: string;
  gender?: Gender;
  linkedin?: string;
  phone?: string;
}
