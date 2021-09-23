import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import AppError from "../../../shared/errors/AppErrors";
import UserRepository from '../typeorm/repositories/UserRepository';

interface IRequest {
    id_usuario: string,
    cod_usuario: number,
    nome_usuario: string,
    ocupacao_usuario: string,
    departamento_usuario: string
}

class CreateUserService {

    public async execute({cod_usuario, nome_usuario, ocupacao_usuario, departamento_usuario}: IRequest): Promise<User>{
        let userRepository = getCustomRepository(UserRepository)

        let userExist = await userRepository.findById(cod_usuario)
        if(userExist){
            throw new AppError(`Este usuário já está cadastrado`)
        }

        let newUser = userRepository.create({
            cod_usuario,
            nome_usuario, 
            ocupacao_usuario,
            departamento_usuario
        })

        await userRepository.save(newUser)
        return newUser
    }

}

export default CreateUserService
