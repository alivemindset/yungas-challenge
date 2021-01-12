/* eslint-disable camelcase */
export function isValidPageNumber (page: number, page_size: number, arrayLength: number) {
  const totalPages = Math.ceil(arrayLength / page_size)

  if (page > totalPages) return false
  else return true
}

export function getOffsetAndLimit (page: number, page_size: number) {
  return {
    offset: page_size * page - page_size,
    limit: page_size * page
  }
}
