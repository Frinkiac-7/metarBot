export interface Station {
	city:         string;
	country:      string;
	elevation_ft: number;
	elevation_m:  number;
	// 'error' key is not native to API response.  Added to simplify error handling in the UI. Using type 'any' as API does not return consistent error object structure.
	error: 				any;
	iata:         string;
	icao:         string;
	latitude:     number;
	longitude:    number;
	name:         string;
	note:         null | string;
	reporting:    boolean;
	runways:      Runway[];
	state:        string;
	type:         string;
	website:      null | string;
	wiki:         string;
}

export interface Runway {
	length_ft: number;
	width_ft:  number;
	surface:   string;
	lights:    boolean;
	ident1:    string;
	ident2:    string;
	bearing1:  number;
	bearing2:  number;
}
