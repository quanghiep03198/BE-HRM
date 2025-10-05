import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DATA_SOURCE_SYSCLOUD } from 'src/databases/constants'
import { ExampleEntity } from './entities/todo.entity'
import { ExampleRouter } from './example.router'
import { ExampleQueryHandlers } from './queries'

@Module({
	imports: [TypeOrmModule.forFeature([ExampleEntity], DATA_SOURCE_SYSCLOUD)],
	providers: [ExampleRouter, ...ExampleQueryHandlers]
})
export class ExampleModule {}
