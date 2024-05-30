import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './databases/database.module';
import { ConfigModule } from '@nestjs/config';

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
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
