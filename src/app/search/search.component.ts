import { Component, OnInit } from '@angular/core';
import{Users} from '../users';
import {HTTPService} from '../http.service';
// import{Dataservice} from '../http.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  users:any[10];
  constructor(public httpservice:HTTPService) { 
    this.httpservice.getusers().subscribe(users =>{
      this.users = users;
      console.log(users)
    })
   }

  ngOnInit() {
  }

}
