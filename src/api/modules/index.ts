import service from '../request'
// 获取图片列表
export const getImg = () => {
  return service.get('/getimglist')
}

export const uploadimg = (data: object) => {
  return service.post('/profile', data)
}
