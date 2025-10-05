import { Injectable, NotFoundException } from '@nestjs/common';
import { Employee } from '@domain/entities/employee.entity';
import { IEmployeeRepository } from '@domain/repositories/employee.repository.interface';

@Injectable()
export class InMemoryEmployeeRepository implements IEmployeeRepository {
  private employees: Map<string, Employee> = new Map();

  async findAll(): Promise<Employee[]> {
    return Array.from(this.employees.values());
  }

  async findById(id: string): Promise<Employee | null> {
    return this.employees.get(id) || null;
  }

  async create(employee: Employee): Promise<Employee> {
    this.employees.set(employee.id, employee);
    return employee;
  }

  async update(id: string, updates: Partial<Employee>): Promise<Employee> {
    const employee = await this.findById(id);
    if (!employee) {
      throw new NotFoundException(`Employee with id ${id} not found`);
    }

    const updatedEmployee = new Employee(
      id,
      updates.firstName ?? employee.firstName,
      updates.lastName ?? employee.lastName,
      updates.email ?? employee.email,
      updates.position ?? employee.position,
      updates.department ?? employee.department,
      updates.hireDate ?? employee.hireDate,
      updates.salary ?? employee.salary,
    );

    this.employees.set(id, updatedEmployee);
    return updatedEmployee;
  }

  async delete(id: string): Promise<void> {
    const exists = this.employees.has(id);
    if (!exists) {
      throw new NotFoundException(`Employee with id ${id} not found`);
    }
    this.employees.delete(id);
  }
}
