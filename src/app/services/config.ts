import { HttpHeaders, HttpClient } from '@angular/common/http';

export const httpOptions = (Authorization: string = '') => ({
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
    'Access-Control-Allow-Headers':
      'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
    Authorization,
  }),
});

export const CONFIG = {
  HOST: 'http://localhost:8080',
};
