import { Module } from '@nestjs/common'
import { TRPCModule } from 'nestjs-trpc'
import { join } from 'path'
import { AppContext } from './contexts/app.context'
import { TrpcPanelController } from './trpc.controller'

// Disable tRPC auto-generation when using webpack to avoid "Could not access root module file" error
const isWebpackMode = process.env.WEBPACK === 'true'

@Module({
	imports: [
		TRPCModule.forRoot({
			autoSchemaFile: isWebpackMode ? './src/trpc/generated/server.ts' : join(process.cwd(), 'src/trpc/generated'),
			schemaFileImports: [],
			context: AppContext
		})
	],
	controllers: [TrpcPanelController],
	providers: [AppContext]
})
export class TrpcModule {}
