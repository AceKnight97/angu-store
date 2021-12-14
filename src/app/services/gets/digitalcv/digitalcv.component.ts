import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONFIG } from '../../config';

@Injectable({
  providedIn: 'root',
})
export class DigitalcvComponent {
  host = CONFIG.HOST;
  constructor(private http: HttpClient) {}

  getData() {
    let url = `${this.host}/digitalcv`;
    return this.http.get(url);
  }
}
