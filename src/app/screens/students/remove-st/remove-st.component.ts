import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-remove-st',
  templateUrl: './remove-st.component.html',
  styleUrls: ['./remove-st.component.css']
})
export class RemoveStComponent implements OnInit {

  formData = {
    id: '',
  }

  constructor(private mService: CommonService) { }

  ngOnInit(): void {
  }

  deletest() {
    this.mService.deleteStudent(this.formData.id).subscribe(val=>{
      console.log(val);
      alert('deleted');
    });
  }

}
