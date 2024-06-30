import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tour } from '../models/tours';

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
  return this.http.post<{ message: string }>(this.baseURL, tourData);
}

}
