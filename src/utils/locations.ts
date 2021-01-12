/* eslint-disable camelcase */
export interface ILocations {
  norte: string[]
  nordeste: string[]
  centro_oeste: string[]
  sudeste: string[]
  sul: string[]
}

export const validLocations = ['norte', 'nordeste', 'centro_oeste', 'sudeste', 'sul', 'all']
export const norte = ['tocantins', 'pará', 'amapá', 'roraima', 'amazonas', 'acre', 'rondônia']
export const nordeste = ['alagoas', 'bahia', 'ceará', 'maranhão', 'paraíba', 'pernambuco', 'piauí', 'rio grande do norte', 'sergipe']
export const centro_oeste = ['goiás', 'mato grosso', 'mato grosso do sul', 'distrito federal']
export const sudeste = ['são paulo', 'minas gerais', 'rio de janeiro', 'espírito santo']
export const sul = ['paraná', 'santa catarina', 'rio grande do sul']

export function isValidLocation (state: string): boolean {
  return !!validLocations.includes(state.replace('-', '_'))
}

export function getArrayLocation (location: string): string[] {
  location = location.toLowerCase()
  if (location === 'norte') return norte
  else if (location === 'nordeste') return nordeste
  else if (location === 'centro_oeste') return centro_oeste
  else if (location === 'sudeste') return sudeste
  else if (location === 'sul') return sul
  else return [...norte, ...nordeste, ...centro_oeste, ...sudeste, ...sul]
}

export function getLocation (state: string) {
  if (norte.includes(state)) return 'norte'
  if (nordeste.includes(state)) return 'nordeste'
  if (centro_oeste.includes(state)) return 'centro_oeste'
  if (sudeste.includes(state)) return 'sudeste'
  if (sul.includes(state)) return 'sul'
  return 'international'
}
