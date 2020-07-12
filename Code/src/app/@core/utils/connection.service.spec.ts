import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { ConnectionService } from './connection.service';
describe('ConnectionService', () => {
  let service: ConnectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ConnectionService]
    });
    service = TestBed.get(ConnectionService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
