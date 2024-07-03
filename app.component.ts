import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { ToursComponent } from './tours/tours.component';
import { AsyncValidatorFn,ReactiveFormsModule } from '@angular/forms';

import { HotelsComponent } from './hotels/hotels.component';
import { RegisterUsersComponent } from './register-users/register-users.component';
//import { HomeComponent } from './home/home.component';
import { AuthService } from './services/auth.service';
import { CommonModule } from '@angular/common';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToursComponent, HotelsComponent,ReactiveFormsModule,RegisterUsersComponent , RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tours_Frontend';

  id!:string
  tour!:any
  email:string=''
  username:string=''

  constructor(private route:ActivatedRoute, public auth:AuthService){}

  ngOnInit():void{
    const token= localStorage.getItem('token') as string
    if (token){
      const decode:any= jwtDecode(token)
      this.email=decode.Email
      this.username=decode.UserName
      console.log(this.email)
      console.log(this.username)
    }
    this.id=this.route.snapshot.params['id']
  }
}
