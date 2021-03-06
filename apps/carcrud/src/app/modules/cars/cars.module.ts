import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';


import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';
import { LoadFeedbackComponent } from './components/load-feedback/load-feedback.component';


const routes: Routes = [
  {
    path: '',
    component: ListComponent,
  },
  {
    path: 'add',
    component: FormComponent,
  },
  {
    path: ':id',
    component: FormComponent,
  }
];

@NgModule({
  declarations: [ListComponent, FormComponent, LoadFeedbackComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatListModule, MatButtonModule, MatIconModule,
    MatFormFieldModule, MatSelectModule, MatInputModule,
    MatCheckboxModule, MatSnackBarModule, MatProgressSpinnerModule,
    MatDialogModule,MatCardModule,
    RouterModule.forChild(routes),
  ]
})
export class CarsModule { }
