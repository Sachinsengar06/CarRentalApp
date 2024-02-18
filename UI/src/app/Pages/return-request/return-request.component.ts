import { Component, OnInit } from '@angular/core';
import { ReturnService } from 'src/app/Services/return.service';
import { putRent } from 'src/app/models/rent.model';
import { CarDamageDetail, DamageDetails } from 'src/app/models/return.model';

@Component({
  selector: 'app-return-request',
  templateUrl: './return-request.component.html',
  styleUrls: ['./return-request.component.css']
})
export class ReturnRequestComponent implements OnInit {
  
  returnObjFromUser:any;

  damageFormDetails:DamageDetails=
  {
    outDamage: '',
    inDamage: '',
    isWorking: ''
  }
  
  combinedData:CarDamageDetail={
    imgLink: this.returnService.Object[0],
    title: this.returnService.Object[1],
    rentDate: this.returnService.Object[2],
    returnDate: this.returnService.Object[3],
    outDamage: '',
    inDamage: '',
    isWorking: ''
  }

  putDataToDb:putRent={
    id: 0,
    carId: 0,
    coustomerId: 0,
    rentDate:new Date(),
    returnDate: new Date(),
    isReturn: false
  }

  constructor(
    private returnService:ReturnService
  ){}

  ngOnInit(): void {
    this.returnObjFromUser=this.returnService.Object
    
  }

 
  addCombindDataToDb(){
    // making the isReturn true because a car is requested to return
    // console.log("returnObjFromUser",this.returnObjFromUser)
    this.returnObjFromUser[5]=true;

    //passing id 
    this.updateRent(this.returnObjFromUser[6])

    //adding values to combined array
    this.combinedData.outDamage=this.damageFormDetails.outDamage;
    this.combinedData.inDamage=this.damageFormDetails.inDamage;
    this.combinedData.isWorking=this.damageFormDetails.isWorking;
  
    this.returnService.postDamageDetails(this.combinedData).subscribe({
     next:(Post)=>{
      
     }
   })
   }
 

  toggleBtnAndPostData(){
    this.returnObjFromUser[5]=true;
    // console.log(this.returnObjFromUser)
    this.returnService.getObj(this.returnObjFromUser);
  }
 

  // get the object passed from the setting page which contain the data for requested car


  updateRent(id:number){
    this.putDataToDb.id=this.returnObjFromUser[6];
    this.putDataToDb.carId=this.returnObjFromUser[4];
    this.putDataToDb.rentDate=this.returnObjFromUser[2];
    this.putDataToDb.returnDate=this.returnObjFromUser[3];
    this.putDataToDb.isReturn=this.returnObjFromUser[5];
    this.putDataToDb.coustomerId=this.returnObjFromUser[7];

    this.returnService.updateRent(id,this.putDataToDb).subscribe({
      next:(Post)=>{
  
      }
    })
   }

}
