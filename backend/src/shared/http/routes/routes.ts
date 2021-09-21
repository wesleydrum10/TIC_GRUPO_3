import {Router} from 'express'
import eventRouter from '../../../modules/events/routes/event.routes'
// import userRouter from '../../../modules/users/routes/user.routes'
// import sessionRouter from '../../../modules/users/routes/session.routes'

let routes = Router()

routes.use('/events', eventRouter)
// routes.use('/users', userRouter)
// routes.use('/session', sessionRouter)
export default routes;

