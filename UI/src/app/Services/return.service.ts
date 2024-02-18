import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDamageDetail } from '../models/return.model';
import { putRent } from '../models/rent.model';

@Injectable({
  providedIn: 'root'
})
export class ReturnService {


  Object:any;
  this: any;
  returnTableId:any;
  baseUrl="https://localhost:7062/api/"
  constructor(private http:HttpClient) { }


  getObj(value:any){
    this.Object=value;
  }



  postDamageDetails(postDamage:any):Observable<CarDamageDetail>{
    return this.http.post<CarDamageDetail>(this.baseUrl+'Returns',postDamage);
  }


  updateRent(id:number,updateRentRequest:putRent):Observable<putRent>{
    let url='https://localhost:7062/api/Rentals/'+id;
    return this.http.put<putRent>(url,updateRentRequest);
  }

  DeleteCar(id:number):Observable<CarDamageDetail>{
    return this.http.delete<CarDamageDetail>(this.baseUrl + 'Returns/' + id);
  }

  getAllRequestInDb():Observable<CarDamageDetail>{
    return this.http.get<CarDamageDetail>(this.baseUrl+'Returns')
  }

  // sharing return id to setting page Delete buttion

getReturnTableId(value:number){
    this.returnTableId=value;
    console.log("displayId from returnService",this.returnTableId)

}
}