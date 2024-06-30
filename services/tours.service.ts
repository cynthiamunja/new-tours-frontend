import { Injectable } from '@angular/core';
import { tour } from '../models/tours';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToursService {
 private readonly baseURL="http://localhost:3000/Tours"

  constructor(private http: HttpClient) { }

  // private tours:tour[]=[
  //   {
  //     tourId:1,
  //     tourName:"santorini",
  //     tourLocation:"Greece",
  //     tourImage:"https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     tourDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //     tourPrice:20000
  //   },
  //   {
  //     tourId:1,
  //     tourName:"santorini",
  //     tourLocation:"Greece",
  //     tourImage:"https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     tourDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //     tourPrice:20000
  //   }
  // ]
  
// addTour(newTour:tour){
//   this.tours.push(newTour)
// }

getTours():Observable<tour[]>{
  const token =localStorage.getItem('token') as string

  return this.http.get<tour[]>(this.baseURL, {
    headers:new HttpHeaders({
      token:token
    })
  })

  
}

// getOneTour(tourID:number){
// return this.tours.findIndex(x=>x.tourId===tourID)
// }

// deleteTour(id:number){
//   let index=this.tours.findIndex(x=>x.tourId===id)
//   if(index>=0){
//     this.tours.splice(index,1)
//   }
// }

// updateTours(id:number,updatedTour:tour){
//   let index=this.tours.findIndex(x=>x.tourId===id)
//   if (index>=0){
//     this.tours.splice(index,1)
//   }
// }

}
