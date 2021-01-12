/* eslint-disable camelcase */
import people from './people.json'
import { IPeopleEntity } from '../entities/People'

export interface IResult {
  results: IPeopleEntity[]
}

export default class Database {
  private dbConnection: IResult

  constructor () {
    this.dbConnection = people
  }

  async find (limit: number, page: number, page_size: number) {
    const initial = page_size * page - page_size
    const result = this.dbConnection.results.slice(initial, initial + page_size)

    return result
  }

  async isValidPageNumber (page: number, page_size: number) {
    const totalPages = this.dbConnection.results.length / page_size

    if (page > totalPages) return false
    else return true
  }

  async getTotalItems () {
    return this.dbConnection.results.length
  }
}
