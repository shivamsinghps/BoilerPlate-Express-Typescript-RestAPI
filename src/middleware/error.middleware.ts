import { Request, Response, NextFunction } from 'express'
import HttpException from '@/utils/exceptions/http.exceptions'

function errorMiddleware(
	req: Request,
	res: Response,
	next: NextFunction,
	error: HttpException
): void {
	const status = error.status || 500
	const message = error.message || 'Something Went Wrong'

	res.status(status).json({
		status,
		message,
	})
}

export default errorMiddleware
