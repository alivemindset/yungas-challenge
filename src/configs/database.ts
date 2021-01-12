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

  async find () {
    return this.dbConnection
  }
}
