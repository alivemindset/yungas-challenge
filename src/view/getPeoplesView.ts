/* eslint-disable camelcase */
import { IPeopleFormatedEntity } from '../entities/FormatedPeople'
import { IPeopleEntity } from '../entities/People'
import { getLocation } from '../utils/locations'
import { getPhoneFormatedInE164 } from '../utils/phone'

export function getPeoplesView (data: IPeopleEntity[]): IPeopleFormatedEntity[] {
  const peoplesFormatedView = data.map(people => {
    const formatedPeople: IPeopleFormatedEntity = {
      ...people,
      gender: people.gender[0],
      location: {
        region: !people.location.region && getLocation(people.location.state),
        ...people.location
      },
      birthday: people.dob.date,
      registered: people.registered.date,
      telephoneNumbers: [getPhoneFormatedInE164(people.phone, people?.nationality)],
      mobileNumbers: [getPhoneFormatedInE164(people.cell, people?.nationality)],
      nationality: people.nationality ? people.nationality : 'BR'
    }

    delete formatedPeople.dob
    delete formatedPeople.phone
    delete formatedPeople.cell
    return formatedPeople
  })

  return peoplesFormatedView
}
