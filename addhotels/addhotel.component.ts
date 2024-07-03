import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from 'express';

import { AddhotelsService } from '../services/addhotels.service';
import { hotel } from '../models/hotels';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-addhotel',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './addhotel.component.html',
  styleUrl: './addhotel.component.css'
})
export class AddhotelComponent {

  // currentHotels=[
  //   {
  //     hotelID:1,
  //     hotelName:"santorini",
  //     hotelLocation:"Greece",
  //     hotelImage:"https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     hotelDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //     hotelPrice:20000
  //   },
  //   {
  //     hotelID:1,
  //     hotelName:"santorini",
  //     hotelLocation:"Greece",
  //     hotelImage:"https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     hotelDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //     tourPrice:20000
  //   }
  // ]
  addHotelForm! :FormGroup
  email:string=''
  username:string=''

  constructor(private fb:FormBuilder, private addhotelservice:AddhotelsService){}
 Hotels:hotel[]=[]
  
  ngOnInit():void{
    const token= localStorage.getItem('token') as string
    if (token){
      const decode:any= jwtDecode(token)
      this.email=decode.Email
      this.username=decode.UserName
      console.log(this.email)
      
    }

    this.addHotelForm=this.fb.group({
     

        HotelName: new FormControl(null, [Validators.required]),
        HotelPrice: new FormControl(null, Validators.required),
        HotelDescription: new FormControl(null, Validators.required)
     
    })


  }

  onAddHotel() {
    
    const hotelData = this.addHotelForm.value;
    this.addhotelservice.postHotel(hotelData).subscribe(res => {
      console.log(res);
    }, error => {
      console.error('Error adding hotel:', error);
    });
  }
}
