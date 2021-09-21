import {Router} from 'express';
import ProductController from '../controllers/ProductController';
import {celebrate, Joi, Segments} from 'celebrate';

let productRouter = Router()

let productController = new ProductController()

productRouter.get('/', productController.index) 
productRouter.get('/:id_produto',
celebrate({
    [Segments.PARAMS]: {
        id_produto: Joi.string().uuid().required()
    }
}),
productController.show)

productRouter.post('/', 
celebrate({
    [Segments.BODY]: {
        cod_usuario: Joi.number().required(),
        descricao_produto: Joi.string().required(),
        nome_produto: Joi.string().required(),
        quantidade_produto: Joi.number().required()
    }
}),
productController.create)

productRouter.delete('/:id_produto',
celebrate({
    [Segments.PARAMS]: {
        id_produto: Joi.string().uuid().required()
    }
}),
productController.delete)

productRouter.put('/:id_produto',
celebrate({
    [Segments.PARAMS]: {
        id_produto: Joi.string().uuid().required()
    },
    [Segments.BODY]: {
        cod_usuario: Joi.number().required(),
        descricao_produto: Joi.string().required(),
        nome_produto: Joi.string().required(),
        quantidade_produto: Joi.number().required()
    }
}),
productController.update)

export default productRouter