import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'app/data.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {

data: any;
user: any;
navigation: any;

constructor(
  private _activatedRoute: ActivatedRoute,
  private _router: Router,
  private _dataService: DataService
) { }

  ngOnInit(): void {

    this._activatedRoute.data.subscribe(({ 
      data, menudata, userdata })=> { 
        this.data=data;
        this.user=userdata;
        this.navigation=menudata
        console.log(this.data)
    }) 

  }

  postForm() {
    this._dataService.postForm("post-edit-form", this.data).subscribe((data:any)=>{
      if (data.error_code=="0") {
        this._router.navigate(['/list-template'])
      } else {     
//            this.error=data.error_message
      }
    });
  }
  

}
