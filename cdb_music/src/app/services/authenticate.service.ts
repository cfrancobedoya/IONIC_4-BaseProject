import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }
  loginUser(credential) {
    return new Promise((accept, reject) => {
      if(credential.email=='test.2test.com' && credential.password=='12345'){
        accept('Login correcto');
      } else {
        reject('login incorrecto');
      }
    });
  }
}
