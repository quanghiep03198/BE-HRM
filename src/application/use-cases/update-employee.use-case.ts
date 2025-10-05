import { Inject, Injectable } from '@nestjs/common';
import { Employee } from '@domain/entities/employee.entity';
import {
  EMPLOYEE_REPOSITORY,
  IEmployeeRepository,
} from '@domain/repositories/employee.repository.interface';
import { UpdateEmployeeDto } from '../dtos/employee.dto';

@Injectable()
export class UpdateEmployeeUseCase {
  constructor(
    @Inject(EMPLOYEE_REPOSITORY)
    private readonly employeeRepository: IEmployeeRepository,
  ) {}

  async execute(id: string, dto: UpdateEmployeeDto): Promise<Employee> {
    return this.employeeRepository.update(id, dto);
  }
}
