import { BadRequestException, Injectable } from '@nestjs/common';
import type { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'toyota',
      model: 'Corolla',
    },
    {
      id: uuid(),
      brand: 'honda',
      model: 'Civic',
    },
    {
      id: uuid(),
      brand: 'Jeep',
      model: 'Cherokee',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) {
      throw new BadRequestException(`Car whit id ${id} not found`);
    }

    return car;
  }
}
