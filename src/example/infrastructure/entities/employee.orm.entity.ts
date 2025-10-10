import { BaseAbstractEntity } from '@/databases/base/base.entity.abstract'
import { DATABASE_SCHEMA, DATABASE_SYSCLOUD } from '@/databases/constants'
import { Column, Entity, Index } from 'typeorm'

@Entity({
	database: DATABASE_SYSCLOUD,
	schema: DATABASE_SCHEMA,
	name: 'sc_employees',
	synchronize: true
})
@Index(['employee_code'], { unique: true })
@Index(['email'], { unique: true })
@Index(['phone'])
@Index(['department_id'])
@Index(['position_id'])
export class EmployeeEntity extends BaseAbstractEntity {
	// Thông tin cơ bản
	@Column({ type: 'nvarchar', length: 20, unique: true, comment: 'Mã nhân viên' })
	employee_code: string

	@Column({ type: 'nvarchar', length: 100, comment: 'Họ và tên' })
	full_name: string

	@Column({ type: 'date', nullable: false, comment: 'Ngày sinh' })
	date_of_birth?: Date

	@Column({
		type: 'nvarchar',
		enum: ['male', 'female', 'other'],
		nullable: false,
		comment: 'Giới tính'
	})
	gender?: 'male' | 'female' | 'other'

	@Column({ type: 'nvarchar', length: 20, nullable: false, comment: 'Số CCCD/CMND' })
	identity_number?: string

	@Column({ type: 'date', nullable: false, comment: 'Ngày cấp CCCD/CMND' })
	identity_date?: Date

	@Column({ type: 'nvarchar', length: 100, nullable: false, comment: 'Nơi cấp CCCD/CMND' })
	identity_place?: string

	@Column({
		type: 'nvarchar',
		enum: ['single', 'married', 'divorced', 'widowed'],
		nullable: false,
		comment: 'Tình trạng hôn nhân'
	})
	marital_status?: 'single' | 'married' | 'divorced' | 'widowed'

	@Column({ type: 'nvarchar', length: 50, nullable: false, comment: 'Quốc tịch' })
	nationality: string

	// Thông tin liên hệ
	@Column({ type: 'nvarchar', length: 15, nullable: true, comment: 'Số điện thoại' })
	phone: string

	@Column({ type: 'nvarchar', length: 100, unique: true, nullable: true, comment: 'Email' })
	email?: string

	@Column({ type: 'nvarchar', length: 200, nullable: false, comment: 'Địa chỉ thường trú' })
	address: string

	// Thông tin công việc
	@Column({ type: 'int', nullable: true, comment: 'ID phòng ban' })
	department_id?: number

	@Column({ type: 'int', nullable: true, comment: 'ID chức vụ' })
	position_id?: number

	@Column({ type: 'nvarchar', length: 50, nullable: true, comment: 'Cấp bậc' })
	job_level?: string

	@Column({ type: 'date', nullable: false, comment: 'Ngày bắt đầu làm việc' })
	start_date: Date

	@Column({ type: 'date', nullable: false, comment: 'Ngày kết thúc hợp đồng' })
	contract_end_date: Date

	@Column({
		type: 'nvarchar',
		enum: ['indefinite_term', 'fixed_term', 'seasonal', 'internship', 'probationary', 'part-time', 'apprenticeship'],
		length: 50,
		nullable: false,
		comment: 'Loại hợp đồng'
	})
	contract_type:
		| 'indefinite_term'
		| 'fixed_term'
		| 'seasonal'
		| 'internship'
		| 'probationary'
		| 'part-time'
		| 'apprenticeship'

	@Column({
		type: 'nvarchar',
		enum: ['active', 'probation', 'on_leave', 'suspended', 'resigned', 'terminated', 'retired', 'deceased'],
		default: 'active',
		comment: 'Trạng thái nhân viên'
	})
	status: 'active' | 'probation' | 'on_leave' | 'suspended' | 'resigned' | 'terminated' | 'retired' | 'deceased'

	// Thông tin bảo hiểm
	@Column({ type: 'nvarchar', length: 20, nullable: true, comment: 'Số bảo hiểm xã hội' })
	social_insurance_number?: string

	@Column({ type: 'nvarchar', length: 200, nullable: true, comment: 'Đường dẫn ảnh đại diện' })
	avatar_url?: string

	constructor(employee: Partial<EmployeeEntity>) {
		super()
		Object.assign(this, employee)
	}
}
