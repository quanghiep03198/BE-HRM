# BE-HRM

Backend NestJS application with Domain-Driven Design (DDD) architecture and tRPC integration for Human Resource Management (HRM) system.

## 🏗️ Architecture

This project follows **Domain-Driven Design (DDD)** principles with a clean architecture approach:

```
src/
├── domain/              # Business logic and rules
│   ├── entities/       # Domain entities
│   ├── repositories/   # Repository interfaces
│   └── value-objects/  # Value objects
├── application/        # Application business rules
│   ├── use-cases/     # Use cases (application services)
│   └── dtos/          # Data transfer objects
├── infrastructure/     # External concerns
│   ├── persistence/   # Database implementations
│   └── trpc/         # tRPC configuration
└── presentation/       # Controllers and routes
    └── controllers/   # HTTP controllers
```

## 🚀 Features

- **NestJS Framework** - Progressive Node.js framework
- **Domain-Driven Design** - Clean architecture with DDD principles
- **tRPC Integration** - End-to-end typesafe APIs
- **TypeScript** - Full type safety
- **Dependency Injection** - Loose coupling and testability
- **In-Memory Repository** - Ready for database integration
- **Validation** - Zod schema validation

## 📦 Installation

```bash
npm install
```

## 🏃 Running the Application

### Development Mode
```bash
npm run start:dev
```

### Production Mode
```bash
npm run build
npm run start:prod
```

The application will be available at:
- API: `http://localhost:3000`
- tRPC endpoint: `http://localhost:3000/trpc`

## 🧪 Testing

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Test coverage
npm run test:cov
```

## 📝 API Endpoints (tRPC)

The application exposes the following tRPC procedures:

### Employee Module

- `employee.getAll` - Get all employees (query)
- `employee.getById` - Get employee by ID (query)
- `employee.create` - Create new employee (mutation)
- `employee.update` - Update employee (mutation)
- `employee.delete` - Delete employee (mutation)

### Example Usage

```typescript
// Client-side example
const employees = await trpc.employee.getAll.query();

const newEmployee = await trpc.employee.create.mutate({
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  position: 'Software Engineer',
  department: 'Engineering',
  hireDate: new Date('2024-01-01'),
  salary: 100000,
});
```

## 🔧 Configuration

Copy `.env.example` to `.env` and configure your environment variables:

```bash
cp .env.example .env
```

## 🏗️ Project Structure Details

### Domain Layer
- **Entities**: Core business objects with identity
- **Repositories**: Interfaces for data access
- **Value Objects**: Immutable objects without identity

### Application Layer
- **Use Cases**: Business logic orchestration
- **DTOs**: Data transfer objects with validation schemas

### Infrastructure Layer
- **Persistence**: Database implementations
- **tRPC**: API configuration and routing

### Presentation Layer
- **Controllers**: HTTP request handlers

## 🔌 Extending the Application

### Adding a New Domain Entity

1. Create entity in `src/domain/entities/`
2. Define repository interface in `src/domain/repositories/`
3. Create DTOs in `src/application/dtos/`
4. Implement use cases in `src/application/use-cases/`
5. Create repository implementation in `src/infrastructure/persistence/`
6. Add tRPC routes in `src/infrastructure/trpc/trpc.router.ts`
7. Register providers in `src/app.module.ts`

### Database Integration

Replace the `InMemoryEmployeeRepository` with your preferred database implementation:

```typescript
// Example with TypeORM
@Injectable()
export class TypeOrmEmployeeRepository implements IEmployeeRepository {
  constructor(
    @InjectRepository(EmployeeEntity)
    private repository: Repository<EmployeeEntity>,
  ) {}
  
  // Implement interface methods
}
```

## 📚 Technologies

- **NestJS** - ^10.0.0
- **tRPC** - ^10.45.0
- **TypeScript** - ^5.1.3
- **Zod** - ^3.22.4
- **RxJS** - ^7.8.1

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.