import { Injectable } from '@nestjs/common';
import { z } from 'zod';
import { TrpcService } from './trpc.service';
import { GetAllEmployeesUseCase } from '@application/use-cases/get-all-employees.use-case';
import { GetEmployeeByIdUseCase } from '@application/use-cases/get-employee-by-id.use-case';
import { CreateEmployeeUseCase } from '@application/use-cases/create-employee.use-case';
import { UpdateEmployeeUseCase } from '@application/use-cases/update-employee.use-case';
import { DeleteEmployeeUseCase } from '@application/use-cases/delete-employee.use-case';
import { CreateEmployeeSchema, UpdateEmployeeSchema } from '@application/dtos/employee.dto';

@Injectable()
export class TrpcRouter {
  constructor(
    private readonly trpc: TrpcService,
    private readonly getAllEmployeesUseCase: GetAllEmployeesUseCase,
    private readonly getEmployeeByIdUseCase: GetEmployeeByIdUseCase,
    private readonly createEmployeeUseCase: CreateEmployeeUseCase,
    private readonly updateEmployeeUseCase: UpdateEmployeeUseCase,
    private readonly deleteEmployeeUseCase: DeleteEmployeeUseCase,
  ) {}

  appRouter = this.trpc.router({
    employee: this.trpc.router({
      getAll: this.trpc.procedure.query(async () => {
        return this.getAllEmployeesUseCase.execute();
      }),

      getById: this.trpc.procedure.input(z.object({ id: z.string() })).query(async ({ input }) => {
        return this.getEmployeeByIdUseCase.execute(input.id);
      }),

      create: this.trpc.procedure.input(CreateEmployeeSchema).mutation(async ({ input }) => {
        return this.createEmployeeUseCase.execute(input);
      }),

      update: this.trpc.procedure
        .input(z.object({ id: z.string(), data: UpdateEmployeeSchema }))
        .mutation(async ({ input }) => {
          return this.updateEmployeeUseCase.execute(input.id, input.data);
        }),

      delete: this.trpc.procedure
        .input(z.object({ id: z.string() }))
        .mutation(async ({ input }) => {
          await this.deleteEmployeeUseCase.execute(input.id);
          return { success: true };
        }),
    }),
  });
}

export type AppRouter = TrpcRouter['appRouter'];
