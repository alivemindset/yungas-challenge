/* eslint-disable camelcase */
import people from './people.json'
import { IPeopleEntity } from '../entities/People'
import { getArrayLocation } from '../utils/locations'

export interface IResult {
  results: IPeopleEntity[]
}

export default class Database {
  private dbConnection: IResult

  constructor () {
    this.dbConnection = people
  }

  async find (page: number, page_size: number, location: string) {
    const items = await this.findByLocation(location)
    if (!this.isValidPageNumber(page, page_size, items)) return false

    const initial = page_size * page - page_size
    const result = items.slice(initial, initial + page_size)

    return { result, total_items: items.length }
  }

  async findByLocation (location: string) {
    const locations = getArrayLocation(location)

    const result = this.dbConnection.results.filter(data => locations.includes(data.location.state))

    return result
  }

  isValidPageNumber (page: number, page_size: number, items: IPeopleEntity[]) {
    const totalPages = Math.ceil(items.length / page_size)

    if (page > totalPages) return false
    else return true
  }

  async getTotalItems () {
    return this.dbConnection.results.length
  }
}
