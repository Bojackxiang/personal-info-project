const DEVELOPMENT_MODE = 'dev' // prod | dev

const devBaseUrl = '/dev/api/'
const prodBaseUrl = '/prod/api'

export default {
  baseUrl: DEVELOPMENT_MODE.toLocaleLowerCase() === 'dev'
    ? devBaseUrl
    : prodBaseUrl
}