import Router from 'express'

const router = Router()

router.get('/', async (request, response) => {
  return response.status(200).send()
})

export { router }
