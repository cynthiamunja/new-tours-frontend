import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { hotel } from '../models/hotels';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddhotelsService {

  constructor(private http:HttpClient) { }

  private readonly baseURL="http://localhost:3000/Hotels/"

  getHotels():Observable<hotel[]>{
    return this.http.get<hotel[]>(this.baseURL)
}
 token= localStorage.getItem('token')
postHotel(hotelData: { HotelName: string; HotelPrice: number; HotelDescription: string }): Observable<{ message: string }> {
  return this.http.post<{ message: string }>(this.baseURL, hotelData);
}



}
