import { HttpHeaders, HttpClient } from '@angular/common/http';

export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    // Authorization: 'my-auth-token'
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
    'Access-Control-Allow-Headers':
      'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
    Authorization:
      'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxLHR0dHJpZXQxOTlAZ21haWwuY29tIiwiaXNzIjoiZXhhbXBsZS5pbyIsImlhdCI6MTY0MTI3MDA4MSwiZXhwIjoxNjQxODc0ODgxfQ.Jb_HIUnLkZFksPkntXofd29nSMbbPf-abY8mEkJAEcZZB_UZO5WWVpIaRy8Vw5loeEnnth1D_HXwp1KE-Kx7-w',
  }),
};

export const CONFIG = {
  HOST: 'http://localhost:8080',
};
