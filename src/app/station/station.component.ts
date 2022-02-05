import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AvwxService } from './../services/avwx.service';
@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.css']
})

export class StationComponent implements OnInit {

  constructor(private avwx: AvwxService) { }

	apiQuery: any
	stationData: any
	name = ''
	
	stationForm = new FormGroup ({
		stationId: new FormControl('')
	})

	stationSearch(id: any) {
		// TODO: Alert is a temp solution which will be replaced with Toastr
		if (!id) {
			alert('Please enter an IATA or ICAO airport code.')
		} else {
			this.apiQuery = this.avwx.stationSearch(id).subscribe(response => {
				if (response.error) {
					this.stationForm.reset()
					this.stationData = ''
					alert(`Error\nError Code: ${response.error.status}\nError Message: ${response.error.data.error}\nError Help: ${response.error.data.help}`)
				} else {
					this.stationData = response
				}
			})
		}
	}

  ngOnInit(): void {
  }

}
