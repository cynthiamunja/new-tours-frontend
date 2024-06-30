import { Injectable, OnInit } from '@angular/core';
import { hotel } from '../models/hotels';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelsService implements OnInit{

  constructor(private http:HttpClient) { }

  private readonly baseURL="http://localhost:3000/Hotels/"

  getHotels():Observable<hotel[]>{
    return this.http.get<hotel[]>(this.baseURL)
}


  // private hotels: hotel[] = [
  //   {
  //     hotelId: 1,
  //     hotelName: "santorini",
  //     isDeleted: 1,
  //     hotelImage: "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     hotelDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //     hotelPrice: 20000
  //   },
  //   {
  //     hotelId: 1,
  //     hotelName: "santorini",
  //     isDeleted: 1,
  //     hotelImage: "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     hotelDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //     hotelPrice: 20000
  //   }
  // ]

  addHotelForm!: FormGroup

  ngOnInit(): void {
    this.addHotelForm = new FormGroup({
      addhotelsdiv: new FormGroup({

        hotelName: new FormControl(null, [Validators.required]),
        hotelImage: new FormControl(null, [Validators.required]),
        hotelLocation: new FormControl(null, Validators.required),
        hotelDescription: new FormControl(null, Validators.required)
      })
    })
  }



}
