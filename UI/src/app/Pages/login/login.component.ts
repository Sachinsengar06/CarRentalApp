import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { adminAuth, userAuth } from 'src/app/models/auth.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit  {
  
  admin:boolean=false;
  user:number=0;

  //constructor
  constructor(private authServic:AuthService, private router:Router){
  }
 

  adminDetail:adminAuth[]=[];

  userDetail:userAuth[]=[]


  ngOnInit():void{
  //fetching data for admin
    this.authServic.getAdmin().subscribe({
      next:(response)=>{
        this.adminDetail=response;
      }
    })

    //fetching data for user
    this.authServic.getUser().subscribe({
      next:(response)=>{
        this.userDetail=response;
      }
    })
  }



  // validation

    loginForm = new FormGroup({
    email: new  FormControl('',[Validators.required, Validators.email]),
    password: new FormControl("",Validators.required)
  });

  get Email():FormControl{
    return this.loginForm.get('email') as FormControl;
  }
  get PWD():FormControl{
    return this.loginForm.get('password') as FormControl;
  }

  onSubmit(){

// function to check admin or user

   const userEmail=this.loginForm.value.email;
   const pass=this.loginForm.value.password;

   if(userEmail=='Admin@gmail.com' && this.adminDetail[0].password===pass){

      this.admin=true;
      this.authServic.setAdmin(this.admin);
      this.router.navigate(['']);
      
    }

   else if(userEmail=='User1@email.com' || userEmail=='User2@email.com'){
    if(userEmail=='User1@email.com' && this.userDetail[0].password===pass){
      this.user=1
      this.authServic.setUser(this.user);
      this.router.navigate(['']);

    }
    else if(userEmail=='User2@email.com' && this.userDetail[1].password===pass){
      this.user=2
      this.authServic.setUser(this.user);
      this.router.navigate(['']);

    }
    else{
      alert("Wrong Credentials");
    }
   }
   else{
    alert("Wrong Credentials");
   }
  }
 
 
 
}
