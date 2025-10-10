import { env } from '@/common/utils'
import { ConfigFactory } from '@nestjs/config'
import { type I18nOptions } from 'nestjs-i18n'
import { join } from 'node:path'

export const i18nConfigFactory: ConfigFactory<Record<'i18n', I18nOptions>> = () => ({
	['i18n']: {
		fallbackLanguage: env('FALLBACK_LANGUAGE', { fallbackValue: 'en' }),
		loaderOptions: {
			path: join(__dirname, '..', '/i18n/'),
			watch: env('NODE_ENV') === 'development'
		},
		typesOutputPath: join(__dirname, '../..', '/src/i18n/i18n.generated.ts')
	}
})
