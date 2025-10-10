import z from 'zod'
import { employeeDto } from '.'

// Schema cho update Employee
export const updateEmployeeProfileDto = employeeDto
	.omit({
		id: true,
		created_at: true,
		updated_at: true,
		deleted: true,
		created_by: true,
		updated_by: true
	})
	.partial()
	.required({ employee_code: true })

export type UpdateEmployeeProfileDto = z.infer<typeof updateEmployeeProfileDto>
