const ENV_FLAG = 'dev' // prod | dev

const devBaseUrl = '/dev/api'
const prodBaseUrl = '/prod/api'

export default {
  baseUrl: ENV_FLAG.toLocaleLowerCase() === 'dev'
    ? devBaseUrl
    : prodBaseUrl
}