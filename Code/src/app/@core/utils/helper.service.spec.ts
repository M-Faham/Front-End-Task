import { TestBed } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { HelperService } from './helper.service';
describe('HelperService', () => {
  let helperService: HelperService;

  beforeEach(() => {

    const titleStub = () => ({ setTitle: title => ({}) });
    TestBed.configureTestingModule({
      providers: [HelperService, { provide: Title, useFactory: titleStub }]
    });
    helperService = TestBed.get(HelperService);

  });

  it('can load instance', () => {
    expect(helperService).toBeTruthy();
  });

  it('should change title', () => {
    const myTitle = 'new title';


    spyOn(helperService, 'changeTitle').and.returnValue();

    helperService.changeTitle(myTitle);


    expect(helperService.changeTitle).toHaveBeenCalledWith(myTitle);
  });

});
