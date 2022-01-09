import 'dotenv/config'
import 'module-alias/register'
import validatorEnv from '@/utils/validateEnv'
import App from './app'
import UserController from '@/resources/user/user.controller'

validatorEnv()

const app = new App([new UserController()], Number(process.env.PORT))

app.Listen()
