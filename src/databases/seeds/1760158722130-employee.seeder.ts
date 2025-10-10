import { Gender, MaritalStatus } from '@/example/domain/constants'

import { CreateEmployeeDto } from '@/example/application/dto/create-employee.dto'
import { EmployeeEntity } from '@/example/infrastructure/entities/employee.orm.entity'
import { faker } from '@faker-js/faker'
import { subYears } from 'date-fns'
import { DataSource } from 'typeorm'
import { Seeder, SeederFactoryManager } from 'typeorm-extension'
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity.js'

export class EmployeeSeeder1760158722130 implements Seeder {
	track = false

	public async run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<any> {
		const data: CreateEmployeeDto[] = Array.from({ length: 100 }).map(() => {
			const payload = {
				full_name: faker.person.fullName(),
				email: faker.internet.email({ provider: 'gmail.com' }),
				date_of_birth: faker.date.past({ years: 30, refDate: new Date() }),
				phone: faker.phone.number({ style: 'national' }),
				contract_type: faker.helpers.arrayElement([
					'indefinite_term',
					'fixed_term',
					'seasonal',
					'internship',
					'probationary',
					'part-time',
					'apprenticeship'
				]),
				department_id: faker.number.int({ min: 1, max: 10 }),
				position_id: faker.number.int({ min: 1, max: 10 }),
				job_level: faker.helpers.arrayElement(['junior', 'mid', 'senior', 'lead', 'manager']),
				start_date: faker.date.past({ years: 5, refDate: new Date() }),
				status: faker.helpers.arrayElement([
					'active',
					'probation',
					'on_leave',
					'suspended',
					'resigned',
					'terminated',
					'retired',
					'deceased'
				]),
				avatar_url: faker.image.avatar(),
				social_insurance_number: faker.string.numeric({ length: 10 }),
				tax_code: faker.string.numeric({ length: 10 }),
				identity_number: faker.string.numeric({ length: 12 }),
				identity_place: faker.location.city(),
				identity_date: faker.date.past({ years: 10, refDate: new Date() }),
				gender: faker.helpers.arrayElement(['male', 'female', 'other']) as Gender,
				marital_status: faker.helpers.arrayElement(['single', 'married', 'divorced', 'widowed']) as MaritalStatus,
				contract_end_date: faker.date.future({ years: 2, refDate: new Date() }),
				nationality: faker.location.country(),
				religion: faker.helpers.arrayElement(['none', 'christianity', 'islam', 'hinduism', 'buddhism', 'other']),
				address: faker.location.streetAddress()
			}

			payload.identity_date = subYears(payload.date_of_birth, 15)
			return payload
		})
		for (const employee of data) {
			await dataSource.getRepository(EmployeeEntity).insert(employee as QueryDeepPartialEntity<EmployeeEntity>)
		}
	}
}
