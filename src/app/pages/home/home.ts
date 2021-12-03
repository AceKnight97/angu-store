export class Home {
  constructor(public email: string, public username: string) {}
  setEmail(email: string) {
    this.email = email;
  }
}
