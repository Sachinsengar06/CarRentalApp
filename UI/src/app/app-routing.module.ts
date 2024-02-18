import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { DetailComponent } from './Pages/detail/detail.component';
import { RentComponent } from './Pages/rent/rent.component';
import { LoginComponent } from './Pages/login/login.component';
import { AdminControlComponent } from './Pages/admin-control/admin-control.component';
import { AddCarComponent } from './Pages/add-car/add-car.component';
import { AboutComponent } from './Pages/about/about.component';
import { UpdateCarComponent } from './Pages/update-car/update-car.component';
import { SettingComponent } from './Pages/setting/setting.component';
import { ReturnRequestComponent } from './Pages/return-request/return-request.component';
import { DisplayRequestComponent } from './Pages/display-request/display-request.component';
import { PostComponent } from './Components/post/post.component';

const routes: Routes = [
  {path:'',component:HomeComponent,pathMatch: 'full'},
  {path:'detail/:id',component:DetailComponent},
  {path:'rent/:Obj',component:RentComponent},
  {path:'login',component:LoginComponent},
  {path:'adminControl',component:AdminControlComponent},
  {path:'addCar',component:AddCarComponent},
  {path:'about',component:AboutComponent},
  {path:'update/:id',component:UpdateCarComponent},
  {path:'setting',component:SettingComponent},
  {path:'return',component:ReturnRequestComponent},
  {path:'display',component:DisplayRequestComponent},
  {path:'post',component:PostComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
