import { Component ,OnInit} from '@angular/core';
import { Post } from 'src/app/models/post.model';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from 'src/app/Services/post.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit{

  AddCarForm:any=new FormGroup({
    title:new  FormControl("",[Validators.required]),
    brand: new FormControl('',[Validators.required]),
    color: new FormControl('',[Validators.required])
  });

  addCarRequest: Post={
    id:0,
    color:'',
    model:'',
    brand:'',
    carImage:'',
    title:'',
    price:0,
    description:''
  }

  constructor(private postService:PostService,
    private router:Router
    ){}

  addCAR(){
   this.postService.postCar(this.addCarRequest).subscribe({
    next:(Post)=>{
      this.router.navigate(['']);
    }
  })
  }
 
  // onSubmit(){
  //   console.log(this.AddCarForm);
  // }
  ngOnInit(): void {
   
  }

}
