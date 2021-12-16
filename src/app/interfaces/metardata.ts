export interface Metar {
	altimeter:								GenericRSV;
	clouds:										Cloud[];
	density_altitude:					number;
	dewpoint:									GenericRSV;
	flight_rules:							string;
	meta:											Meta;
	other:										any[];
	pressure_altitude:				number;
	raw:											string;
	relative_humidity:				number;
	remarks:									string;
	remarks_info:							RemarksInfo;
	runway_visibility:				any[];
	sanitized:								string;
	station:									string;
	temperature:							GenericRSV;
	time:											Time;
	units:										Units;
	visibility:								GenericRSV;
	wind_direction:						GenericRSV;
	wind_gust:								GenericRSV;
	wind_speed:								GenericRSV;
	wind_variable_direction:	any[];
	wx_codes:									GenericRV[];
}


export interface Cloud {
	altitude:									number;
	direction:								GenericRSV;
	modifier:									GenericRSV;
	repr:											string;
	type:											string;
}	

// The following response properties have the same keys:  wx_codes and remarks_info.codes.  This abstraction will be used for simplicity
export interface GenericRV {
	repr:											string;
	value:										string;
}

// The following response properties have the same keys:  Altimeter, Dewpoint, Temperature, Visibility, Wind_direction, and Wind_speed.  This abstraction will be used for simplicity
export interface GenericRSV {
	repr:											string;
	spoken:										string;
	value:										number;
}		

export interface Meta {
	stations_updated:					Date;
	timestamp:								Date;
}		

export interface PressureTendency {
	change:										number;
	repr:											string;
	tendency:									string;
}

export interface RemarksInfo {
	codes:										GenericRV[];
	dewpoint_decimal:					GenericRSV;
	maximum_temperature_6:		GenericRSV;
	maximum_temperature_24:		GenericRSV;
	minimum_temperature_6:		GenericRSV;
	minimum_temperature_24:		GenericRSV;
	precip_24_hours:					GenericRSV;
	precip_36_hours:					GenericRSV;
	precip_hourly:						GenericRSV;
	pressure_tendency:				PressureTendency;
	sea_level_pressure:				GenericRSV;
	snow_depth:								GenericRSV;
	sunshine_minutes:					GenericRSV;
	temperature_decimal:			GenericRSV;
}		

export interface Time {
	dt:												Date;
	repr:											string;
}

export interface Units {
	accumulation:							string;
	altimeter:								string;
	altitude:									string;
	temperature:							string;
	visibility:								string;
	wind_speed:								string;
}	

