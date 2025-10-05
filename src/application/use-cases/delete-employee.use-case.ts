import { Inject, Injectable } from '@nestjs/common';
import {
  EMPLOYEE_REPOSITORY,
  IEmployeeRepository,
} from '@domain/repositories/employee.repository.interface';

@Injectable()
export class DeleteEmployeeUseCase {
  constructor(
    @Inject(EMPLOYEE_REPOSITORY)
    private readonly employeeRepository: IEmployeeRepository,
  ) {}

  async execute(id: string): Promise<void> {
    return this.employeeRepository.delete(id);
  }
}
