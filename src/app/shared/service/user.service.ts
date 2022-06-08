import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private Url= "http://localhost:3000"
  constructor(private http:HttpClient) { }

  getCatagory(){
    return this.http.get<any>(`${this.Url}/Catagory`)
  }
}
