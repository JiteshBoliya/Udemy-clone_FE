import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Editor } from 'ngx-editor';

@Component({
  selector: 'app-dialog-tutorial',
  templateUrl: './dialog-tutorial.component.html',
  styleUrls: ['./dialog-tutorial.component.css']
})
export class DialogTutorialComponent implements OnInit {
  public courseForm !: FormGroup;
  editor!: Editor;
  html!: '';
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  urls = new Array<string>();
  constructor() { }

  ngOnInit(): void {
    this.urls = [];
    this.courseForm = new FormGroup({
      title: new FormControl(""),
      description: new FormControl(""),
      uploadDate: new FormControl(""),
      price: new FormControl(""),
      catagory: new FormControl(""),
      cariculam:new FormControl(""),
      specification: new FormControl(""),
    })
    this.editor = new Editor();
  }
  ngOnDestroy(): void {
    this.editor.destroy();
  }
  onadd(){

  }
  detectFiles(event:any) {
    let files = event.target.files;
    // console.log(files);

    if (files) {
      for (let file of files) {
        let reader = new FileReader();
        reader.onload = (e: any) => {
          this.urls.push(e.target.result);
        }
        reader.readAsDataURL(file);
      }
    }
  }
  remove(i:any){
    console.log(i);
    console.log(this.urls);
    
    this.urls.splice(i,1);
    console.log(this.urls);
  }
}
