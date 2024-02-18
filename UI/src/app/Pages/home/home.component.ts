import { Component, OnInit , EventEmitter, Output, Input} from '@angular/core';
import { PostService } from '../../Services/post.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
  x:string='';
  searchString:string='';
  isSearch:boolean=false;
  ngOnInit(): void {

  }
  constructor(private postService:PostService){}
  search(){
    this.isSearch=false;

    if(!this.searchString){
     
      this.isSearch=false;
      console.log("if from search",this.searchString,this.isSearch)
    }
    else{this.x=this.searchString
      this.isSearch=true
      console.log("else from search",this.searchString,this.isSearch)
    }
    
  }


  // @Input()
  // searchTextChanged: EventEmitter<string>=new EventEmitter<string>();

  // onSearchTextChanged(){
  //   this.searchTextChanged.emit(this.searchString);
   
  // }

}
