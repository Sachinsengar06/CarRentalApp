import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RentService } from 'src/app/Services/rent.service';
import { ReturnService } from 'src/app/Services/return.service';

@Component({
  selector: 'app-display-request',
  templateUrl: './display-request.component.html',
  styleUrls: ['./display-request.component.css']
})
export class DisplayRequestComponent implements OnInit {

  detail:any;
  returnTableId:any;

  constructor(
    private returnService:ReturnService,
     private router:Router,
    private rentService:RentService) {}

  ngOnInit(): void {
    this.getAllRequest()
  }


  getAllRequest(){
    this.returnService.getAllRequestInDb().subscribe({
      next:(response)=>{
        this.detail=response;
        
      }
    })
  }

  approve(id:number){

    this.returnService.DeleteCar(id).subscribe({
      next:(response)=>{
        // to delete car from both table
        console.log("value from display" ,this.returnService.returnTableId);
        this.rentService.deleteRent(this.returnService.returnTableId).subscribe({next:(res)=>{}});
        this.router.navigate(['/setting'])
      }
    })
  }
}
