import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

import { AvwxService } from './../services/avwx.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private avwx: AvwxService, private http: HttpClient) { }

	responseBody: any

	async getReport() {
		this.responseBody = this.avwx.getReport('metar', 'KORH').pipe(map(response => {
			console.log('(Dashboard): response from Netlify function', response)
		})).subscribe()
	}

  ngOnInit(): void {
  }

}
