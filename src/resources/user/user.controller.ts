import { Router, Request, Response, NextFunction } from 'express'
import Controller from '@/utils/interfaces/controller.interface'
import HttpException from '@/utils/exceptions/http.exceptions'
import validationMiddleware from '@/middleware/validate.middleware'
import validate from '@/resources/user/user.validation'
import UserService from '@/resources/user/user.services'
import { authenticateMiddleware } from '@/middleware/authenticated.middleware'

class UserController implements Controller {
	public path = '/users'
	public router = Router()
	private UserService = new UserService()

	constructor() {
		this.initialiseRoutes()
	}

	private initialiseRoutes(): void {
		this.router.post(
			`${this.path}/register`,
			validationMiddleware(validate.register),
			this.register
		)
		this.router.post(`${this.path}/login`, validationMiddleware(validate.login), this.login)
		this.router.get(`${this.path}/users`, authenticateMiddleware, this.getUser)
	}

	private register = async (
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<Response | void> => {
		try {
			const { name, email, password } = req.body
			const token = this.UserService.register(email, name, 'user', password)
			res.status(200).json({ token })
		} catch (error: any) {
			next(new HttpException(500, error.message))
		}
	}

	private login = async (
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<Response | void> => {
		try {
			const { email, password } = req.body
			const token = this.UserService.login(email, password)
			res.status(200).json({ token })
		} catch (error: any) {
			next(new HttpException(500, error.message))
		}
	}

	private getUser = async (
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<Response | void> => {
		try {
			if (!req.user) {
				return next(new HttpException(404, 'No User found'))
			}
			res.status(200).json({ user: req.user })
		} catch (error: any) {
			next(new HttpException(500, error.message))
		}
	}
}

export default UserController
