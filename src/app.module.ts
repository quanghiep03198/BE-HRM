import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { cacheConfigFactory } from './configs/cache.config'
import { validateConfigAsync } from './configs/configs.validation'
import { i18nConfigFactory } from './configs/i18n.config'
import { typeOrmConfigFactory } from './configs/typeorm.config'
import { DatabaseModule } from './databases'
import { EmployeeModule } from './example/employee.module'
import { TrpcModule } from './trpc/trpc.module'

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: '.env',
			load: [typeOrmConfigFactory, i18nConfigFactory, cacheConfigFactory],
			validate: validateConfigAsync
		}),
		TrpcModule,
		DatabaseModule,
		EmployeeModule
	],
	controllers: [],
	providers: []
})
export class AppModule {}
