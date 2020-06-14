import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  

  constructor(private http: Http) { }

  findAll() {
    return this.http.get('http://localhost:3000/api/student');
  }

  SaveStudent(student){
    return this.http.post('http://localhost:3000/api/student', student);
  }
  GetStudent(){
    return this.http.get('http://localhost:3000/api/student');
  }
  deleteStudent(id){
    return this.http.delete('http://localhost:3000/api/student/'+id);
  }
  searchStudent(name){
    return this.http.get('http://localhost:3000/api/student/'+name);
  }
  
  SaveTeacher(teacher){
    return this.http.post('http://localhost:3000/api/teacher', teacher);
  }
  GetTeacher(){
    return this.http.get('http://localhost:3000/api/teacher');
  }
  deleteTeacher(id){
    return this.http.delete('http://localhost:3000/api/teacher/'+id);
  }

  findAllTeach() {
    return this.http.get('http://localhost:3000/api/teacher');
  }


}
