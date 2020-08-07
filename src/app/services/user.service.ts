import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../models/user.interface';
import { IUserHttp } from '../models/http-models/user-http.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersUrl = `${environment.apiUrl}users.json`;

  constructor(private _http: HttpClient) { }

  getUsers(): Observable<IUserHttp> {
    return this._http.get<IUserHttp>(this.usersUrl);
  }
}
