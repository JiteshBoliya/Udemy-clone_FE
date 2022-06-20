import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private Url= "http://localhost:3000"
  public cartItemCount = new BehaviorSubject<number>(50);
  public user:any
  constructor(private http:HttpClient) { }

  getCartItemCount(){
    return this.cartItemCount.asObservable();
  }
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
  getCoursePurchaseList(id:any){
    return this.http.get<any>(`${this.Url}/course/purchase/`+id)
  }
  getPublisherListlimit(){
    return this.http.get<any>(`${this.Url}/publisher/some`)
  }
  setComment(data:any){
    return this.http.post<any>(`${this.Url}/rating`,data)
  }
  getcommentPublisher(id:any){
    return this.http.get<any>(`${this.Url}/rating/publisher/`+id)
  }
  getcommentCourse(id:any){
    return this.http.get<any>(`${this.Url}/rating/course/`+id)
  }
  getcommentPublisherAll(id:any){
    return this.http.get<any>(`${this.Url}/rating/publisher/All/`+id)
  }
  getcommentCourseAll(id:any){
    return this.http.get<any>(`${this.Url}/rating/course/All/`+id)
  }
  sendInvoice(data:any){
    return this.http.post<any>(`${this.Url}/invoice`,data)
  }
  getPublisherDetailById(id:any){
    return this.http.get<any>(`${this.Url}/publisherById/`+id)
  }
  Search(data:any){
    return this.http.get<any>(`${this.Url}/search/`+data)
  }
  getdeshboardcommentPublisherAll(id:any){
    return this.http.get<any>(`${this.Url}/count-rating/`+id)
  }
}
