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
import { DigitalcvComponent } from 'src/app/services/digitalcv/digitalcv.component';
@Component({
  selector: 'app-pages-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  angForm;

  constructor(
    private fb: FormBuilder,
    private digitalcvSv: DigitalcvComponent,
    private localStorage: LocalStorage,
    private _router: Router
  ) {
    this.angForm = this.fb.group({
      jobTitle: 'Front-end developer',
    });
  }
  ngOnInit(): void {}
}
