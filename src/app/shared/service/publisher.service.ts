import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PublisherService {

  private Url= "http://localhost:3000"
  constructor(private http:HttpClient) { }

  // #Publisher
  getCatagory(){
    return this.http.get<any>(`${this.Url}/Catagory`)
  }
  getSpecification(){
    return this.http.get<any>(`${this.Url}/Specification`)
  }
  getCourseList_ById(id:any){
    return this.http.get<any>(`${this.Url}/courseList/`+id)
  }
  getTutorialList_ById(id:any){
    return this.http.get<any>(`${this.Url}/tutorialList/`+id)
  }
  getCourse(){
    return this.http.get<any>(`${this.Url}/course`)
  }
  getCourseLimit(){
    return this.http.get<any>(`${this.Url}/course-limit`)
  }
  getpage(page:any){
    return this.http.get<any>(`${this.Url}/course/pagger/`+page)
  }
  getsort(sortwith:any,sortby:any){
    return this.http.get<any>(`${this.Url}/course/sort/${sortby}/${sortwith}`)
  }
  getstatus(id:any,status:any){
    return this.http.get<any>(`${this.Url}/course/statusChange/${id}/${status}`)
  }
  uploadCourse(data:any){
    return this.http.post<any>(`${this.Url}/course/AddCourse`,data)
  }
  uploadtutorial(data:any){
    return this.http.post<any>(`${this.Url}/course/AddTutorial`,data)
  }
  updateLock(id:any,lock:any){
    return this.http.get<any>(`${this.Url}/tutorialList/update-Lock/${id}/${lock}`)
  }
  updateProfile(id:any,data:any){
    return this.http.get<any>(`${this.Url}/publisher/update/${id}`,data)
  }
  getCoursebyPublisher(id:any){
    return this.http.get<any>(`${this.Url}/publisher/course/`+id)
  }
  getPublisherDetail(id:any){
    return this.http.get<any>(`${this.Url}/publisherById/`+id)
  }
  getAllRating(id:any){
    return this.http.get<any>(`${this.Url}/publisher/rating/`+id)
  }
  getRatingPagger(id:any,page:any){
    return this.http.get<any>(`${this.Url}/rating/pagger/`+id+`/`+page)
  }
  getRatingsort(id:any,sortby:any,sortwith:any){
    return this.http.get<any>(`${this.Url}/rating/sort/`+id+`/`+sortby+`/`+sortwith)
  }
  
  
}
