import { Employee } from './employee.entity';

describe('Employee Entity', () => {
  it('should create an employee', () => {
    const employee = Employee.create(
      '1',
      'John',
      'Doe',
      'john.doe@example.com',
      'Software Engineer',
      'Engineering',
      new Date('2024-01-01'),
      100000,
    );

    expect(employee.id).toBe('1');
    expect(employee.firstName).toBe('John');
    expect(employee.lastName).toBe('Doe');
    expect(employee.email).toBe('john.doe@example.com');
    expect(employee.position).toBe('Software Engineer');
    expect(employee.department).toBe('Engineering');
    expect(employee.salary).toBe(100000);
  });

  it('should generate full name correctly', () => {
    const employee = Employee.create(
      '1',
      'John',
      'Doe',
      'john.doe@example.com',
      'Software Engineer',
      'Engineering',
      new Date('2024-01-01'),
    );

    expect(employee.fullName).toBe('John Doe');
  });
});
