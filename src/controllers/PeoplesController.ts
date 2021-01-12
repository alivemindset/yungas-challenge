/* eslint-disable camelcase */
import { Request, Response } from 'express'
import { response } from '../view/DefaultAPIview'
import { db } from '../configs/app'
import { validLocations } from '../utils/locations'

export default {
  async getPeoplesByPage (request: Request, responseExpress: Response) {
    let { location } = request.params
    let { page, page_size } = request.query

    if (!page || Number(page) < 1) page = String(1)
    if (!page_size || Number(page_size) > 20 || isNaN(Number(page_size))) page_size = String(20)
    if (!location) location = 'all'
    location = location.toLowerCase().replace('-', '_')
    if (!validLocations.includes(location)) return responseExpress.status(400).json({ error: 'Invalid location, try: ' + validLocations })

    const peoples = await db.find(Number(page), Number(page_size), location)
    if (!peoples) return responseExpress.status(400).json({ error: 'Invalid page number.' })

    const result = peoples.result

    const dto = {
      page: Number(page),
      page_size: Number(page_size),
      total_items: peoples.total_items,
      items: result
    }

    return response(dto, 200, responseExpress)
  }
}
