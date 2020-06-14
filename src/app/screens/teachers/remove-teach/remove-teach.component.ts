import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-remove-teach',
  templateUrl: './remove-teach.component.html',
  styleUrls: ['./remove-teach.component.css']
})
export class RemoveTeachComponent implements OnInit {

  formData = {
    id: ''
  }

  constructor(private mService: CommonService) { }

  ngOnInit(): void {
  }

  removeT() {
    this.mService.deleteTeacher(this.formData.id).subscribe(val=>{
      console.log(val);
      alert('deleted');
    });
  }

}
