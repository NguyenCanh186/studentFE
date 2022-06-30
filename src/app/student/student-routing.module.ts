import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentListComponent} from './student-list/student-list.component';
import {StudentProfileComponent} from './student-profile/student-profile.component';


const routes: Routes = [
  {
    path: 'list',
    component: StudentListComponent
  },
  {
    path: 'findById/:id',
    component: StudentProfileComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
