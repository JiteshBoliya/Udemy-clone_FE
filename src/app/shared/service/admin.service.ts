import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private Url= "http://localhost:3000"
  constructor(private http:HttpClient) { }

  // #Publisher
  getpublisher(){
    return this.http.get<any>(`${this.Url}/publisher`)
  }
  getpublisherLimit(){
    return this.http.get<any>(`${this.Url}/publisher-limit`)
  }
  getpage(page:any){
    return this.http.get<any>(`${this.Url}/publisher/pagger/`+page)
  }
  getsort(sortwith:any,sortby:any){
    return this.http.get<any>(`${this.Url}/publisher/sort/${sortby}/${sortwith}`)
  }
  getstatus(id:any,status:any){
    return this.http.get<any>(`${this.Url}/publisher/statusChange/${id}/${status}`)
  }

  // #GIT
  addGIT(data:any){
    return this.http.post<any>(`${this.Url}/GIT`,data)
  }
  getGIT(){
    return this.http.get<any>(`${this.Url}/GIT`)
  }
  getGITLimit(){
    return this.http.get<any>(`${this.Url}/GIT-limit`)
  }
  changeStatusGIT(id:any,state:any){
    return this.http.get<any>(`${this.Url}/GIT/status/${id}/${state}`)
  }
  getGITpage(page:any){
    return this.http.get<any>(`${this.Url}/GIT/pagger/`+page)
  }
  getGITsort(sortwith:any,sortby:any){
    return this.http.get<any>(`${this.Url}/GIT/sort/${sortby}/${sortwith}`)
  }
  deleteGIT(id:any){
    return this.http.get<any>(`${this.Url}/GIT/delete/`+id)
  }

  //#Subcriber
  getsubscriber(){
    return this.http.get<any>(`${this.Url}/subscriber`)
  }
  getsubscriberlimit(){
    return this.http.get<any>(`${this.Url}/subscriber-limit`)
  }
  upadateSubscriber(id:any,data:any){
    return this.http.post<any>(`${this.Url}/subscriber/update/${id}`,data)
  }
}
