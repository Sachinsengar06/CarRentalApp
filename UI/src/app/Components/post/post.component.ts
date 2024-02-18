import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import {Post} from "../../models/post.model";
import { PostService } from '../../Services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit,AfterContentInit
{
  constructor(private postsService:PostService,private route:Router){
 }
  ngAfterContentInit(): void {
   
  }

    posts:Post[]= [];

    @Input() searchText:string='';

    ngOnInit(): void 
    {
      this.posts=[]
      this.gettingPostFromDb(this.searchText)
     
  }



  gettingPostFromDb(value1:string){
  
    this.postsService.getAllPost()
    .subscribe({

     // Implementation of search function

     next:(response)=>
     {
       
       if(value1===''){
        console.log("if",value1)
         this.posts=response;
         
         
       }
       else{
        console.log("else response",response,"value1",value1)
         this.filterRes(response,value1)
       }
       
     }
   });
  }

  filterRes(response:any[], model:string) {
    console.log("filter response",response,"model",model)

    this.posts = response.filter(object =>
      object?.model.toLowerCase().includes(model.toLowerCase())||
      object?.color.toLowerCase().includes(model.toLowerCase())||
      object?.brand.toLowerCase().includes(model.toLowerCase())

      );
     
  }

  // getting value from search bar present in the homepage

  // onSearchTextEntered(searchValue:string){
  //   this.searchText=searchValue;
  //   console.log(this.searchText); 
  // }

}
