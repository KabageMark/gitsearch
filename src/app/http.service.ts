import { Injectable } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import {environment} from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class HTTPService {
  private apiUrl: string = environment.apiurl

  constructor(private http:Http) {
    console.log('service is okay') 
    
  }

  getusers(){
    return this.http.get('https://api.github.com/users/daneden?access_token=6f3e047a5b170c15b2bbd99e08b54af9e3709d33')
         .pipe(map(res => res.json()));
    
  }
}
