import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'testetinnova-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  brands: Array<String> = ['Agrale', 'Aston Martin', 'Audi', 'Bentley', 'BMW', 'BYD', 'CAOA Chery', 'Changan', 'Chevrolet', 'Chrysler', 'Citroën', 'Dodge', 'Dongfeng', 'Effa', 'Ferrari', 'Fiat', 'Ford', 'Foton', 'Geely', 'Hafei', 'Honda', 'Hyundai', 'Iveco', 'JAC', 'Jaguar', 'Jeep', 'Jinbei', 'Kia', 'Lamborghini', 'Land Rover', 'Lexus', 'Lifan', 'Maserati', 'McLaren', 'Mercedes-AMG', 'Mercedes-Benz', 'Mini', 'Mitsubishi', 'Nissan', 'Peugeot', 'Porsche', 'RAM', 'Rely', 'Renault', 'Rolls-Royce', 'Shineray', 'Smart', 'SsangYong', 'Subaru', 'Suzuki', 'TAC', 'Tesla', 'Toyota', 'Troller', 'Volkswagen', 'Volvo', 'Abarth', 'Acura', 'Alfa Romeo', 'Brilliance', 'Bugatti', 'Buick', 'Cadillac', 'Dacia', 'Daihatsu', 'Datsun', 'DS', 'Genesis', 'Great Wall', 'Haima', 'Hummer', 'Infiniti', 'Koenigsegg', 'Lada', 'Lancia', 'Landwind', 'Lincoln', 'Lotus', 'Mahindra', 'Mazda', 'MG', 'Opel', 'Pagani', 'Pontiac', 'Qoros', 'Saab', 'Seat', 'Spyker', 'Tata', 'Zotye', 'ZX Auto'];
  years: Array<Number> = [
    1990,1991,1992,1993,1994,1995,1996,
    1997,1998,1999,2000,2001,2002,2003,
    2004,2005,2006,2007,2008,2009,2010,
    2011,2012,2013,2014,2015,2016,2017,
    2018,2019,2020
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
