const BASE_URL = 'https://study.duyiedu.com/api'

const fethcFn = async ({ url, method = 'GET', params = {} }) => {
  /* get请求的参数的拼接 */
  let result = null
  if (method === 'GET' && Object.keys(params).length) {
    /* key=value&key1=value2 */
    url += '?' + Object.keys(params).map(key => ''.concat(key, '=', params[key])).join('&')
  }
  try {
    const response = await fetch(BASE_URL + url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: method === 'GET' ? null : JSON.stringify(params)
    })
    result = await response.json()
    if (result.code === 0) {
      return result.data
    } else {
      window.alert(result.msg)
    }
  } catch (error) {
    console.log(error)
  }
}