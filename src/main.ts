import { Logger } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { AppRouterHost } from 'nestjs-trpc'
import { AppModule } from './app.module'

declare const module: any

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	const configService = app.get(ConfigService)
	app.enableCors({ origin: '*' })
	await app.listen(configService.get<number>('PORT') || 8089, async () => {
		const url = await app.getUrl()
		Logger.log(`Application is running on: ${url}`)
		Logger.log(`tRPC panel is running on: ${url}/panel`)
	})
	const { appRouter } = app.get(AppRouterHost)
	if (module.hot) {
		module.hot.accept()
		module.hot.dispose(() => app.close())
	}
}
bootstrap()
