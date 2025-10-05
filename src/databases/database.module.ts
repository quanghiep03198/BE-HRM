import { Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm'
import { DATA_SOURCE_SYSCLOUD, DATABASE_SYSCLOUD } from './constants'

@Module({
	imports: [
		// * MSSQL Server
		TypeOrmModule.forRootAsync({
			name: DATA_SOURCE_SYSCLOUD,
			inject: [ConfigService],
			useFactory: (configService: ConfigService) => {
				return {
					database: DATABASE_SYSCLOUD,
					...configService.getOrThrow<TypeOrmModuleAsyncOptions>('mssql')
				}
			}
		})
	]
})
export class DatabaseModule {
	// static forRootAsync(): DynamicModule {
	// 	return {
	// 		module: DatabaseModule,
	// 		global: true,
	// 		providers: [
	// 			{
	// 				provide: CENTRAL_DATA_SOURCE,
	// 				scope: Scope.DEFAULT,
	// 				inject: [ConfigService],
	// 				useFactory: async (configService: ConfigService) => {
	// 					const dataSource = new DataSource({
	// 						...configService.getOrThrow<SqlServerConnectionOptions>('mssql'),
	// 						host: configService.getOrThrow<string>('TENANT_CENTRAL'),
	// 						entities: [join(__dirname, '../**/*.entity.{ts,js}')]
	// 					})
	// 					if (!dataSource.isInitialized) await dataSource.initialize()
	// 					return dataSource
	// 				}
	// 			}
	// 		],
	// 		exports: [CENTRAL_DATA_SOURCE]
	// 	}
	// }
}
