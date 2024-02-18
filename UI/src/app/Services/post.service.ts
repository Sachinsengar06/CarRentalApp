import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  Post } from '../models/post.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  searchString:string='';
  baseUrl="https://localhost:7062/api/"

  constructor(private http:HttpClient) { }

  // fecthing all data of cars for post page from database
  getAllPost():Observable<Post[]>{
    return this.http.get<Post[]>(this.baseUrl+'Car');
  }

  
  getOnePost(id:number):Observable<Post>{
    let url ='https://localhost:7062/api/Car/'+id;
    return this.http.get<Post>(url);
  }

  postCar(addCarRequest:Post):Observable<Post>{
    return this.http.post<Post>(this.baseUrl+'Car',addCarRequest);
  }

  updateCar(id:number,updateCarRequest:Post):Observable<Post>{
    let url='https://localhost:7062/api/Car/'+id;
    return this.http.put<Post>(url,updateCarRequest);
  }

  DeleteCar(id:number):Observable<Post>{
    return this.http.delete<Post>(this.baseUrl + 'Car/' + id);
  }

  setSearchValue(value: string){
  }
}
