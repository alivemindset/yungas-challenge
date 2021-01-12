/* eslint-disable camelcase */
import { Response } from 'express'
import phone from 'phone'
import { getLocation } from '../utils/locations'
import { getPhoneFormatedInE164 } from '../utils/phone'

export interface IResponseApiDTO {
  location?: string,
  page: number
  page_size: number
  total_items: number
  items: any[]
}

export function response (data: IResponseApiDTO, statusCode: number, response: Response) {
  const resultItems = data.items.map(item => {
    item = {
      ...item,
      gender: item.gender[0],
      location: {
        region: !item.region && getLocation(item.location.state),
        ...item.location
      },
      dob: item.dob.date,
      registered: item.registered.date,
      telephoneNumbers: !item.telephoneNumbers && [getPhoneFormatedInE164(item.phone, item?.nationality)],
      mobileNumbers: !item.mobileNumbers && [getPhoneFormatedInE164(item.cell, item?.nationality)],
      nationality: item.nationality ? item.nationality : 'BR'
    }

    delete item.cell
    delete item.phone
    return item
  })

  delete data.location
  data.items = resultItems

  return response.status(statusCode).json(data)
}
