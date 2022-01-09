import { Response, Request, NextFunction } from 'express'
import { verifyToken } from '@/utils/token'
import UserModel from '@/resources/user/user.model'
import Token from '@/utils/interfaces/token.interface'
import HttpException from '@/utils/exceptions/http.exceptions'
import Jwt from 'jsonwebtoken'

export const authenticateMiddleware = async (
	req: Request,
	res: Response,
	next: NextFunction
): Promise<Response | void> => {
	const bearer = req.headers.authorization

	if (!bearer || !bearer.startsWith('Bearer: ')) {
		next(new HttpException(401, 'Unauthorised'))
	}

	const token = bearer ? bearer.split('Bearer: ')[1].trim() : ''

	try {
		const payload: Jwt.JsonWebTokenError | Token = await verifyToken(token)
		if (payload instanceof Jwt.JsonWebTokenError) {
			next(new HttpException(401, 'Unauthorised'))
		} else {
			const user = await UserModel.findById(payload.id).select('-password').exec()
			if (!user) {
				next(new HttpException(401, 'Unauthorised'))
			} else {
				req.user = user
			}
		}
	} catch (error) {
		next(new HttpException(401, 'Unauthorised'))
	}
}
