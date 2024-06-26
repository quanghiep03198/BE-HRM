import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { Strategy } from 'passport-local'
// import { AuthService } from '../auth.service'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
	constructor(private authService: any) {
		super({ usernameField: 'email' })
	}

	async validate(email: string, password: string) {
		console.log(password)
		return await this.authService.validateUser({ email, password })
	}
}