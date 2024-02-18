import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { adminAuth, userAuth } from '../models/auth.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl="https://localhost:7062/api/"
  constructor(private http:HttpClient) { }

  // to get the admin password
  getAdmin():Observable<adminAuth[]>{
    return this.http.get<adminAuth[]>(this.baseUrl+'Admins');
  }


  // to get the user password
  getUser():Observable<userAuth[]>{
    return this.http.get<userAuth[]>(this.baseUrl+'Customers');
  }


  //variable

  admin!: boolean;
  user!:number;
  

  
  // to communicate data between login page and header page using serivce
  setAdmin(value:boolean){
    this.admin=value;
  }
  setUser(value:number){
    this.user=value;
  }

}
