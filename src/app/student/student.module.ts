import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import {StudentListComponent} from './student-list/student-list.component';
import {StudentProfileComponent} from './student-profile/student-profile.component';


@NgModule({
  declarations: [
    StudentListComponent,
    StudentProfileComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
