const DEVELOPMENT_MODE = 'prod' // prod | staging | local

const devBaseUrl = '/local/api/'
const stagingBaseUrl = '/dev/api/'
const prodBaseUrl = '/prod/api'

let baseUrl = ''
switch (DEVELOPMENT_MODE) {
  case 'local':
    console.log(1)
    baseUrl = devBaseUrl;
    break;
  case 'staging':
    console.log(2)
    baseUrl = stagingBaseUrl;
    break;
  case 'prod':
    console.log(3)
    baseUrl = prodBaseUrl;
    break;
  default:
    console.log(4)
    console.log(DEVELOPMENT_MODE.toLowerCase() === 'prod')
    baseUrl = devBaseUrl;
}

console.log(baseUrl)

export default {
  baseUrl: baseUrl
}