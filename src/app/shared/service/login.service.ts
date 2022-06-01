import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // private loginUrl= process.env['URL']
  private loginUrl= "http://localhost:3000"
  UserId!:Subject<string>
  constructor(private http:HttpClient) {  
  }
  
  register(data:any){
    return this.http.post<any>(`${this.loginUrl}/register`,data)}

  varifyEmail(data:any){
    return this.http.post<any>(`${this.loginUrl}/varify-email`,data)}
  
  login(data:any){
    return this.http.post<any>(`${this.loginUrl}/login`,data)
  }
  resetPassword(id:any,data:any){
    return this.http.post<any>(`${this.loginUrl}/resetpassword/${id}`,data)
  }
  forgetPassword(data:any){
    return this.http.post<any>(`${this.loginUrl}/forgetpassword`,data)}

  getUserInfo(userid:any){
    return this.http.get<any>(`${this.loginUrl}/userDetail/`+userid)
  }
}
