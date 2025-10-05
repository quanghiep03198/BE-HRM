import z from 'zod'

export const todoSchema = z.object({
	id: z.number().optional(),
	title: z.string().min(1).max(255),
	description: z.string().optional(),
	isCompleted: z.boolean().default(false),
	createdAt: z.date().optional(),
	updatedAt: z.date().optional()
})
