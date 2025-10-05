import { QueryBus } from '@nestjs/cqrs'
import { Query, Router } from 'nestjs-trpc'
import z from 'zod'
import { ExampleDataDTO } from './dto/todo.dto'
import { GetTodoQuery, GetTodoQueryHandler } from './queries/todo.handler'

@Router({ alias: 'example' })
export class ExampleRouter {
	constructor(private readonly queryBus: QueryBus) {}

	@Query({
		output: z.array(
			z.object({
				id: z.number().optional(),
				title: z.string().min(1).max(255),
				description: z.string().optional(),
				isCompleted: z.boolean().default(false),
				createdAt: z.date().optional(),
				updatedAt: z.date().optional()
			})
		)
	})
	async getData() {
		return await this.queryBus.execute<GetTodoQuery, ExampleDataDTO[]>(new GetTodoQueryHandler())
	}
}
