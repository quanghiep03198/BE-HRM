import { IQuery, IQueryHandler, QueryHandler } from '@nestjs/cqrs'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { ExampleEntity } from '../entities/todo.entity'

export class GetTodoQuery implements IQuery {
	constructor() {}
}

@QueryHandler(GetTodoQuery)
export class GetTodoQueryHandler implements IQueryHandler<GetTodoQuery> {
	@InjectRepository(ExampleEntity) private readonly exampleEntity: Repository<ExampleEntity>

	async execute(query: GetTodoQuery): Promise<any> {
		return await this.exampleEntity.find(query)
	}
}
