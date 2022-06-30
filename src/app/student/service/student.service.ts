import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Student} from '../model/student';
import {Point} from '../model/point';
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Student[]> {
    return this.http.get<Student[]>(`${API_URL}/students/list`);
  }
  findById(id): Observable<Point[]> {
    return this.http.get<Point[]>(`${API_URL}/students/findById/${id}`);
  }
}
