import { Country } from './../@core/models/country';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HelperService } from './../@core/utils/helper.service';
import { WeatherService } from './weather.service';
import { WeatherComponent } from './weather.component';
import { of } from 'rxjs';
describe('WeatherComponent', () => {
  let weatherComponent: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;
  let mockWeatherService;

  beforeEach(() => {
    const helperServiceStub = () => ({ changeTitle: string => ({}) });
    const weatherServiceStub = () => ({
      getCurrentCountry: () => ({ subscribe: () => ({}) }),
      getCurrentWeather: (country, days) => ({ subscribe: () => ({}) })
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [WeatherComponent],
      providers: [
        { provide: HelperService, useFactory: helperServiceStub },
        { provide: WeatherService, useFactory: weatherServiceStub }
      ]
    });
    fixture = TestBed.createComponent(WeatherComponent);
    weatherComponent = fixture.componentInstance;
    mockWeatherService = jasmine.createSpyObj(['getCurrentWeather', 'getCurrentCountry']);
  });


  it('can load instance', () => {
    expect(weatherComponent).toBeTruthy();
  });
  it('cities defaults to: []', () => {
    expect(weatherComponent.cities).toEqual([]);
  });


  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(weatherComponent, 'setSystemData').and.callThrough();
      spyOn(weatherComponent, 'getTime').and.callThrough();
      spyOn(weatherComponent, 'getCountryCode').and.callThrough();
      weatherComponent.ngOnInit();
      expect(weatherComponent.setSystemData).toHaveBeenCalled();
      expect(weatherComponent.getTime).toHaveBeenCalled();
      expect(weatherComponent.getCountryCode).toHaveBeenCalled();
    });
  });

  describe('setSystemData', () => {
    it('makes expected calls', () => {
      const helperServiceStub: HelperService = fixture.debugElement.injector.get(
        HelperService
      );
      spyOn(helperServiceStub, 'changeTitle').and.callThrough();
      weatherComponent.setSystemData();
      expect(helperServiceStub.changeTitle).toHaveBeenCalled();
    });
  });

  // describe('getWeather', () => {
  //   it('makes expected calls', () => {
  //     const weatherServiceStub: WeatherService = fixture.debugElement.injector.get(
  //       WeatherService
  //     );
  //     spyOn(weatherServiceStub, 'getCurrentWeather').and.callThrough();
  //     weatherComponent.getWeather();
  //     expect(weatherServiceStub.getCurrentWeather).toHaveBeenCalled();
  //   });
  // });


});
