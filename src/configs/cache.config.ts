import { env } from '@/common/utils'
import KeyvRedis, { RedisClientOptions } from '@keyv/redis'
import { CacheModuleOptions } from '@nestjs/cache-manager'
import { ConfigFactory } from '@nestjs/config'

export const cacheConfigFactory: ConfigFactory<Record<'cache', CacheModuleOptions<RedisClientOptions>>> = () => ({
	['cache']: {
		isGlobal: true,
		nonBlocking: true,
		stores: [new KeyvRedis(env('REDIS_URI'), { noNamespaceAffectsAll: false, useUnlink: true })]
	}
})
