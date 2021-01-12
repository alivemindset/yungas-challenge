/* eslint-disable camelcase */
import { Request, Response } from 'express'
import { response } from '../view/DefaultAPIview'
import { db } from '../configs/app'

export default {
  async getPeoplesByPage (request: Request, responseExpress: Response) {
    let { page, page_size } = request.query

    if (!page || Number(page) < 1 || isNaN(Number(page_size))) page = String(1)
    if (!page_size || Number(page_size) > 20 || isNaN(Number(page_size))) page_size = String(20)

    const isValidPageNumber = await db.isValidPageNumber(Number(page), Number(page_size))
    if (!isValidPageNumber) return responseExpress.status(400).json({ error: 'Invalid page number.' })
    const peoples = await db.find(Number(page_size), Number(page), Number(page_size))
    const totalItems = await db.getTotalItems()

    const result = peoples

    const dto = {
      page: Number(page),
      page_size: Number(page_size),
      total_items: totalItems,
      items: result
    }

    return response(dto, 200, responseExpress)
  }
}
