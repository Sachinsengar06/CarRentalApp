import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/Services/post.service';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-admin-control',
  templateUrl: './admin-control.component.html',
  styleUrls: ['./admin-control.component.css']
})
export class AdminControlComponent implements OnInit{
 

constructor(private postService:PostService,
  private router:Router
  ){}

posts:Post[]=[];

 ngOnInit(): void {
   
  this.postService.getAllPost().subscribe({
    next:(posts)=>
    {
      this.posts=posts;
    }
  });
 }

deleteCar(id:number){
  this.postService.DeleteCar(id)
  .subscribe({
    next:(response)=>{
      this.router.navigate(['']);
    }
  });
}

}
