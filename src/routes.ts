import Router from 'express'
import PeoplesController from './controllers/PeoplesController'

const router = Router()

router.get('/', async (request, response) => {
  return response.status(200).send()
})

router.get('/peoples', PeoplesController.getPeoplesByPage)

export { router }
