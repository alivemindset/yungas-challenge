/* eslint-disable camelcase */
import { IPeopleEntity } from '../entities/People'
import { IGetPeoplesQueryDTO } from '../useCases/GetPeoples/GetPeoplesQueryDTO'

export interface IPeopleRepository {
  find(data: IGetPeoplesQueryDTO): Promise<{ result: IPeopleEntity[], total_items: number }>
  findByLocation(location: string): Promise<IPeopleEntity[]>
}
