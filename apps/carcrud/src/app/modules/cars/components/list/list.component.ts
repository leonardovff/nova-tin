import { Component, OnInit } from '@angular/core';
import { Car } from '@testetinnova/api-interfaces';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'testetinnova-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  hello$ = this.http.get<Car>('/api/cars');
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

}
