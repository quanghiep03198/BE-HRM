import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EMPLOYEE_REPOSITORY } from '@domain/repositories/employee.repository.interface';
import { InMemoryEmployeeRepository } from '@infrastructure/persistence/in-memory-employee.repository';
import { GetAllEmployeesUseCase } from '@application/use-cases/get-all-employees.use-case';
import { GetEmployeeByIdUseCase } from '@application/use-cases/get-employee-by-id.use-case';
import { CreateEmployeeUseCase } from '@application/use-cases/create-employee.use-case';
import { UpdateEmployeeUseCase } from '@application/use-cases/update-employee.use-case';
import { DeleteEmployeeUseCase } from '@application/use-cases/delete-employee.use-case';
import { TrpcModule } from '@infrastructure/trpc/trpc.module';
import { TrpcRouter } from '@infrastructure/trpc/trpc.router';
import { TrpcController } from '@presentation/controllers/trpc.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TrpcModule,
  ],
  controllers: [TrpcController],
  providers: [
    {
      provide: EMPLOYEE_REPOSITORY,
      useClass: InMemoryEmployeeRepository,
    },
    GetAllEmployeesUseCase,
    GetEmployeeByIdUseCase,
    CreateEmployeeUseCase,
    UpdateEmployeeUseCase,
    DeleteEmployeeUseCase,
    TrpcRouter,
  ],
})
export class AppModule {}
