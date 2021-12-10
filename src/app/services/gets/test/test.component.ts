import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TestComponent {
  constructor(private http: HttpClient) {}

  getData() {
    let url = 'http://localhost:8080/api/users';
    return this.http.get(url);
  }
}
