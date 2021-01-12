/* eslint-disable camelcase */
import people from './people.json'
import { IPeopleEntity } from '../entities/People'
// import { getArrayLocation } from '../utils/locations'
// import { IGetPeoplesQueryDTO } from '../useCases/GetPeoples/GetPeoplesQueryDTO'

export interface IResult {
  results: IPeopleEntity[]
}

export default class Database {
  private dbConnection: IResult

  constructor () {
    this.dbConnection = people
  }

  getConnection (): IResult {
    return this.dbConnection
  }

  // async find (data: IGetPeoplesQueryDTO) {
  //   const items = await this.findByLocation(data.location)
  //   const result = items.slice(data.offset, data.limit)

  //   return { result, total_items: items.length }
  // }

  // async findByLocation (location: string) {
  //   const locations = getArrayLocation(location)

  //   const result = this.dbConnection.results.filter(data => locations.includes(data.location.state))

  //   return result
  // }
}
