import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
	
	metarForm = new FormGroup ({
		stationId: new FormControl('')
	})

	getReport(report: string, station: string) {
		// TODO: Alert is a temp solution which will be replaced with Toastr
		if (!station) {
			alert('Please enter an IATA or ICAO airport code.')
		} else {
			this.apiQuery = this.avwx.getReport(report, station).subscribe(response => {
				console.log('station:', station)
				console.log('report:', report)
				this.weatherData = response
				console.log('weather:', response)
				const date = new Date(this.weatherData.time.dt)
				this.weatherData.time.local = date.toString()
				// if (response.error) {
				// 	this.metarForm.reset()
				// 	this.weatherData = ''
				// 	alert(`Error\nError Code: ${response.error.status}\nError Message: ${response.error.data.error}\nError Help: ${response.error.data.help}`)
				// } else {
				// 	this.weatherData = response
				// 	// API returns 'size_airport' (e.g. 'large_airport') string value and I want to exclude the '_airport' portion in the output
				// 	this.weatherData.type = this.weatherData.type.replace('_airport', '').toUpperCase()
				// 	if(this.weatherData.reporting) {
				// 		this.weatherData.reporting = 'True'
				// 	} else {
				// 		this.weatherData.reporting = 'False'
				// 	}
				// }
			})
		}
	}

  ngOnInit(): void {
  }

}
