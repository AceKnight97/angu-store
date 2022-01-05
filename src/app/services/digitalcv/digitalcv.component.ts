import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONFIG, httpOptions } from '../config';
import LocalStorage from 'src/app/localStorage';

@Injectable({
  providedIn: 'root',
})
export class DigitalcvComponent {
  host = CONFIG.HOST;
  digitalcv = `${this.host}/digitalcv`;
  constructor(private http: HttpClient) {}

  // GETS
  // digitalcv
  getCVs() {
    let url = this.digitalcv;
    return this.http.get(url);
  }

  getCVManagement() {
    let url = `${this.digitalcv}/management/tttriet199@gmail.com`;
    return this.http.get(url);
  }

  getMasterData() {
    let url = `${this.host}/masterdata`;
    return this.http.get(url);
  }

  // POSTS
  createCV(data: any, Authorization: string) {
    let url = `${this.digitalcv}/createcv`;
    return this.http.post(url, data, httpOptions(Authorization));
  }

  login(email: string, password: string) {
    let url = `${this.host}/api/public/login`;
    return this.http.post(url, { email, password }, httpOptions());
  }
  register(username: string, email: string, password: string) {
    let url = `${this.host}/api/public/register`;
    return this.http.post(url, { username, email, password }, httpOptions());
  }
}
