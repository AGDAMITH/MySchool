import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-add-teach',
  templateUrl: './add-teach.component.html',
  styleUrls: ['./add-teach.component.css']
})
export class AddTeachComponent implements OnInit {

  formData = {
    tname: '',
    tbday: '',
    subject:'',
    address: ''
  }

  constructor(private mService: CommonService) { }

  ngOnInit(): void {
  }

  submit() {
    this.mService.SaveTeacher(this.formData).subscribe(val=>{
      console.log(val);
      alert('saved');
    });
  }

}
