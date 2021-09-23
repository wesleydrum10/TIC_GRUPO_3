import { EntityRepository, Repository } from "typeorm";
import User from "../entities/User";

@EntityRepository(User)
export default class UserRepository extends Repository<User> {
    
    public async findById(cod_usuario: number): Promise<User | undefined> {

        const user = await this.findOne({
            where: {
                cod_usuario
            }
        })

        return user;
    }
    
    public async findByName(nome_usuario: string): Promise<User | undefined> {
        
        const user = await this.findOne({
            where: {
                nome_usuario
            }
        })

        return user
    }
}
