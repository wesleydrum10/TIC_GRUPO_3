import {Router} from 'express';
import EventController from '../controllers/EventController';
import {celebrate, Joi, Segments} from 'celebrate';

let eventRouter = Router()

let eventController = new EventController()

eventRouter.get('/', eventController.index) 
eventRouter.get('/:id_evento',
celebrate({
    [Segments.PARAMS]: {
        id_evento: Joi.string().uuid().required()
    }
}),
eventController.show)

eventRouter.post('/', 
celebrate({
    [Segments.BODY]: {
        cod_sala: Joi.number().required(),
        cod_usuario: Joi.number().required(),
        data_evento: Joi.date().required(),
        descricao_evento: Joi.string().required(),
        titulo_evento: Joi.string().required()
    }
}),
eventController.create)

eventRouter.delete('/:id_evento',
celebrate({
    [Segments.PARAMS]: {
        id_evento: Joi.string().uuid().required()
    }
}),
eventController.delete)

eventRouter.put('/:id_evento',
celebrate({
    [Segments.PARAMS]: {
        id_evento: Joi.string().uuid().required()
    },
    [Segments.BODY]: {
        cod_sala: Joi.number().required(),
        cod_usuario: Joi.number().required(),
        data_evento: Joi.date().required(),
        descricao_evento: Joi.string().required(),
        titulo_evento: Joi.string().required()
    }
}),
eventController.update)

export default eventRouter