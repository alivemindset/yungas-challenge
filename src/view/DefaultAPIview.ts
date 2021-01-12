/* eslint-disable camelcase */
import { Response } from 'express'

export interface IResponseApiDTO {
  page: number
  page_size: number
  total_items: number
  items: any[]
}

export function response (data: IResponseApiDTO, statusCode: number, response: Response) {
  return response.status(statusCode).json(data)
}
