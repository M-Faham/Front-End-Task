/*
  The service is for lang and title and other reusable functions
*/

import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class HelperService {


  constructor(private titleService: Title, ) { }


  changeTitle(title) {
    this.titleService.setTitle(title);
  }


}
