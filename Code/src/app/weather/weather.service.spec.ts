import { environment } from './../../environments/environment.prod';
import { TestBed } from '@angular/core/testing';
import { ConnectionService } from '../@core/utils/connection.service';
import { WeatherService } from './weather.service';
describe('WeatherService', () => {
  let service: WeatherService;
  beforeEach(() => {
    const connectionServiceStub = () => ({ get: url => ({}) });
    TestBed.configureTestingModule({
      providers: [
        WeatherService,
        { provide: ConnectionService, useFactory: connectionServiceStub }
      ]
    });
    service = TestBed.get(WeatherService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });


  it('weatherApiPrefix defaults to: https://api.worldweatheronline.com/premium/v1', () => {
    expect(service.weatherApiPrefix).toEqual(
      'https://api.worldweatheronline.com/premium/v1'
    );
  });


  describe('getCurrentCountry', () => {
    it('makes expected calls', () => {
      const connectionServiceStub: ConnectionService = TestBed.get(
        ConnectionService
      );
      const url = `http://ip-api.com/json/`;
      spyOn(connectionServiceStub, 'get').and.callThrough();
      service.getCurrentCountry();
      expect(connectionServiceStub.get).toHaveBeenCalledWith(url);
    });
  });

  describe('getCurrentWeather', () => {
    it('makes expected calls', () => {
      const connectionServiceStub: ConnectionService = TestBed.get(
        ConnectionService
      );
      const location = 'loc';
      const days = 5;

      const url =
        `${service.weatherApiPrefix}/weather.ashx?key=${environment.worldweatheronline}&q=${location}&format=json&num_of_days=${days}`;

      spyOn(connectionServiceStub, 'get').and.callThrough();
      service.getCurrentWeather(location, days);
      expect(connectionServiceStub.get).toHaveBeenCalledWith(url);
    });
  });


  describe('getHistorcalWeather', () => {
    it('makes expected calls', () => {
      const connectionServiceStub: ConnectionService = TestBed.get(
        ConnectionService
      );
      const location = 'loc';

      const url = `${service.weatherApiPrefix}/past-weather.ashx?key=${environment.worldweatheronline}&q=${location}&format=json`;

      spyOn(connectionServiceStub, 'get').and.callThrough();
      service.getHistorcalWeather(location);
      expect(connectionServiceStub.get).toHaveBeenCalledWith(url);
    });
  });


});
