import { Logger } from '@nestjs/common'
import z from 'zod'

export const configSchema = z.object({
	// * Redis
	REDIS_HOST: z.string().ip({ version: 'v4' }),
	REDIS_PORT: z
		.string()
		.trim()
		.nonempty()
		.default('6379')
		.refine((value) => !Number.isNaN(+value))
		.transform((value) => +value),
	REDIS_PASSWORD: z.string().trim().nonempty(),
	REDIS_DB: z
		.string()
		.trim()
		.nonempty()
		.default('0')
		.refine((value) => !Number.isNaN(+value))
		.transform((value) => +value)
})

export const validateConfigAsync = async (config: Record<string, any>) => {
	try {
		return await configSchema.parseAsync(config)
	} catch (error) {
		Logger.error(error)
	}
}
