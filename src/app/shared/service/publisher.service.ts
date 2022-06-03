import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PublisherService {

  private Url= "http://localhost:3000"
  constructor(private http:HttpClient) { }

  // #Publisher
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
}
