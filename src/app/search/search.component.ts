import { Component, OnInit } from '@angular/core';
import{Users} from '../users';
import {HTTPService} from '../http.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Repositories } from '../repositories';
// import{Dataservice} from '../http.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  users:any[];
  repositories:any[];

  constructor(public httpservice:HTTPService) { 
    this.httpservice.getusers().subscribe(users =>{
      this.users = users;
      console.log(users);
    })
    this.httpservice.getrepos().subscribe(repositories =>{
      this.repositories = repositories;
      console.log(repositories);
    })
    // onsubmit(
      
    // )
      // this.httpservice.getusers().subscribe(users => {
      //   this.users.unshift(users)
      // });
    }
   

  ngOnInit() {
  }

}
