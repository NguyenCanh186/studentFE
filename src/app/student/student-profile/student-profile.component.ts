import { Component, OnInit } from '@angular/core';
import {Student} from '../model/student';
import {StudentService} from '../service/student.service';
import {Point} from '../model/point';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {
  point: Point[] = [];
  constructor(private studentService: StudentService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const id = paramMap.get('id');
      this.getStudent(id);
    });
  }

  ngOnInit() {
  }

  getStudent(id) {
    this.studentService.findById(id).subscribe((data) => {
      this.point = data;
    }, (error) => {
      console.log(error);
    });
  }

}
