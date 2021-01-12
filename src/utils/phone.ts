import phone from 'phone'

export function getPhoneFormatedInE164 (number: string, nationality: string = 'BR') {
  const formatedNumber = phone(number, nationality, true)[0]

  if (formatedNumber !== undefined) return formatedNumber
  return `+55${number.replace('(', '').replace(')', '').replace('-', '').replace(' ', '').trim()}`
}
