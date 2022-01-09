import UserModel from '@/resources/user/user.model'
import Token from '@/utils/token'

class UserService {
	private user = UserModel

	public async register(
		email: string,
		name: string,
		role: string,
		password: string
	): Promise<Error | string> {
		try {
			const user = await this.user.create({
				email,
				name,
				role,
				password,
			})
			if (user) {
				const accessToken = Token.createToken(user)
				return accessToken
			} else {
				throw new Error('Unable to create new user')
			}
		} catch (error) {
			throw new Error('user creation went wrong')
		}
	}

	public async login(email: string, password: string): Promise<Error | string> {
		try {
			const user = await this.user.findOne({
				email,
			})
			if (user && user.isValidPassword(password)) {
				const accessToken = Token.createToken(user)
				return accessToken
			} else {
				throw new Error('Unable to find with these credentials')
			}
		} catch (error) {
			throw new Error('User login went wrong')
		}
	}
}

export default UserService
