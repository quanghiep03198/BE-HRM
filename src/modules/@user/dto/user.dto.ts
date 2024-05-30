import { z } from 'zod';

export const createUserSchema = z.object({
	username: z.string(),
	email: z.string().email(),
	password: z.string(),
	role: z.string().default('user')
});

export type CreateUserDTO = z.infer<typeof createUserSchema>;
