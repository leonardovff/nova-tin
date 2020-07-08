import { Component, OnInit, ViewChild } from '@angular/core';
import { Car } from '@testetinnova/api-interfaces';
import { HttpClient } from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import { finalize } from 'rxjs/operators';
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
      finalize (() => this.isLoading = false)
    );
  }
  captureInfos(){
    this.http.get<Car>('/api/cars')
    .pipe(
      finalize (() => this.isLoading = false)
    );
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
