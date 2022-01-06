import { Component, OnInit, Input } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  FormArray,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import LocalStorage from 'src/app/localStorage';
import { AppState } from 'src/app/reducers';
import { AuthInterface } from 'src/app/reducers/auth/auth';
import { DigitalcvComponent } from 'src/app/services/digitalcv/digitalcv.component';
import * as AuthActions from '../../reducers/auth/auth.action';

@Component({
  selector: 'app-pages-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  auth: Observable<AuthInterface> | undefined;
  angForm;

  constructor(
    private fb: FormBuilder,
    private digitalcvSv: DigitalcvComponent,
    private localStorage: LocalStorage,
    private _router: Router,
    private store: Store<AppState>
  ) {
    this.angForm = this.fb.group({
      jobTitle: 'Front-end developer',
    });
    this.auth = this.store.select('auth');
    this.auth.subscribe((saveData: AuthInterface) => {
      if (!saveData.isSuccess) {
        this._router.navigate(['login']);
      }
    });
  }
  ngOnInit(): void {}
  onLogout() {
    this.localStorage.logout();
    this.store.dispatch(new AuthActions.ClearAuth());
  }
}
