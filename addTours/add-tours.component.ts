import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AddtoursService } from '../services/addtours.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-tours',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-tours.component.html',
  styleUrl: './add-tours.component.css'
})
export class AddToursComponent implements OnInit{

  addTourForm!:FormGroup
  constructor( private addtoursservice:AddtoursService){}

  ngOnInit():void{
  this.addTourForm=new FormGroup({
    

      TourName: new FormControl(null, [Validators.required]),
      TourPrice: new FormControl(null, [Validators.required]),
      TourDescription: new FormControl(null, Validators.required)
   
  })
}
onAddTour() {
  const hotelData = this.addTourForm.value;
  this.addtoursservice.postTour(hotelData).subscribe(res => {
    console.log(res);
  }, error => {
    console.error('Error adding tour:', error);
  });
}
}

