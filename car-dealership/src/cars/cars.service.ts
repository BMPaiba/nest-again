import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      name: 'toyota',
      model: 'Corolla',
    },
    {
      id: 2,
      name: 'honda',
      model: 'Civic',
    },
    {
      id: 3,
      name: 'mazda',
      model: '3',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: number) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) {
      throw new BadRequestException(`Car whit id ${id} not found`);
    }

    return car;
  }
}
