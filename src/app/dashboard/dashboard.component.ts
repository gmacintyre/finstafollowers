import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public code: string  = '';
  public access_token: string = '';
  constructor(
  	private route: ActivatedRoute,
	) { 

  } 

  ngOnInit() {
   this.code = this.route.snapshot.queryParamMap.get('code'); 
  }

}
