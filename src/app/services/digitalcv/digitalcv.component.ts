import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONFIG, httpOptions } from '../config';

@Injectable({
  providedIn: 'root',
})
export class DigitalcvComponent {
  host = CONFIG.HOST;
  constructor(private http: HttpClient) {}

  // GETS
  getCVs() {
    let url = `${this.host}/digitalcv`;
    return this.http.get(url);
  }
  // POSTS
  createCV(data: any) {
    let url = `${this.host}/digitalcv/createcv`;
    // return this.http.post(url);
    return this.http.post(url, { data }, httpOptions);
  }
}
