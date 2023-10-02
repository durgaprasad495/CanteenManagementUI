import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { user } from '../models/user';
import { login } from '../models/login';
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
baseUrl="";
  constructor(private http:HttpClient) { }

  signUp(userObj:any){
   return this.http.post<any>(`{baseUrl}register`,userObj);
  }
  login(loginObj:any){
    return this.http.post<any>(`{baseUrl}login`,loginObj);
  }
  storeToken(tokenValue:string)
  {
    localStorage.setItem('token',tokenValue);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  isLoggedIn():boolean{
    return !localStorage.getItem('token');
  
  }
}
