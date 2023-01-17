<template>
  <!-- main  -->
  <div id="main">
    <!-- wrapper-->
    <div id="wrapper">
      <!-- content-holder-->
      <div class="content-holder hide_footer">
        <!-- content -->
        <div class="header-bg"></div>
        <!-- content-->
        <div class="content fl-wrap">
          <!-- hero-section -->
          <div class="hero-section fl-wrap">
            <!-- <div class="hero-section_bg fl-wrap">
              <div class="bg" :data-bg="testUrl"></div>
              <div class="overlay"></div>
              <div class="hero-sec_anim"></div>
            </div> -->
            <div class="hero-section_title fl-wrap" style="margin-top: 100px">
              <h2>取得联系</h2>
            </div>
          </div>
          <!-- hero-section end-->
          <div class="clearfix"></div>
          <!-- container-->
          <div class="container small-container">
            <div class="fl-wrap content-item sec-anim" style="margin-bottom: 150px">
              <div class="row">
                <div class="col-md-6">
                  <div class="column-wrapper_text fl-wrap">
                    <p>如您想进一步了解或希望反馈意见，请通过以下方式联系我或留下您的联系方式：</p>
                    <div class="contact-details fl-wrap">
                      <ul>
                        <li><span>@邮箱</span><a href="#" target="_blank">18830279823@163.com</a></li>
                        <li><span>@地址</span><a href="#" target="_blank">北京市朝阳区某某街道</a></li>
                        <li><span>@电话</span><a href="#">15932130680</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div id="contact-form" class="fl-wrap">
                    <div id="message"></div>
                    <form class="custom-form" action="php/contact.php" name="contactform" id="contactform">
                      <fieldset>
                        <input
                          type="text"
                          autocomplete="off"
                          name="name"
                          id="name"
                          placeholder="姓名 *"
                          class="cnt-anim"
                          value=""
                        />
                        <input
                          type="text"
                          autocomplete="off"
                          name="email"
                          id="email"
                          placeholder="邮箱 *"
                          class="cnt-anim"
                          value=""
                        />
                        <textarea
                          name="comments"
                          autocomplete="off"
                          id="comments"
                          cols="40"
                          rows="3"
                          placeholder="意见 & 反馈"
                          class="cnt-anim"
                        ></textarea>
                        <button class="cnt-anim" id="submit">提交</button>
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
              <div class="row">
                <input type="file" multiple id="file" @change="handlerFileChange" />
                <button @click="handlerUpload">提交</button>
              </div>
            </div>
          </div>
          <!-- container end-->
        </div>
        <!-- content end-->
        <div class="footer-bg fl-wrap">
          <div class="footer-bg_polcy"></div>
          <div class="footer-bg_social_links"></div>
          <div class="to-top-btn"><i class="fal fa-angle-up"></i></div>
        </div>
        <div class="progress-bar-wrap">
          <div class="progress-bar color-bg"></div>
          <div class="mousey">
            <div class="scroller"></div>
          </div>
        </div>
        <div class="fixed-aside-btn">
          <router-link to="/about">
            <a href="about.html" class="ajax fixed-aside-btn_item">
              关于我
              <i class="far fa-chevron-right"></i>
            </a>
          </router-link>
        </div>
      </div>
      <!-- content-holder end-->
    </div>
    <!-- wrapper end-->
  </div>
  <!-- Main end -->
</template>

<script setup>
import { uploadimg } from '@/api/modules/index'

let param = new FormData()
const handlerFileChange = () => {
  let file = document.getElementById('file').files[0]
  param.append('file', file)
  param.append('class', 'nature')
  param.append('title', 'test')
}

const handlerUpload = () => {
  // 暂时实现单张上传
  // 调用上传接口
  uploadimg(param)
    .then((res) => {
      // if (res && res.resCode === 0) {
      //   data.field.imageUrl = res.data.files_path
      // }
      console.log(res)
    })
    .catch((err) => {
      ElMessage.error(err)
      throw new Error(`uploadFile()接口错误：${err}`)
    })
}
useInit()
</script>

<style>
.avatar-uploader {
  z-index: 9999;
  margin-bottom: 999px;
}
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>
