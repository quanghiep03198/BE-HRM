import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/databases/database.service';
import { ITokenRespository } from './interfaces/token.repository.interface';
import { Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

@Injectable()
export class TokenRepository {
	protected tokenRepository: Prisma.RevokedTokenDelegate<DefaultArgs>;

	constructor(private readonly prisma: DatabaseService) {
		this.tokenRepository = prisma.revokedToken;
	}

	async create(payload){
		return this.tokenRepository.create({data: payload})
	}

	async revokeToken(username: string, token: string) {
		return await this.tokenRepository.create({
			data: { username, revokedToken: token },
		});
	}
	checkRevokedToken(user: any, token: any): Promise<boolean> {
		throw new Error('Method not implemented.');
	}

	async findOneByUser(id: number) {
		return await this.tokenRepository.findFirst({ where: { id } });
	}
}
