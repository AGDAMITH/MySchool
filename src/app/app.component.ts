import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import { CommonService } from './common.service';

import { Http, Response, Headers, RequestOptions } from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MySchool';
  constructor (private newService : CommonService,){ }
  Repdata;
  valbutton = "Save";

  ngOnInit() {
  this.newService.GetStudent().subscribe( data => this.Repdata = data)
  }

  onSave = function (student,isValid:boolean) {
    student.mode = this.valbutton;
    this.newService.saveStudent(student)
    .subcribe(data => { alert(data.data);
      this.ngOnInit();
    }
    , error => this.errorMessage = error)
  }

  }
