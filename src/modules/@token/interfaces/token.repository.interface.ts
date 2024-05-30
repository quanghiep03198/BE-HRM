import { IRevokedToken } from './token.interface';

export interface ITokenRespository {
	revokeToken(userId: number, token: string): Promise<any>;
	findOneByUser(user): Promise<IRevokedToken>;
	checkRevokedToken(user, token): Promise<boolean>;
}
