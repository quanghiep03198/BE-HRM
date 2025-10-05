import { Inject, Injectable } from '@nestjs/common';
import { Employee } from '@domain/entities/employee.entity';
import {
  EMPLOYEE_REPOSITORY,
  IEmployeeRepository,
} from '@domain/repositories/employee.repository.interface';

@Injectable()
export class GetAllEmployeesUseCase {
  constructor(
    @Inject(EMPLOYEE_REPOSITORY)
    private readonly employeeRepository: IEmployeeRepository,
  ) {}

  async execute(): Promise<Employee[]> {
    return this.employeeRepository.findAll();
  }
}
