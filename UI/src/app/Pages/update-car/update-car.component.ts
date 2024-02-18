import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/Services/post.service';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.css']
})
export class UpdateCarComponent implements OnInit{
  id:any;
  carDetail:Post={
    id: 0,
    color: '',
    model: '',
    brand: '',
    carImage: '',
    title: '',
    price: 0,
    description: ''
  }

  constructor(
    private activatedRoute:ActivatedRoute ,
    private postService:PostService,
    private router:Router
    ){}

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id'];
     
    if(this.id){

    }
    this.postService.getOnePost(this.id)
    .subscribe({
   next:(response)=>
   {
    this.carDetail=response;
   }
  });
  }
  

 updateCar(){
  console.log("checking Id for carDetail",this.carDetail)
  this.postService.updateCar(this.id,this.carDetail).subscribe({
    next:(Post)=>{
      this.router.navigate(['']);
    }
  })
 }

  

}
