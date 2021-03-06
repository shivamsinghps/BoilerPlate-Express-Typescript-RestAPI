import { Document } from 'mongoose'

export default interface User extends Document {
	email: string
	name: string
	role: string
	password: string

	isValidPassword(password: string): Promise<Error | boolean>
}
