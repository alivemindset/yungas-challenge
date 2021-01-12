/* eslint-disable camelcase */
import Database from '../../configs/database'
import { IPeopleEntity } from '../../entities/People'
import { getArrayLocation } from '../../utils/locations'
import { IGetPeoplesQueryDTO } from '../../useCases/GetPeoples/GetPeoplesQueryDTO'
import { IPeopleRepository } from '../IPeoplesRepository'

interface IDatabaseConnection {
  results: IPeopleEntity[]
}

export class FakePeoplesRepository implements IPeopleRepository {
  private dbConnection: IDatabaseConnection

  constructor () {
    this.dbConnection = new Database().getConnection()
  }

  async find (data: IGetPeoplesQueryDTO) {
    const items = await this.findByLocation(data.location)
    const result = items.slice(data.offset, data.limit)

    return { result, total_items: items.length }
  }

  async findByLocation (location: string) {
    const locations = getArrayLocation(location)

    const result = this.dbConnection.results.filter(data => locations.includes(data.location.state))

    return result
  }
}
