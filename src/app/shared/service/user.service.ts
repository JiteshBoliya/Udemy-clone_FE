import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private Url= "http://localhost:3000"
  public user:any
  constructor(private http:HttpClient) { }

  getCatagory(){
    return this.http.get<any>(`${this.Url}/Catagory`)
  }
  getCourse(id:any){
    return this.http.get<any>(`${this.Url}/purchase/`+id)
  }
  // getpublisher(id:any){
  //   return this.http.get<any>(`${this.Url}/publisherdetails/`+id)
  // }
  getTotal_EnrollCourse(id:any){
    return this.http.get<any>(`${this.Url}/course/totalEnroll/`+id)
  }
  getSubscriberDetail(id:any){
    return this.http.get<any>(`${this.Url}/subsciberdetails/`+id)
  }
  getAll_Course(){
    return this.http.get<any>(`${this.Url}/course`)
  }
  getSome_Course(){
    return this.http.get<any>(`${this.Url}/course/popular`)
  }
  get_courseDetails(id:any){
    return this.http.get<any>(`${this.Url}/course/`+id)
  }
  get_tutorial(id:any){
    return this.http.get<any>(`${this.Url}/tutorial/`+id)
  }
  getPublisherDetail(id:any){
    return this.http.get<any>(`${this.Url}/publisherdetails/`+id)
  }
  payment(data:any){
    return this.http.post<any>(`${this.Url}/charge`,data)
  }
  getCourseList(id:any){
    return this.http.get<any>(`${this.Url}/courseList/`+id)
  }
  getCourseUserList(id:any){
    return this.http.get<any>(`${this.Url}/course/getUser/`+id)
  }
  getPublisherListlimit(){
    return this.http.get<any>(`${this.Url}/publisher/some`)
  }
}
