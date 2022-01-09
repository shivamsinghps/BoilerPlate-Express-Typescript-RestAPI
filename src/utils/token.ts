import Jwt from 'jsonwebtoken'
import Token from '@/utils/interfaces/token.interface'
import User from '@/resources/user/user.interface'

export const createToken = (user: User): string => {
	return Jwt.sign({ id: user._id }, process.env.JWT_SECERET as Jwt.Secret, {
		expiresIn: '1d',
	})
}

export const verifyToken = async (token: string): Promise<Jwt.VerifyErrors | Token> => {
	return new Promise((resolve, reject) => {
		Jwt.verify(token, process.env.JWT_SECERET as Jwt.Secret, (err, payload) => {
			if (err) {
				reject(err)
			} else {
				resolve(payload as Token)
			}
		})
	})
}

export default {
	createToken,
	verifyToken,
}
