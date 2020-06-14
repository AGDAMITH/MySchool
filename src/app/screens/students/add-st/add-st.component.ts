import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-st',
  templateUrl: './add-st.component.html',
  styleUrls: ['./add-st.component.css']
})
export class AddStComponent implements OnInit {

  formData = {
    name: '',
    dob: '',
    grade: '',
    m_name: '',
    f_name: '',
    address: ''
  }

 

  constructor(private mService: CommonService) { }

  ngOnInit(): void {
  }

  submit() {
    this.mService.SaveStudent(this.formData).subscribe(val=>{
      console.log(val);
      alert('saved');
    });
  }

}
