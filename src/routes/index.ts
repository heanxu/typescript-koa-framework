import * as Router from 'koa-router'
import * as handler from '../handler'

const router = new Router()

router.post('/users', handler.createUser)
router.get('/', (ctx) => {
    ctx.body = 'Hello world.'
})
export { router }