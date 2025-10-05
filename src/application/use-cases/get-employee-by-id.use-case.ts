import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Employee } from '@domain/entities/employee.entity';
import {
  EMPLOYEE_REPOSITORY,
  IEmployeeRepository,
} from '@domain/repositories/employee.repository.interface';

@Injectable()
export class GetEmployeeByIdUseCase {
  constructor(
    @Inject(EMPLOYEE_REPOSITORY)
    private readonly employeeRepository: IEmployeeRepository,
  ) {}

  async execute(id: string): Promise<Employee> {
    const employee = await this.employeeRepository.findById(id);
    if (!employee) {
      throw new NotFoundException(`Employee with id ${id} not found`);
    }
    return employee;
  }
}
