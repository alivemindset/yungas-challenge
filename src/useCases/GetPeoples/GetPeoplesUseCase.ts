/* eslint-disable no-useless-constructor */
/* eslint-disable camelcase */
import { IPeopleRepository } from '../../repositories/IPeoplesRepository'
import { isValidLocation, validLocations } from '../../utils/locations'
import { getOffsetAndLimit, isValidPageNumber } from '../../utils/pagination'
import { getPeoplesView } from '../../view/getPeoplesView'
import { IGetPeoplesRequestDTO } from './GetPeoplesRequestDTO'
import { IGetPeoplesReturnDTO } from './GetPeoplesReturnDTO'

export class GetPeoplesUseCase {
  private page = 1
  private page_maxsize = 20
  private default_location = 'all'

  constructor (
    private peopleRepository: IPeopleRepository
  ) {}

  async execute (data: IGetPeoplesRequestDTO): Promise<IGetPeoplesReturnDTO> {
    if (!data.page || isNaN(data.page)) data.page = this.page
    if (!data.page_size || isNaN(data.page_size) || data.page_size > this.page_maxsize) data.page_size = this.page_maxsize
    if (!data.location) data.location = this.default_location
    if (!isValidLocation(data.location)) throw new Error('Invalid location, try: ' + validLocations)

    const getAllPeoplesByLocation = await this.peopleRepository.findByLocation(data.location)
    const offsetAndLimit = getOffsetAndLimit(data.page, data.page_size)
    if (!isValidPageNumber(data.page, data.page_size, getAllPeoplesByLocation.length)) throw new Error('Invalid page number')

    const peoples = await this.peopleRepository.find({
      location: data.location,
      offset: offsetAndLimit.offset,
      limit: offsetAndLimit.limit
    })

    const formatedPeoplesResult = getPeoplesView(peoples.result)

    return {
      page: data.page,
      page_size: data.page_size,
      total_items: peoples.total_items,
      items: formatedPeoplesResult
    }
  }
}
