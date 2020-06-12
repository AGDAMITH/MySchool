import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: Http) { }

  SaveStudent(student){
    return this.http.post('http://localhost:8080/api/SaveStudent/', student)
    .map((response: Response) => response.json())
  }
  GetStudent(){
    return this.http.get('http://localhost:8080/api/getStudent/')
    .map((response: Response) => response.json())
  }
  deleteStudent(id){
    return this.http.post('http://localhost:8080/api/deleteStudent/', {'id': id})
    .map((response: Response) => response.json())
  }
}
