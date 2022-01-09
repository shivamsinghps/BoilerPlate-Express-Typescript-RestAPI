import { cleanEnv, str, port } from 'envalid'

function validateEnv(): void {
	cleanEnv(process.env, {
		NODE_ENV: str({
			choices: ['development', 'production'],
		}),
		MONGOURI: str(),
		PORT: port({ default: 9000 }),
		JWT_SECERET: str(),
	})
}

export default validateEnv
