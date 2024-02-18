import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/login/login.component';
import { HomeComponent } from './Pages/home/home.component';
import { DetailComponent } from './Pages/detail/detail.component';
import { HeaderComponent } from './Components/header/header.component';
import { PostComponent } from './Components/post/post.component';
import { PostsComponent } from './Components/posts/posts.component';
import { RentComponent } from './Pages/rent/rent.component';
import { SettingComponent } from './Pages/setting/setting.component';
import { AdminControlComponent } from './Pages/admin-control/admin-control.component';
import { AddCarComponent } from './Pages/add-car/add-car.component';
import { UpdateCarComponent } from './Pages/update-car/update-car.component';
import { AboutComponent } from './Pages/about/about.component';
import { FooterComponent } from './Components/footer/footer.component';
import { RouterLink, RouterModule } from '@angular/router';
import { ReturnRequestComponent } from './Pages/return-request/return-request.component';
import { DisplayRequestComponent } from './Pages/display-request/display-request.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DetailComponent,
    HeaderComponent,
    PostComponent,
    PostsComponent,
    RentComponent,
    SettingComponent,
    AdminControlComponent,
    AddCarComponent,
    UpdateCarComponent,
    AboutComponent,
    FooterComponent,
    ReturnRequestComponent,
    DisplayRequestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
