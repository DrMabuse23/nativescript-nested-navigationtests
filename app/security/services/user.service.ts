import { Observable } from 'rxjs/Observable';
import { IUserResponse } from './../interfaces/iuser-response';
import { Http } from '@angular/http';
import { EnvironmentService } from './../../core/environment.service';
import { User } from './../models/User';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private _user: User;
  private _isLoggedIn: boolean;
  private _information: IUserResponse.RootObject;

  constructor(private http: Http, private envService: EnvironmentService) {
    this._user = new User();
    this._isLoggedIn = false;
  }

  private get securityUrl() {
    return `${this.envService.server}/gofer/security/rest/auth/login`;
  }

  public authenticate(userName, password): Observable<IUserResponse.RootObject> {
    return this.http.post(this.securityUrl, { userName: userName, password: password })
      .map((body) => body.json())
      .map((res) => {
        this.userName = userName;
        this.password = password;
        this.isLoggedIn = true;
        this._information = res;
        return res;
      });
  }

  get loginInformation() {
    return this._information;
  }

  get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  set isLoggedIn(value: boolean) {
    this._isLoggedIn = value;
  }

  set userName(name: string) {
    this._user.userName = name;
  }

  set password(password: string) {
    this._user.password = password;
  }

  get password() {
    return this._user.password;
  }

  get userName() {
    return this._user.userName;
  }
}
