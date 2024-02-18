import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  
  Admin!:boolean;
  user:number=0;
 
  constructor(private authServic:AuthService,private router:Router){}
  ngOnInit(): void {
   this.Admin=this.authServic.admin;
   this.user=this.authServic.user;
  }
  
  setAdminValueIntoService(value:boolean){
    this.authServic.setAdmin(value);
  }

  setUserValueIntoService(value:number){
    this.authServic.setUser(value);
  }
 
}
