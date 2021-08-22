const DEVELOPMENT_MODE = 'prod' // prod | staging | local

const devBaseUrl = '/local/api/'
const stagingBaseUrl = '/dev/api/'
const prodBaseUrl = '/prod/api'

let baseUrl = ''
switch (DEVELOPMENT_MODE) {
  case 'local':
    baseUrl = devBaseUrl;
    break;
  case 'staging':
    baseUrl = stagingBaseUrl;
    break;
  case 'prod':
    baseUrl = prodBaseUrl;
    break;
  default:
    baseUrl = devBaseUrl;
}



export default {
  baseUrl: baseUrl
}