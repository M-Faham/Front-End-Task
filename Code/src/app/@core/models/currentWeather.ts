
export interface CurrentWeather {
    request: Request[];
    current_condition: CurrentCondition[];
    weather: WeatherElement[];
    ClimateAverages: ClimateAverage[];
}

export interface ClimateAverage {
    month: Month[];
}

export interface Month {
    index: string;
    name: string;
    avgMinTemp: string;
    avgMinTemp_F: string;
    absMaxTemp: string;
    absMaxTemp_F: string;
    avgDailyRainfall: string;
}

export interface CurrentCondition {
    observation_time: string;
    temp_C: string;
    temp_F: string;
    weatherCode: string;
    weatherIconUrl: WeatherDescElement[];
    weatherDesc: WeatherDescElement[];
    windspeedMiles: string;
    windspeedKmph: string;
    winddirDegree: string;
    winddir16Point: string;
    precipMM: string;
    precipInches: string;
    humidity: string;
    visibility: string;
    visibilityMiles: string;
    pressure: string;
    pressureInches: string;
    cloudcover: string;
    FeelsLikeC: string;
    FeelsLikeF: string;
    uvIndex: number;
}

export interface WeatherDescElement {
    value: string;
}

export interface Request {
    type: string;
    query: string;
}

export interface WeatherElement {
    date: string;
    astronomy: Astronomy[];
    maxtempC: string;
    maxtempF: string;
    mintempC: string;
    mintempF: string;
    avgtempC: string;
    avgtempF: string;
    totalSnow_cm: string;
    sunHour: string;
    uvIndex: string;
    hourly: Hourly[];
}

export interface Astronomy {
    sunrise: string;
    sunset: string;
    moonrise: string;
    moonset: string;
    moon_phase: string;
    moon_illumination: string;
}

export interface Hourly {
    time: string;
    tempC: string;
    tempF: string;
    windspeedMiles: string;
    windspeedKmph: string;
    winddirDegree: string;
    winddir16Point: string;
    weatherCode: string;
    weatherIconUrl: WeatherDescElement[];
    weatherDesc: WeatherDescElement[];
    precipMM: string;
    precipInches: string;
    humidity: string;
    visibility: string;
    visibilityMiles: string;
    pressure: string;
    pressureInches: string;
    cloudcover: string;
    HeatIndexC: string;
    HeatIndexF: string;
    DewPointC: string;
    DewPointF: string;
    WindChillC: string;
    WindChillF: string;
    WindGustMiles: string;
    WindGustKmph: string;
    FeelsLikeC: string;
    FeelsLikeF: string;
    chanceofrain: string;
    chanceofremdry: string;
    chanceofwindy: string;
    chanceofovercast: string;
    chanceofsunshine: string;
    chanceoffrost: string;
    chanceofhightemp: string;
    chanceoffog: string;
    chanceofsnow: string;
    chanceofthunder: string;
    uvIndex: string;
}
