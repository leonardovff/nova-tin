import { Injectable } from '@nestjs/common';
import { Car } from '@testetinnova/api-interfaces';

@Injectable()
export class CarsService {
  private readonly cars: Car[] = [];
  private count = 0;

  findAll(): Car[] {
    return this.cars;
  }

  findById(id: number): Car {
    return this.cars.find(car => car.id == id);
  }

  create(car: Car) {
    this.count++;
    car.id = this.count;
    this.cars.push(car);
  }

  delete(id: number){
    const index = this.cars.map(car => car.id).indexOf(id);
    if(index == -1){
      false;
    }
    this.cars.splice(index, 1);
  }

  update(id: number, car: Car) {
    const index = this.cars.map(car => car.id).indexOf(id);
    const current = this.cars[index];

    this.cars[index] = {
      ...current,
      ...car
    }
  }
}
