
export interface HistoricalWeather {
    request: Request[];
    weather: Weather[];
}

export interface Request {
    type: string;
    query: string;
}

export interface Weather {
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
    uvIndex: string;
}

export interface WeatherDescElement {
    value: string;
}
