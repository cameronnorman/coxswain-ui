import request from './request'

export const getServices = async () => {
  let response = await request("GET", "/config")
  return response.json()
}
