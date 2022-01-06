import { Injectable } from '@angular/core';
import { AuthInterface } from '../reducers/auth/auth';

@Injectable({
  providedIn: 'root',
})
class LocalStorage {
  login(data: AuthInterface) {
    localStorage.setItem('full', JSON.stringify(data));
    // console.log({ LocalStorage: data });
  }

  getData() {
    if (localStorage.getItem('full')) {
      return JSON.parse(localStorage.getItem('full') || '');
    }
    return {};
  }

  logout() {
    localStorage.clear();
  }
}
export default LocalStorage;
