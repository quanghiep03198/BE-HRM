import { Employee } from '../entities/employee.entity';

export interface IEmployeeRepository {
  findAll(): Promise<Employee[]>;
  findById(id: string): Promise<Employee | null>;
  create(employee: Employee): Promise<Employee>;
  update(id: string, employee: Partial<Employee>): Promise<Employee>;
  delete(id: string): Promise<void>;
}

export const EMPLOYEE_REPOSITORY = Symbol('EMPLOYEE_REPOSITORY');
