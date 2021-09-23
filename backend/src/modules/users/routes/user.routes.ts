import {Router} from 'express';
import UserController from '../controllers/UserController';
import {celebrate, Joi, Segments} from 'celebrate';

let userRouter = Router()

let userController = new UserController()

userRouter.get('/', userController.index) 
userRouter.get('/:id_usuario',
celebrate({
    [Segments.PARAMS]: {
        id_usuario: Joi.string().uuid().required()
    }
}),
userController.show)

userRouter.post('/', 
celebrate({
    [Segments.BODY]: {
        cod_usuario: Joi.number().required(),
        nome_usuario: Joi.string().required(),
        ocupacao_usuario: Joi.string().required(),
        departamento_usuario: Joi.string().required()
    }
}),
userController.create)

userRouter.delete('/:id_usuario',
celebrate({
    [Segments.PARAMS]: {
        id_usuario: Joi.string().uuid().required()
    }
}),
userController.delete)

userRouter.put('/:id_usuario',
celebrate({
    [Segments.PARAMS]: {
        id_usuario: Joi.string().uuid().required()
    },
    [Segments.BODY]: {
        cod_usuario: Joi.number().required(),
        nome_usuario: Joi.string().required(),
        ocupacao_usuario: Joi.string().required(),
        departamento_usuario: Joi.string().required()
    }
}),
userController.update)

export default userRouter