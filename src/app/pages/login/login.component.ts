import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import LocalStorage from 'src/app/localStorage';
import { MutationResponse } from 'src/app/models';
import { AppState } from 'src/app/reducers';
import { AuthInterface } from 'src/app/reducers/auth/auth';
import { DigitalcvComponent } from 'src/app/services/digitalcv/digitalcv.component';
import * as AuthActions from '../../reducers/auth/auth.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  auth: Observable<AuthInterface> | undefined;
  loginForm;
  registerForm;

  constructor(
    private fb: FormBuilder,
    private digitalcvSv: DigitalcvComponent,
    private store: Store<AppState>,
    private localStorage: LocalStorage,
    private _router: Router
  ) {
    this.auth = this.store.select('auth');
    this.loginForm = this.fb.group({
      email: 'aceknight@gmail.com',
      password: '123456',
    });
    this.registerForm = this.fb.group({
      username: 'AceKnight97',
      email: 'aceknight@gmail.com',
      password: '123456',
      confirmPassword: '123456',
    });
    this.auth.subscribe((saveData: AuthInterface) => {
      if (saveData.isSuccess) {
        this._router.navigate(['home']);
      }
    });
  }

  public onFileChanged(event: any) {}

  ngOnInit(): void {}

  onFormSubmit() {
    const loginForm = this.loginForm.value;
    // console.log({ loginForm });
    this.digitalcvSv
      .login(loginForm.email, loginForm.password)
      .subscribe((login: MutationResponse) => {
        // console.log({ login });
        if (login.isSuccess) {
          const saveData = {
            ...login?.data?.user,
            token: login?.data?.token,
            isSuccess: true,
          };
          this.localStorage.login(saveData);
          this.store.dispatch(new AuthActions.UpdateAuth(saveData));
          this._router.navigate(['home']);
        } else {
          alert('Incorrect username or password!');
        }
      });
  }

  onRegisterFormSubmit() {
    const val = this.registerForm.value;
    // console.log({ val });
    this.digitalcvSv
      .register(val.username, val.email, val.password)
      .subscribe((register: MutationResponse) => {
        if (register.isSuccess) {
          alert('Congratulations! Sign up success.');
        } else {
          alert('Email already existed!');
        }
      });
  }
}
