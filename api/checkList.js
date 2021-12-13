import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: '/.netlify/functions',
})

export const getList = async () => {
  const { data } = await axiosInstance.get('/getList')
  return data.list
}

export const addItem = async (newItem) => {
  const { data } = await axiosInstance.post('/addItem', newItem)
  return data._id
}

export const removeItem = (itemId) =>
  axiosInstance.delete(`/removeItem?itemId=${itemId}`)

export const setItemChecked = (itemId) =>
  axiosInstance.put('/setItemChecked', { itemId })

export const editItem = (item) => axiosInstance.put('/editItem', item)
