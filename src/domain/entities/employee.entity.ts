export class Employee {
  constructor(
    public readonly id: string,
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly email: string,
    public readonly position: string,
    public readonly department: string,
    public readonly hireDate: Date,
    public readonly salary?: number,
  ) {}

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  static create(
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    position: string,
    department: string,
    hireDate: Date,
    salary?: number,
  ): Employee {
    return new Employee(id, firstName, lastName, email, position, department, hireDate, salary);
  }
}
