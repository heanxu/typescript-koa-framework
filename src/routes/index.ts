import * as Router from 'koa-router'
import { createUser } from '../controller'

const router = new Router()

router.post('/users', createUser)
router.get('/', (ctx: any) => {
    ctx.body = 'Hello world.'
})
export { router }