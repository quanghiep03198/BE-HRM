import { Logger } from '@nestjs/common'
import { runSeeders } from 'typeorm-extension'
import dataSource from './data-source'
import { EmployeeSeeder1760158722130 } from './seeds/1760158722130-employee.seeder'

const bootstrap = async () => {
	const logger = new Logger('Seeder')
	try {
		logger.log('Running seeders...')
		await dataSource.initialize()
		await runSeeders(dataSource, { seeds: [EmployeeSeeder1760158722130] })
		logger.log('Seeders executed successfully')
	} catch (error) {
		logger.error(error)
	} finally {
		await dataSource.destroy()
		process.exit()
	}
}

bootstrap()
