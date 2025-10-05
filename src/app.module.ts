import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { CqrsModule } from '@nestjs/cqrs'
import { TRPCModule } from 'nestjs-trpc'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { appConfigFactory } from './configs/app.config'
import { validateConfigAsync } from './configs/app.config.validation'
import { ExampleModule } from './example/example.module'

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: '.env',
			load: [appConfigFactory],
			validate: validateConfigAsync
		}),
		TRPCModule.forRoot({
			autoSchemaFile: 'src/trpc'
		}),
		CqrsModule.forRoot(),
		ExampleModule
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
