import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

	getCurrentYear() {
		const date = new Date
		const year = date.getUTCFullYear()
		if (year === 2021) {
			return `${year} Robert Garcia, all rights reserved`
		} else {
			return `2021-${year} Robert Garcia, All rights reserved` 
		}
	}

  ngOnInit(): void {
		this.getCurrentYear()
  }

}
