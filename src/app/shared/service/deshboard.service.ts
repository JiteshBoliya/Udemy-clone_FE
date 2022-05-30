import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeshboardService {
  private Url="http://localhost:3000/"
  // private userUrl= process.env['URL']+"/user"
  constructor(private http:HttpClient) { }

  Count_subscriber(){
    return this.http.get<any>(`${this.Url}count-subscriber`)}

  Count_publisher(){
    return this.http.get<any>(`${this.Url}count-publisher`)}

}
