import { z } from 'zod';

export const CreateEmployeeSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  position: z.string().min(1),
  department: z.string().min(1),
  hireDate: z.date().or(z.string().transform((val) => new Date(val))),
  salary: z.number().positive().optional(),
});

export const UpdateEmployeeSchema = z.object({
  firstName: z.string().min(1).optional(),
  lastName: z.string().min(1).optional(),
  email: z.string().email().optional(),
  position: z.string().min(1).optional(),
  department: z.string().min(1).optional(),
  hireDate: z
    .date()
    .or(z.string().transform((val) => new Date(val)))
    .optional(),
  salary: z.number().positive().optional(),
});

export type CreateEmployeeDto = z.infer<typeof CreateEmployeeSchema>;
export type UpdateEmployeeDto = z.infer<typeof UpdateEmployeeSchema>;
