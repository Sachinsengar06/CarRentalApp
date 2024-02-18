import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rent, postRent, putRent } from '../models/rent.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentService {

  baseUrl="https://localhost:7062/api/"

  constructor( private http:HttpClient) {}
  
  getAllDates(carId:number):Observable<Rent[]>{
    return this.http.get<Rent[]>(this.baseUrl+'Rentals/GetByCarId/'+carId)
  }

  postFormDates(reqBody:postRent):Observable<postRent[]>{
    return this.http.post<postRent[]>(this.baseUrl+'Rentals',reqBody)
  }

  getUserById(UserId:number):Observable<Rent[]>{
    return this.http.get<Rent[]>(this.baseUrl+'Rentals/GetByUserId/'+UserId)
  }

  // to show all the cars to admin
  getAllRental():Observable<Rent[]>{
    return this.http.get<Rent[]>(this.baseUrl+'Rentals');
  }

  deleteRent(id:number):Observable<putRent>{
    return this.http.delete<putRent>(this.baseUrl+'Rentals/'+id)
  }
}
