<template>
  <!-- 首页加载动画  -->
  <div class="main-loader" v-if="!getLoaderState()">
    <div class="ml-wrap">
      <div class="ml-mask"></div>
      <img src="../../assets/images/logo.png" alt="" />
    </div>
  </div>
  <!-- 首页加载动画结束 -->
  <!-- 上传按钮 -->
  <div class="upload" @click="visible = true">
    <span>上 传</span>
  </div>
  <!-- 上传对话框 -->
  <el-dialog
    class="upload_dialog"
    v-model="visible"
    title="上 传"
    :append-to-body="true"
    :close-on-click-modal="false"
    width="40%"
  >
    <el-upload
      class="avatar-uploader"
      action="#"
      :show-file-list="false"
      :before-upload="handlerBeforeUpload"
      :http-request="handlerUpload"
    >
      <img v-if="form.imageUrl" :src="form.imageUrl" class="avatar" />
      <el-icon class="el-icon" v-else>+</el-icon>
    </el-upload>

    <div class="upload-form">
      <input v-model.trim="form.title" type="text" autocomplete="off" placeholder="标题 *" />
      <input v-model.trim="form.class" type="text" autocomplete="off" placeholder="分类 *" />
    </div>
    <div class="dialog-footer">
      <button @click="submitForm">提交</button>
    </div>
  </el-dialog>
  <!-- 上传对话框结束 -->
  <div id="main">
    <!-- 筛选 -->
    <div id="wrapper">
      <div class="content-holder hide_footer2">
        <div class="header-bg hb_mob"></div>
        <div class="filter-btn hid-filter">
          <div class="filter-btn_container aside_anim"></div>
          <span class="filt-title">筛选</span>
        </div>
        <div class="gallery-filters-wrap">
          <div class="gallery-filters">
            <a href="#" class="gallery-filter gallery-filter-active" data-filter="*"><span>01.</span>全部照片</a>
            <a href="#" class="gallery-filter" data-filter=".nature"><span>02.</span>自然</a>
            <a href="#" class="gallery-filter" data-filter=".models"><span>03.</span>模特</a>
            <a href="#" class="gallery-filter" data-filter=".couples"><span>04.</span>景色</a>
            <a href="#" class="gallery-filter" data-filter=".outdoor"><span>05.</span>户外</a>
            <div class="count-folio">
              <div class="num-album"></div>
            </div>
          </div>
          <div class="gallery-filters-overlay"></div>
        </div>
        <!-- 主界面列表 -->
        <div class="hero-showcase-wrap">
          <div class="hero-showcase">
            <div class="gallery-items sf_true">
              <div class="gallery-items-container fl-wrap lightgallery">
                <div v-for="(item, index) in imgList" :key="index" :class="['gallery-item hov_zoom', item.class]">
                  <div class="hov_box">
                    <img :src="item.url" alt="" />
                    <a :href="item.url" class="box-media-zoom popup-image"><i class="fal fa-search"></i></a>
                    <div class="overlay"></div>
                    <div class="hov_box-title">
                      <a href="javascript:;" class="ajax">{{ item.title }}</a>
                      <div class="cat_item">{{ item.catName }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 主界面列表结束 -->
        <!-- 返回顶部 -->
        <base-back-top></base-back-top>
        <!-- 返回顶部结束 -->
      </div>
    </div>
    <!-- 筛选结束 -->
  </div>
</template>
<script setup>
import { uploadimg, submitimg, getImg } from '@/api/modules/index'
import { getLoaderState, setLoaderState } from '@/utils/useRunLoader'

useInit()
// 控制加载动画只显示一次
let timer = null
// 获取图片列表
const getImgList = () => {
  getImg()
    .then((res) => {
      if (res && res.code === '200') {
        let resList = []
        res.data.forEach((item) => {
          let newData = {
            class: item.class,
            // 注意路径
            url: new URL(`../../` + item.url, import.meta.url).href,
            title: item.title,
            catName: item.class,
          }
          resList.push(newData)
        })
        imgList.value = resList
        console.log(imgList.value)
      }
    })
    .catch((err) => {
      throw new Error(`getImg()接口错误：${err}`)
    })
}
onBeforeMount(() => {
  // 获取加载动画标识
  timer = setTimeout(() => {
    setLoaderState(JSON.stringify(true))
  }, 2000)
  // 请求图片列表
  getImgList()
})

onBeforeUnmount(() => {
  clearTimeout(timer)
})

// 图片列表数据
const imgList = ref([
  // {
  //   class: 'nature',
  //   url: new URL('../../assets/images/22.jpg', import.meta.url).href,
  //   title: 'Alone on Nature.',
  //   catName: '自然',
  // },
  {
    class: 'models',
    url: new URL('../../assets/images/24.jpg', import.meta.url).href,
    title: 'Old Cars On Streets.',
    catName: '模特',
  },
  {
    class: 'couples',
    url: new URL('../../assets/images/31.jpg', import.meta.url).href,
    title: 'Living my Dream.',
    catName: '景色',
  },
  {
    class: 'models',
    url: new URL('../../assets/images/41.jpg', import.meta.url).href,
    title: 'Forever Young.',
    catName: '模特',
  },
  {
    class: 'couples',
    url: new URL('../../assets/images/5.jpg', import.meta.url).href,
    title: 'Sunny Side Up.',
    catName: '景色',
  },
  {
    class: 'outdoor couples',
    url: new URL('../../assets/images/6.jpg', import.meta.url).href,
    title: 'The Other Aide of Me.',
    catName: '景色|户外',
  },
  {
    class: 'nature outdoor',
    url: new URL('../../assets/images/21.jpg', import.meta.url).href,
    title: 'Discover Norway.',
    catName: '自然|户外',
  },
  {
    class: 'nature couples',
    url: new URL('../../assets/images/13.jpg', import.meta.url).href,
    title: 'A Wonderful Life.',
    catName: '景色|户外',
  },
  {
    class: 'outdoor',
    url: new URL('../../assets/images/14.jpg', import.meta.url).href,
    title: 'Happy Flashbacks.',
    catName: '户外',
  },
  {
    class: 'models outdoor',
    url: new URL('../../assets/images/9.jpg', import.meta.url).href,
    title: 'Go Green Morning.',
    catName: '模特|户外',
  },
  {
    class: 'couples',
    url: new URL('../../assets/images/10.jpg', import.meta.url).href,
    title: 'Travelling is Fun.',
    catName: '景色',
  },
  {
    class: 'models',
    url: new URL('../../assets/images/8.jpg', import.meta.url).href,
    title: 'Life, here I Come.',
    catName: '模特',
  },
  {
    class: 'nature',
    url: new URL('../../assets/images/11.jpg', import.meta.url).href,
    title: 'My Blooming Backyard.',
    catName: '自然',
  },
  {
    class: 'outdoor',
    url: new URL('../../assets/images/12.jpg', import.meta.url).href,
    title: 'Just Happy.',
    catName: '户外',
  },
  {
    class: 'models',
    url: new URL('../../assets/images/16.jpg', import.meta.url).href,
    title: 'Just Happy.',
    catName: '模特',
  },
  {
    class: 'nature',
    url: new URL('../../assets/images/17.jpg', import.meta.url).href,
    title: 'Just Happy.',
    catName: '自然',
  },
  {
    class: 'outdoor',
    url: new URL('../../assets/images/18.jpg', import.meta.url).href,
    title: 'Happy Flashbacks.',
    catName: '户外',
  },
  {
    class: 'outdoor nature',
    url: new URL('../../assets/images/my1.jpg', import.meta.url).href,
    title: 'Beautiful.',
    catName: '户外|自然',
  },
  {
    class: 'nature',
    url: new URL('../../assets/images/my2.jpg', import.meta.url).href,
    title: 'Beautiful.',
    catName: '自然',
  },
])

const visible = ref(false)

const form = reactive({
  imageUrl: '',
  title: '',
  class: '',
  file: null,
})

const handlerUpload = (params) => {
  let param = new FormData()
  param.append('file', params.file)
  // 调用上传接口
  uploadimg(param)
    .then((res) => {
      if (res && res.code === 200) {
        ElMessage({ message: res.msg, duration: 2000, type: 'success' })
        form.imageUrl = res.imgurl
        form.file = params.file
      } else {
        ElMessage({ message: res.msg, duration: 2000, type: 'error' })
      }
    })
    .catch((err) => {
      ElMessage.error(err)
      throw new Error(`uploadFile()接口错误：${err}`)
    })
}

const submitForm = () => {
  if (!(form.title && form.class)) {
    ElMessage({ message: '请输入图片标题与分类', duration: 2000, type: 'info' })
    return false
  }
  // 参数
  let param = new FormData()
  param.append('file', form.file)
  param.append('title', form.title)
  param.append('class', form.class)
  // 提交图片
  submitimg(param)
    .then((res) => {
      if (res && res.code === 200) {
        ElMessage({ message: res.msg, duration: 2000, type: 'success' })
        // 刷新页面
        timer = setTimeout(() => {
          document.location.reload()
          // 重新请求
          getImgList()
        }, 2000)
        // 关闭弹窗
        visible.value = false
        // 重置表单
        form.imageUrl = ''
        form.title = ''
        form.class = ''
        form.file = null
      } else {
        ElMessage({ message: res.msg, duration: 2000, type: 'error' })
      }
    })
    .catch((err) => {
      ElMessage.error(err)
      throw new Error(`submitimg()接口错误：${err}`)
    })
}

// 图片格式校验
const handlerBeforeUpload = (file) => {
  // 判断上传文件类型与大小，返回boolean
  const isJPGOrPNG = file.type === ('image/jpeg' || 'image/png' || 'image/jpg')
  if (!isJPGOrPNG) {
    ElMessage({ message: '请上传正确格式图片', duration: 2000, type: 'error' })
    return false
  }
  return true
}
</script>
