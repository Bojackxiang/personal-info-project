const DEVELOPMENT_MODE = 'prod' // prod | staging | local

const devBaseUrl = 'http://localhost:3001/api'
const stagingBaseUrl = 'http://localhost:3001/api'
const prodBaseUrl = 'http://143.110.189.226/restful/api'

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