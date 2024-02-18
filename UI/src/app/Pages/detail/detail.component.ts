import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { PostService } from 'src/app/Services/post.service';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  
  constructor(private router: Router,
    private activatedRoute:ActivatedRoute,
    private postsService: PostService,
    private authService: AuthService
    ) { }

  posts:any;
  id:any;
  admin:any;
  user:any;

  
  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id'];
     //get status of admin and user 
     this.admin=this.authService.admin;
     this.user=this.authService.user;

     
    this.postsService.getOnePost(this.id)
     .subscribe({
      next:(posts)=>
      {
        this.posts=posts;
       
      }
     });
  }

  


  toRentPage(){
    this.router.navigate(["rent",this.posts],{state:(this.posts)});
  }

}
