import Router from 'express'
import { getPeoplesController } from './useCases/GetPeoples'

const router = Router()

router.get('/', async (request, response) => {
  return response.status(200).send()
})

router.get('/peoples', (request, response) => getPeoplesController.handle(request, response))
router.get('/peoples/:location', (request, response) => getPeoplesController.handle(request, response))

export { router }
