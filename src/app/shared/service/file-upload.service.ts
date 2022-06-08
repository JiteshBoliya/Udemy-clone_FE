import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { FileUpload } from '../models/file-upload';
@Injectable({
  providedIn: 'root'
})
@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private basePath = '/uploads';
  videoupload=new Array<string>()
  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage) { }
  pushFileToStorage(fileUpload: FileUpload,basepath:any): Observable<number | undefined> {
    this.basePath=basepath
    const filePath = `${basepath}/${fileUpload.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload.file);
    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          fileUpload.url = downloadURL;
          this.videoupload.push(downloadURL)
          fileUpload.name = fileUpload.file.name;
          this.saveFileData(fileUpload);
        });
      })
    ).subscribe();
    return uploadTask.percentageChanges();
  }
  private saveFileData(fileUpload: FileUpload): void {
    this.db.list(this.basePath).push(fileUpload);
  }
  getFiles(numberItems: number): any { 
    return this.db.list(this.basePath, ref =>
      ref.limitToLast(numberItems));
  }
  getLink(){
    // console.log(this.videoupload);
    return this.videoupload
    // this.storage.ref.getDownloadURL().then(url => {this.downloadableURL = url; });
  }
  deleteFile(fileUpload: FileUpload): void {
    this.deleteFileDatabase(fileUpload.key)
      .then(() => {
        this.deleteFileStorage(fileUpload.name);
      })
      .catch(error => console.log(error));
  }
  private deleteFileDatabase(key: string): Promise<void> {
    return this.db.list(this.basePath).remove(key);
  }
  private deleteFileStorage(name: string): void {
    const storageRef = this.storage.ref(this.basePath);
    storageRef.child(name).delete();
  }
}