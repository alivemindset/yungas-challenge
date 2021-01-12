/* eslint-disable no-useless-constructor */
/* eslint-disable camelcase */
import { Request, Response } from 'express'
import { GetPeoplesUseCase } from '../useCases/GetPeoples/GetPeoplesUseCase'

export class GetPeoplesController {
  constructor (private getPeoplesUseCase: GetPeoplesUseCase) {}

  async handle (request: Request, response: Response) {
    const { location } = request.params
    const { page, page_size } = request.query

    try {
      const peoples = await this.getPeoplesUseCase.execute({
        location,
        page: Number(page),
        page_size: Number(page_size)
      })

      return response.status(200).json(peoples)
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error'
      })
    }
  }
}
