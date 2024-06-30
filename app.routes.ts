import { Routes } from '@angular/router';
import { RegisterUsersComponent } from './register-users/register-users.component';
import { ToursComponent } from './tours/tours.component';

import { LoginComponent } from './login/login.component';
import { AddhotelComponent } from './addhotels/addhotel.component';
import { HotelsComponent } from './hotels/hotels.component';
import { AddToursComponent } from './addTours/add-tours.component';


export const routes: Routes = [
    {path:'register', component:RegisterUsersComponent},
    {path:'login', component:LoginComponent},
    {path:'', component:HotelsComponent},
    {path:'tours', component:ToursComponent},
    {path:'addhotels', component:AddhotelComponent},
    {path:'addTours', component:AddToursComponent},
    {path:'hotels', component:HotelsComponent}
];
