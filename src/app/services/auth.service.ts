import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn!: boolean ;
  private baseUrl = "http://localhost:3000";

  constructor(private http:HttpClient) { }

  registerUser(userDetails: User){
    return this.http.post(`${this.baseUrl}/users`,userDetails);
  }

  getUserByEmail(email: string): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}/users?email=${email}`);
  }

  setLogInStatus(loginStatus: boolean){
    this.isLoggedIn = loginStatus;
  }

  getLoginStatus(){
    return this.isLoggedIn;
  }
}
