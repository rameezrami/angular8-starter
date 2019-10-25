import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor() { }
  isLoggedIn() {
    return this.getAuthUserToken() ? true : false;
  }
  getAuthUserToken() {
    return localStorage.getItem("authUserToken") &&
      localStorage.getItem("authUserToken") != ""
      ? localStorage.getItem("authUserToken")
      : false;
  }
}
