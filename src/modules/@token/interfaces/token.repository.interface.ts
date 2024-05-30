import { Prisma } from "@prisma/client"
import { IRevokedToken } from "./token.interface"
import { DefaultArgs } from "@prisma/client/runtime/library"

export interface ITokenRespository {
    revokeToken(userId: number, token: string): Promise<any>
	findOneByUser(user): Promise<IRevokedToken>
	checkRevokedToken(user, token): Promise<boolean>
}