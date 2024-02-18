import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';
import { PostService } from 'src/app/Services/post.service';
import { RentService } from 'src/app/Services/rent.service';
import { ReturnService } from 'src/app/Services/return.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
 userDetail:any;
 adminDetail:any;
 len:any;
 lenn:any;
 carImage:any=[];
 date:any=[];
 isadmin=this.authService.admin;
 User=this.authService.user;

  constructor(
    private postService:PostService,
    private rentService:RentService,
    private authService:AuthService,
    private returnService:ReturnService,
    private router:Router
    ){}

  ngOnInit(): void {
    if(this.authService.user>0)
    {
      //requesting all cars present in db that are booked by a particular user
      this.getCarUserDetail();
    }
    else{
      // requesting all cars present in db that are booked
      this.getCarAdminDetail();
    }
   
   
  }

  getCarUserDetail(){
    this.rentService.getUserById(this.authService.user).subscribe({
      next:(response)=>{
      this.len=response.length;
      this.userDetail=response;
      // console.log("userDetail form rental",this.userDetail)
      this.getCarImage(this.len,this.userDetail);
      }
    })
  }

  getCarAdminDetail(){
    this.rentService.getAllRental().subscribe({
      next:(response)=>{
      this.lenn=response.length;
      this.adminDetail=response;
      this.getCarImage(this.lenn,this.adminDetail);
      }
    })
  }

  getCarImage(size:number,detail:any){
    
    for(let i=0;i<size;i++){
      this.getCarImageFromDb(
        detail[i].carId,
        detail[i].rentDate,
        detail[i].returnDate,
        detail[i].isReturn,
        detail[i].id,
        detail[i].coustomerId
        );
    }
  }


  getCarImageFromDb(carId:number,value1:Date,value2:any,status:any,id:number,userId:number){
    const d1=formatDate(value1,'yyyy-MM-dd','en-US');
    const d2=formatDate(value2,'yyyy-MM-dd','en-US');
    
    this.postService.getOnePost(carId).subscribe({
      next:(response)=>{
        this.carImage.push([response.carImage,response.title,d1,d2,carId,status,id,userId])
      }
    })
  }
  
  deleteCarFromRent(id:number){    
    this.rentService.deleteRent(id).subscribe({
      next:(response)=>{
        // to delete car from both table
        // this.returnService.DeleteCar(Id).subscribe({next:(response)=>{}});
        this.router.navigate([''])
      }
    })
  }

  // passing object to return component to toggle value of button
  passReturnReqObj(value:any){
    this.returnService.getObj(value)
  }
}
