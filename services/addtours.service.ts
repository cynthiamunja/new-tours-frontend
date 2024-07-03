import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tour } from '../models/tours';
import {jwtDecode} from 'jwt-decode'

@Injectable({
  providedIn: 'root'
})
export class AddtoursService {

  constructor(private http:HttpClient) { }

  private readonly baseURL="http://localhost:3000/Tours/"

  getTours():Observable<tour[]>{
    return this.http.get<tour[]>(this.baseURL)
}

postTour(tourData: { TourName: string; TourPrice: number; TourDescription: string }): Observable<{ message: string }> {
  const token = localStorage.getItem('token'); 

  if (token) {
    //throw new Error('No token found');
    
  }
  // const headers = new HttpHeaders({
  //   'Content-Type': 'application/json',
  //   'Authorization': `Bearer ${token}`
  // });

  return this.http.post<{ message: string }>(this.baseURL, tourData);
}
// addTour(tourData: any): Observable<any> {
//   const token = localStorage.getItem('token'); // Retrieve the token from localStorage

//   if (!token) {
//     throw new Error('No token found');
//   }

//   const headers = new HttpHeaders({
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer ${token}`
//   });

//   return this.http.post<any>(this.apiUrl, tourData, { headers });
// }
}
