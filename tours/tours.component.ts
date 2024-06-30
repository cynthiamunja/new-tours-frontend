import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AsyncValidatorFn,ReactiveFormsModule,   FormControl, FormGroup, Validators } from '@angular/forms';
import { ToursService } from '../services/tours.service';
import { tour } from '../models/tours';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';




@Component({
  selector: 'app-tours',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './tours.component.html',
  styleUrl: './tours.component.css'
})
export class ToursComponent implements OnInit {
  tours:tour[]=[]
  constructor( private ps:ToursService, private route:ActivatedRoute,  private router:Router){ }


  ngOnInit():void{
    this.ps.getTours().subscribe(res=>{
      this.tours=res
    })
  }
}
//currentTours=[
//   {
//     tourID:1,
//     tourName:"santorini",
//     tourLocation:"Greece",
//     tourImage:"https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=600",
//     tourDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//     tourPrice:20000
//   },
//   {
//     tourID:1,
//     tourName:"santorini",
//     tourLocation:"Greece",
//     tourImage:"https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=600",
//     tourDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//     tourPrice:20000
//   }
// ]

// addTourForm! :FormGroup
  
// ngOnInit():void{
//   this.addTourForm=new FormGroup({
//     addToursdiv: new FormGroup({

//       tourName: new FormControl(null, [Validators.required]),
//       tourImage: new FormControl(null, [Validators.required]),
//       tourLocation: new FormControl(null, Validators.required),
//       tourDescription: new FormControl(null, Validators.required)
//     })
//   })
// }

// onAddTour(){
//   if (this.addTourForm.valid){
//     console.log("form valid")
//     this.addTourForm.reset
//   }
// }