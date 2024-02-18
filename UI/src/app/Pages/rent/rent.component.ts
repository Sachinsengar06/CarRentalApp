import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RentService } from '../../Services/rent.service';
import { formatDate } from '@angular/common';
import { Rent, postRent } from '../../models/rent.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent implements OnInit{

  len:number=0;
  mindate=new Date().getDate();
  postrent:Rent[]=[];
  arrival:any=[];
  departure:any=[];
  isValidDates:boolean=false;
  carId:any;
  img:any;
  lenUsers:any;

  reqBody:postRent={
    id:0,
    carId:this.activatedRoute.snapshot.params['Obj'],
    coustomerId:this.authService.user,
    rentDate:new Date(),
    returnDate:new Date(),
  }
  constructor(
    private rentServices:RentService,
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private authService:AuthService
    ){}
  
  ngOnInit(): void {
    this.carId=this.activatedRoute.snapshot.params['Obj'];
  }

  postDates(){
    this.rentServices.postFormDates(this.reqBody).subscribe({
      next:(response)=>{this.router.navigate(['/setting'])}
    })
    this.isValidDates=false;
  }

  checkDates(){
  this.rentServices.getAllDates(this.carId)
  .subscribe({
   next:(response)=>
   {
    this.len=response.length;
     this.postrent=response;
    //  for(const key in this.postrent){
    //   this.len++;
    // }
    if(this.len>0)
    {
      this.arrival.push(formatDate(this.reqBody.rentDate,'yyyy-MM-dd','en-US'));
      this.departure.push(formatDate(this.reqBody.returnDate,'yyyy-MM-dd','en-US'));

      for(let i=0;i<this.len;i++){
        this.arrival.push(formatDate(this.postrent[i].rentDate,'yyyy-MM-dd','en-US'));
        this.departure.push(formatDate(this.postrent[i].returnDate,'yyyy-MM-dd','en-US'));
      }
      const isPossible =this.isHotelBookingPossible(this.arrival, this.departure)
      if(isPossible){
        
        this.isValidDates=true;
        alert("dates are available");
      }
      else{
        alert("dates are not available");
        console.log("isValidDates",this.isValidDates);
        this.isValidDates=true;
        
      }
      this.arrival.length=0;
      this.departure.length=0;
      this.len=0;
    }
    else{
      alert("Dates are Available!")
      this.isValidDates=true;
    }
    
  }
  });
 
}


isHotelBookingPossible(arrivalTimes: string[], departureTimes: string[]): boolean {
  // Sort the arrival and departure times in ascending order.
  this.arrival.sort((a: string, b: any) => a.localeCompare(b));
  this.departure.sort((a: string, b: any) => a.localeCompare(b));
  console.log(this.arrival);
  console.log(this.departure);

  for(let i = 0; i < this.arrival.length; i++)
    {
        if (i + 1 < this.arrival.length && this.arrival[i + 1] < this.departure[i])
        {
            return false;
        }
    }
    return true;
}
  
 
  
  
//validation


 


}
