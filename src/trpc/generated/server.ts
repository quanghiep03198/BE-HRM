import { initTRPC } from "@trpc/server";
import { z } from "zod";

const t = initTRPC.create();
const publicProcedure = t.procedure;

const appRouter = t.router({
  employees: t.router({
    findAll: publicProcedure.output(z.array(z.object({
      // Base fields
      id: z.any(),
      created_at: z.coerce.date().nullable(),
      updated_at: z.coerce.date().nullable(),
      deleted: z.boolean().nullish(),
      deleted_at: z.coerce.date().nullish(),
      created_by: z.string().nullable(),
      updated_by: z.string().nullable(),
      remark: z.string().nullable(),

      // Employee specific fields
      employee_code: z.string(),
      full_name: z.string().nonempty(),
      date_of_birth: z.coerce.date(),
      gender: z.enum(['male', 'female', 'other']),
      identity_number: z.string().regex(/^[0-9]{12}$/),
      identity_date: z.coerce.date(),
      identity_place: z.string(),
      marital_status: z.enum(['single', 'married', 'divorced', 'widowed']),
      nationality: z.string().nullable(),

      // Contact info
      phone: z.string(),
      email: z.string().email().nullable(),
      address: z.string().nullable(),

      // Work info
      department_id: z.number().nullable(),
      position_id: z.number().nullable(),
      job_level: z.string().nullable(),
      start_date: z.coerce.date(),
      contract_end_date: z.coerce.date(),
      contract_type: z.enum([
        'indefinite_term',
        'fixed_term',
        'seasonal',
        'internship',
        'probationary',
        'part-time',
        'apprenticeship'
      ]),
      status: z.enum(['active', 'probation', 'on_leave', 'resigned', 'retired', 'deceased', 'suspended', 'terminated']),

      // Insurance info
      social_insurance_number: z
        .string()
        .regex(/^[0-9]{10}$/)
        .nullable(),

      // Other
      avatar_url: z.string().url().nullable()
    }))).query(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any),
    create: publicProcedure.input(z.object({
      // Base fields
      id: z.any(),
      created_at: z.coerce.date().nullable(),
      updated_at: z.coerce.date().nullable(),
      deleted: z.boolean().nullish(),
      deleted_at: z.coerce.date().nullish(),
      created_by: z.string().nullable(),
      updated_by: z.string().nullable(),
      remark: z.string().nullable(),

      // Employee specific fields
      employee_code: z.string(),
      full_name: z.string().nonempty(),
      date_of_birth: z.coerce.date(),
      gender: z.enum(['male', 'female', 'other']),
      identity_number: z.string().regex(/^[0-9]{12}$/),
      identity_date: z.coerce.date(),
      identity_place: z.string(),
      marital_status: z.enum(['single', 'married', 'divorced', 'widowed']),
      nationality: z.string().nullable(),

      // Contact info
      phone: z.string(),
      email: z.string().email().nullable(),
      address: z.string().nullable(),

      // Work info
      department_id: z.number().nullable(),
      position_id: z.number().nullable(),
      job_level: z.string().nullable(),
      start_date: z.coerce.date(),
      contract_end_date: z.coerce.date(),
      contract_type: z.enum([
        'indefinite_term',
        'fixed_term',
        'seasonal',
        'internship',
        'probationary',
        'part-time',
        'apprenticeship'
      ]),
      status: z.enum(['active', 'probation', 'on_leave', 'resigned', 'retired', 'deceased', 'suspended', 'terminated']),

      // Insurance info
      social_insurance_number: z
        .string()
        .regex(/^[0-9]{10}$/)
        .nullable(),

      // Other
      avatar_url: z.string().url().nullable()
    }).omit({
      id: true,
      // * Mã nhân viên sẽ do hệ thống sinh tự động
      employee_code: true,
      // * Các trường hệ thống không cần nhập
      created_at: true,
      updated_at: true,
      created_by: true,
      updated_by: true,
      deleted_at: true,
      is_active: true,
      deleted: true,
      remark: true
    })).output(z.object({
      // Base fields
      id: z.any(),
      created_at: z.coerce.date().nullable(),
      updated_at: z.coerce.date().nullable(),
      deleted: z.boolean().nullish(),
      deleted_at: z.coerce.date().nullish(),
      created_by: z.string().nullable(),
      updated_by: z.string().nullable(),
      remark: z.string().nullable(),

      // Employee specific fields
      employee_code: z.string(),
      full_name: z.string().nonempty(),
      date_of_birth: z.coerce.date(),
      gender: z.enum(['male', 'female', 'other']),
      identity_number: z.string().regex(/^[0-9]{12}$/),
      identity_date: z.coerce.date(),
      identity_place: z.string(),
      marital_status: z.enum(['single', 'married', 'divorced', 'widowed']),
      nationality: z.string().nullable(),

      // Contact info
      phone: z.string(),
      email: z.string().email().nullable(),
      address: z.string().nullable(),

      // Work info
      department_id: z.number().nullable(),
      position_id: z.number().nullable(),
      job_level: z.string().nullable(),
      start_date: z.coerce.date(),
      contract_end_date: z.coerce.date(),
      contract_type: z.enum([
        'indefinite_term',
        'fixed_term',
        'seasonal',
        'internship',
        'probationary',
        'part-time',
        'apprenticeship'
      ]),
      status: z.enum(['active', 'probation', 'on_leave', 'resigned', 'retired', 'deceased', 'suspended', 'terminated']),

      // Insurance info
      social_insurance_number: z
        .string()
        .regex(/^[0-9]{10}$/)
        .nullable(),

      // Other
      avatar_url: z.string().url().nullable()
    }).partial()).mutation(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any),
    updateProfile: publicProcedure.input(z.object({
      // Base fields
      id: z.any(),
      created_at: z.coerce.date().nullable(),
      updated_at: z.coerce.date().nullable(),
      deleted: z.boolean().nullish(),
      deleted_at: z.coerce.date().nullish(),
      created_by: z.string().nullable(),
      updated_by: z.string().nullable(),
      remark: z.string().nullable(),

      // Employee specific fields
      employee_code: z.string(),
      full_name: z.string().nonempty(),
      date_of_birth: z.coerce.date(),
      gender: z.enum(['male', 'female', 'other']),
      identity_number: z.string().regex(/^[0-9]{12}$/),
      identity_date: z.coerce.date(),
      identity_place: z.string(),
      marital_status: z.enum(['single', 'married', 'divorced', 'widowed']),
      nationality: z.string().nullable(),

      // Contact info
      phone: z.string(),
      email: z.string().email().nullable(),
      address: z.string().nullable(),

      // Work info
      department_id: z.number().nullable(),
      position_id: z.number().nullable(),
      job_level: z.string().nullable(),
      start_date: z.coerce.date(),
      contract_end_date: z.coerce.date(),
      contract_type: z.enum([
        'indefinite_term',
        'fixed_term',
        'seasonal',
        'internship',
        'probationary',
        'part-time',
        'apprenticeship'
      ]),
      status: z.enum(['active', 'probation', 'on_leave', 'resigned', 'retired', 'deceased', 'suspended', 'terminated']),

      // Insurance info
      social_insurance_number: z
        .string()
        .regex(/^[0-9]{10}$/)
        .nullable(),

      // Other
      avatar_url: z.string().url().nullable()
    }).omit({
      id: true,
      created_at: true,
      updated_at: true,
      deleted: true,
      created_by: true,
      updated_by: true
    }).partial().required({ employee_code: true })).output(z.any()).mutation(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any),
    delete: publicProcedure.input(z.object({
      employee_code: z
        .string()
        .nonempty()
        .regex(/^S\d+$/, 'Mã nhân viên không hợp lệ'),
      status: z.enum(['resigned', 'terminated', 'retired', 'deceased'])
    })).output(z.any()).mutation(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any)
  })
});
export type AppRouter = typeof appRouter;

