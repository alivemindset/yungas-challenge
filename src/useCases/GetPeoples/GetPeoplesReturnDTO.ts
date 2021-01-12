/* eslint-disable camelcase */
import { IPeopleFormatedEntity } from '../../entities/FormatedPeople'

export interface IGetPeoplesReturnDTO {
  page: number,
  page_size: number,
  total_items: number,
  items: IPeopleFormatedEntity[]
}
