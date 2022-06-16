import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeshboardService {
  private Url="http://localhost:3000/"
  usermail: any;
  // private userUrl= process.env['URL']+"/user"
  constructor(private http:HttpClient) { }

  Count_subscriber(){
    return this.http.get<any>(`${this.Url}count-subscriber`)}

  Count_publisher(){
    return this.http.get<any>(`${this.Url}count-publisher`)}

  Count_GIT(){
    return this.http.get<any>(`${this.Url}count-GIT`)}
  
  count_sales(){
    return this.http.get<any>(`${this.Url}count-sales`)}
  
  Count_course(){
    return this.http.get<any>(`${this.Url}count-Course`)}
}
