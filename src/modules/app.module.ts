import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '../databases/database.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: '.env',
			isGlobal: true,
			load: [
				/**
				 * Import thêm các exteneded configs khác nếu muốn vào đây
				 * @example
				 * 	const redisConfigs = () => ({
				 * 		host: '127.0.0.1',
				 * 		port: 6379,
				 * 		tls: true
				 * 	})
				 */
			]
		}),
		DatabaseModule
	],
	controllers: [],
	providers: []
})
export class AppModule {}
