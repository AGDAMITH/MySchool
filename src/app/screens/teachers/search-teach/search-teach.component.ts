import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-search-teach',
  templateUrl: './search-teach.component.html',
  styleUrls: ['./search-teach.component.css']
})
export class SearchTeachComponent implements OnInit {
  desc;

  constructor(private mService: CommonService) { }

  ngOnInit(): void {
    this.mService.findAllTeach()
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
