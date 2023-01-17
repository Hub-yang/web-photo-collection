import service from '../request'
// 获取图片列表
export const getImg = () => {
  return service.get('/getimglist')
}

// 上传图片
export const uploadimg = (data: object) => {
  return service.post('/profile', data)
}

// 提交表单
export const submitimg = (data: object) => {
  return service.post('/submitimg', data)
}
