const DEVELOPMENT_MODE = 'prod' // prod | staging | local

const devBaseUrl = '/local/api/'
const stagingBaseUrl = '/dev/api/'
const prodBaseUrl = '/prod/api'

let baseUrl = ''
switch (DEVELOPMENT_MODE) {
  case DEVELOPMENT_MODE.toLowerCase === 'local':
    baseUrl = devBaseUrl;
    break;
  case DEVELOPMENT_MODE.toLowerCase === 'staging':
    baseUrl = stagingBaseUrl;
    break;
  case DEVELOPMENT_MODE.toLowerCase === 'prod':
    baseUrl = prodBaseUrl;
    break;
  default:
    baseUrl = devBaseUrl;
}



export default {
  baseUrl: baseUrl
}