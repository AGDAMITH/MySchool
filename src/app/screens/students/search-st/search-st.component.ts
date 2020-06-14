import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-search-st',
  templateUrl: './search-st.component.html',
  styleUrls: ['./search-st.component.css']
})
export class SearchStComponent implements OnInit {
  
  desc;
  name = '';

  constructor(private mService: CommonService) { }

  

  ngOnInit(): void {
    this.mService.findAll()
      .subscribe(
        data => {
          
          this.desc = data.json();
          console.log(this.desc);

        },
        error => {
          console.log(error);
        });
  }

  
}