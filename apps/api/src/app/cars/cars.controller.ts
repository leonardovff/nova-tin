import { Body, Controller, Get, Param, Post, UseGuards, Put, Patch, Delete, Query } from '@nestjs/common';
import { ParseIntPipe } from './pipes/parse-int.pipe';
import { CarsService } from './cars.service';
import { CreateCarDto } from './create-car.dto';
import { Car } from '@testetinnova/api-interfaces';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  async findAll(): Promise<Car[]> {
    return this.carsService.findAll();
  }
  @Get('find')
  async findAllWithFilters(
    @Query() query
  ): Promise<Car[]> {
    console.log(query)
    return this.carsService.find(query);
  }

  @Get(':id')
  findOne(
    @Param('id', new ParseIntPipe())
    id: number,
  ) {
    return this.carsService.findById(id);
  }

  @Post()
  async create(@Body() CreateCarDto: CreateCarDto) {
    this.carsService.create(CreateCarDto);
  }

  @Patch(':id')
  @Put(':id')
  async update(
    @Body() CreateCarDto: CreateCarDto,
    @Param('id', new ParseIntPipe()) id: number,
  ) {
    this.carsService.update(id, CreateCarDto);
  }


  @Delete(':id')
  async delete(
    @Param('id', new ParseIntPipe()) id: number,
  ) {
    this.carsService.delete(id);
  }
}
