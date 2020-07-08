import { Injectable } from '@nestjs/common';
import { Car } from '@testetinnova/api-interfaces';

@Injectable()
export class CarsService {
  private readonly cars: Car[] = [{"veiculo":"Audioooo","marca":"Dongfeng","ano":2010,"descricao":"testeee","vendido":true,"created":"2010-05-02 12:12:11","updated":"2010-05-02 12:12:11","id":2},{"veiculo":"Audioooo","marca":"Bentley","ano":2010,"descricao":"teste testee","vendido":true,"created":"2010-05-02 12:12:11","updated":"2010-05-02 12:12:11","id":3},{"veiculo":"Teste 2","marca":"Audi","ano":1991,"descricao":"teste","vendido":true,"id":4},{"veiculo":"asdasd","marca":"Aston Martin","ano":1992,"descricao":"testee","vendido":false,"id":12},{"veiculo":"testeeee","marca":"Audi","ano":1992,"descricao":"testeee","vendido":true,"id":13},{"veiculo":"teste 6","marca":"Agrale","ano":1993,"descricao":"testee 4","vendido":true,"id":14}];
  private count = 0;

  findAll(): Car[] {
    return this.cars;
  }
  find(filters): Car[] {
    return this.cars.filter(car => {
      for (const key in filters) {
        if (filters.hasOwnProperty(key)) {
          const element = filters[key];
          return car[key] == element;
        }
      }
    });
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
