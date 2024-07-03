import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { HotelsService } from '../services/hotels.service';
import { hotel } from '../models/hotels';
import { jwtDecode } from 'jwt-decode';
import { Store } from '@ngrx/store';
import { Toggle } from '../state/actions/dummy.action';
import { appState } from '../state';
import { dummyParagraphSelector } from '../state/selectors/dummy.selector';

@Component({
  selector: 'app-hotels',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.css'
})
export class HotelsComponent implements OnInit{
 
 constructor(private hotelservice:HotelsService, private store:Store<appState>){
  this.store.subscribe(state=>{
    console.log(state)
  })
 }

 Hotels:hotel[]=[]
 email:string=''
 username:string=''

  ngOnInit():void{
    const token= localStorage.getItem('token') as string
    if (token){
      const decode:any= jwtDecode(token)
      this.email=decode.Email
      this.username=decode.UserName
      console.log(this.email)
      
    }
    
    this.hotelservice.getHotels().subscribe(res=>{
      this.Hotels=res
    })
  }

  showParagraph=this.store.select(dummyParagraphSelector)
  onChange(){
    //this.showParagraph=!this.showParagraph
    this.store.dispatch(Toggle())
  }

  count$= this.store.select(state=>state.counter.count)
  onIncrement(){
    this.store.dispatch({type:'Increment'})
}

onDecrement(){
  this.store.dispatch({type:'Decrement'})
}

onReset(){
  this.store.dispatch({type:'Reset'})
}


} 

 // onAddHotel(){
  //   if (this.addHotelForm.valid){
  //     console.log("form valid")
  //     this.addHotelForm.reset
  //   }
  // }
// this.addHotelForm=new FormGroup({
    //   addhotelsdiv: new FormGroup({

    //     hotelName: new FormControl(null, [Validators.required]),
    //     hotelImage: new FormControl(null, [Validators.required]),
    //     hotelLocation: new FormControl(null, Validators.required),
    //     hotelDescription: new FormControl(null, Validators.required)
    //   })
    // })
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