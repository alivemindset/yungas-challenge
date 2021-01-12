export interface IPeopleFormatedEntity {
  'gender':string
  'name': {
    'title':string
    'first':string
    'last':string
  },
  'location':{
    'region': boolean | string
    'street':string
    'city':string
    'state':string
    'postcode':number
    'coordinates': {
      'latitude':string
      'longitude':string
    },
    'timezone': {
      'offset':string
      'description':string
    }
  },
  'email': string
  'birthday': string
  'registered': string
  'telephoneNumbers': boolean | string[]
  'mobileNumbers': boolean | string[]
  'picture':{
    'large':string
    'medium':string
    'thumbnail':string
  },
  'nationality'?: string,
  'dob'?: {
    'date': string
    'age': number
  },
  'phone'?: string,
  'cell'?: string
}
