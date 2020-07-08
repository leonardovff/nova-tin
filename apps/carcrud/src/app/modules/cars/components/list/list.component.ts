import { Component, OnInit, ViewChild } from '@angular/core';
import { Car } from '@testetinnova/api-interfaces';
import { HttpClient } from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import { finalize, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'testetinnova-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @ViewChild('modalDelete') modalDelete;
  cars;
  idToDelete: number;
  isLoading: boolean = false;
  info;

  constructor(
    private http: HttpClient,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    this.isLoading = true;
    this.cars = this.http.get<Car>('/api/cars')
    .pipe(
      finalize (() => this.isLoading = false),
      map(cars => {
        this.saveInfos(cars);
        return cars
      })
    );
  }
  saveInfos(cars){
    cars = [...cars];
    const info = {
      nao_vendido: cars.filter(car =>
        car.vendido == 0
      ).length,
      decadas: cars.reduce((acc, car) => {
        const year = parseInt(car.ano.toString().substring(0,3));
        if(!acc[year]){
          acc[year] = 0;
        }
        acc[year]++;
        return acc;
      }, {}),
      fabricantes: cars.reduce((acc, car) => {
        if(!acc[car.marca]){
          acc[car.marca] = 0;
        }
        acc[car.marca]++;
        return acc;
      }, {})
    }
    info.fabricantes = Object.keys(info.fabricantes)
      .map((key) => ({
        key,
        value: info.fabricantes[key]
      }))

    info.decadas = Object.keys(info.decadas)
    .map((key) => ({
      key,
      value: info.decadas[key]
    }))

    this.info = info;
    console.log(this.info);
  }
  openModalDelete(id) {
    this.idToDelete = id;
    const dialogRef = this.dialog.open(this.modalDelete, {
      width: '250px'
    });
  }
  confirmDelete(id){
    this.isLoading = true;
    this
      .http
      .delete('/api/cars/' + id)
      .toPromise()
      .then(() => {
        this.isLoading = false;
        this.loadData();
        this._snackBar.open('Carro excluido', null, {
          duration: 2000,
        });
      });
  }

}
