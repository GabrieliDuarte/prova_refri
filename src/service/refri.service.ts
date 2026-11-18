import { refrirepositories } from "../repositories/refri.repositories.js"

class  RefriService {

    async getAll(){
        const refri = await.refrirepositories
        return refri
    }
        

}

export const refriService = new RefriService()