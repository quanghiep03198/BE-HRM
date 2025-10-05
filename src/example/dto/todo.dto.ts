import z from 'zod'

export const exampleDataDTO = z.object({
	id: z.number(),
	title: z.string().min(1).max(255),
	description: z.string().optional(),
	isCompleted: z.boolean().default(false),
	createdAt: z.date().optional(),
	updatedAt: z.date().optional()
})

export type ExampleDataDTO = z.infer<typeof exampleDataDTO>
