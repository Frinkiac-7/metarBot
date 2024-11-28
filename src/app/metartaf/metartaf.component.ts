import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

import { Metar } from './../interfaces/metardata';
import { AvwxService } from './../services/avwx.service';
@Component({
  selector: 'app-metartaf',
  templateUrl: './metartaf.component.html',
  styleUrls: ['./metartaf.component.css']
})
export class MetartafComponent implements OnInit {

  constructor(private avwx: AvwxService) { }

	apiQuery: any
	weatherData: any 
	
	metarForm = new UntypedFormGroup ({
		stationId: new UntypedFormControl('')
	})

	getReport(report: string, station: string) {
		// TODO: Alert is a temp solution which will be replaced with Toastr
		if (!station) {
			alert('Please enter an IATA or ICAO airport code.')
		} else {
			this.apiQuery = this.avwx.getReport(report, station).subscribe(response => {
				this.weatherData = response
				const date = new Date(this.weatherData.time.dt)
				this.weatherData.time.local = date.toString()
				localStorage.setItem('metar', JSON.stringify(this.weatherData))
			})
		}
	}

  ngOnInit(): void {
		this.weatherData = localStorage.getItem('metar')
		this.weatherData = JSON.parse(this.weatherData)
	}

}
