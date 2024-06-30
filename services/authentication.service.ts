import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { addUser, loginReq, loginResponse, registerResponse } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly baseURL="http://localhost:3000/auth/"
  constructor(private http:HttpClient) { }

  registerUser(newUser:addUser):Observable<registerResponse>{
    return this.http.post<registerResponse>(this.baseURL +"register", newUser)

  }

  login(user:loginReq):Observable<loginResponse>{
    return this.http.post<loginResponse>(this.baseURL+"login", user)
  }
}
