import { All, Controller, Inject, OnModuleInit } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { AnyTRPCRouter } from '@trpc/server'
import { AppRouterHost } from 'nestjs-trpc'
import { renderTrpcPanel } from 'trpc-ui'

@Controller()
export class TrpcPanelController implements OnModuleInit {
	private appRouter!: AnyTRPCRouter

	constructor(
		@Inject(AppRouterHost) private readonly appRouterHost: AppRouterHost,
		private readonly configService: ConfigService
	) {}

	onModuleInit() {
		this.appRouter = this.appRouterHost.appRouter
	}

	@All('/panel')
	panel() {
		const HOST = this.configService.get('HOST') || 'localhost'
		const PORT = this.configService.get('PORT') || 8089
		// return res.send('Hello World')
		return renderTrpcPanel(this.appRouter, {
			url: `http://${HOST}:${PORT}/trpc`,
			meta: {
				title: 'HRM tRPC API Panel',
				description: 'HRM tRPC API Panel'
			}
		})
	}
}
