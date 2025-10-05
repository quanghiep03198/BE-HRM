import { Inject, Injectable } from '@nestjs/common';
import { Employee } from '@domain/entities/employee.entity';
import {
  EMPLOYEE_REPOSITORY,
  IEmployeeRepository,
} from '@domain/repositories/employee.repository.interface';
import { CreateEmployeeDto } from '../dtos/employee.dto';
import { randomUUID } from 'crypto';

@Injectable()
export class CreateEmployeeUseCase {
  constructor(
    @Inject(EMPLOYEE_REPOSITORY)
    private readonly employeeRepository: IEmployeeRepository,
  ) {}

  async execute(dto: CreateEmployeeDto): Promise<Employee> {
    const employee = Employee.create(
      randomUUID(),
      dto.firstName,
      dto.lastName,
      dto.email,
      dto.position,
      dto.department,
      dto.hireDate instanceof Date ? dto.hireDate : new Date(dto.hireDate),
      dto.salary,
    );
    return this.employeeRepository.create(employee);
  }
}
