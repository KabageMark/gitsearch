import { Injectable } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HTTPService {

  constructor(private http:Http) { 
    
  }

  getusers(){
    return this.http.get('https://api.github.com/users/daneden?access_token=6f3e047a5b170c15b2bbd99e08b54af9e3709d33')
         .pipe(map(res => res.json()));
    
  }
}
