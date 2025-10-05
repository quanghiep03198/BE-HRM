import { BoolBitTransformer } from 'src/databases/transformers/bool.transformer'
import { Column, Entity } from 'typeorm'

@Entity({ name: 'examples' })
export class ExampleEntity {
	@Column({ primary: true, generatedIdentity: 'ALWAYS' })
	id: number

	@Column({ type: 'nvarchar', length: 255, nullable: false })
	title: string

	@Column({ type: 'bit', default: false, transformer: new BoolBitTransformer() })
	is_completed: boolean

	@Column({ type: 'timestamp', default: () => 'GETDATE()', name: 'created_at' })
	created_at: Date

	@Column({ type: 'timestamp', onUpdate: 'GETDATE()', name: 'updated_at' })
	updated_at: Date
}
