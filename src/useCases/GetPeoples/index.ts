import { GetPeoplesController } from '../../controllers/GetPeoplesController'
import { FakePeoplesRepository } from '../../repositories/implementations/FakePeoplesRepository'
import { GetPeoplesUseCase } from './GetPeoplesUseCase'

const fakePeoplesRepository = new FakePeoplesRepository()
const getPeopleUseCase = new GetPeoplesUseCase(fakePeoplesRepository)

const getPeoplesController = new GetPeoplesController(getPeopleUseCase)

export { getPeoplesController }
