import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable, Subscription, map } from 'rxjs';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnDestroy, OnInit{

  sub!:Subscription
  loginForm!:FormGroup

  obs= new Observable<number>(observer=>{
   let count =0 
   setInterval(()=>{
      
      observer.next(count)
      if (count===5){
        observer.complete()
      }
      count++

    }, 1000)
  })
  error!: string;
  mesage!:string


  constructor(private authentication:AuthenticationService, private fb:FormBuilder, private router:Router){}

  ngOnDestroy(): void {
      console.log("login component destroyed")
      this.sub.unsubscribe()
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      Email:this.fb.control(null, Validators.required),
      UserPassword:this.fb.control (null, [Validators.required])
    });
      this.sub=this.obs.pipe(
        map(x=>x*10)
      ).subscribe({
        next:(val)=>console.log(val),
        error:err=>console.log(err),
        complete:()=> console.log("completed")
      })
  }

  onLogin(){
    if(this.loginForm.valid){
      this.authentication.login(this.loginForm.value).subscribe(
        res=>{
          localStorage.setItem('token', res.token)
          console.log(res)

           if (res.token){
             this.router.navigate(['tours'])
          }
          
        },
        err=>{

          console.log(err);
          
            this.error=err.error.message 
        }
      )
      console.log(this.loginForm.value)
     
    }
    
  }
}
