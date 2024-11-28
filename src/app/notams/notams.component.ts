import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';

import { FaaService } from './../services/faa.service';

@Component({
  selector: 'app-notams',
  templateUrl: './notams.component.html',
  styleUrls: ['./notams.component.css']
})
export class NotamsComponent implements OnInit {

  constructor(private notams: FaaService) { }

	notamData: any

	notamForm = new UntypedFormGroup ({
		type: new UntypedFormControl('')
	})

	getNotams(type: string) {
		const data = this.notams.getNotams(type).subscribe(response => {
			this.notamData = response
			localStorage.setItem('notam', JSON.stringify(this.notamData))
		})
	}
	
  ngOnInit(): void {
		this.notamData = localStorage.getItem('notam')
		this.notamData = JSON.parse(this.notamData)
	}

}
