import { createApp } from 'vue'
import App from './App.vue'
import store from '@/store'
import router from '@/router'
import '@/styles/index.scss'
import svgIcon from './components/icons/index.vue'
import * as ELIcon from '@element-plus/icons-vue'

const app = createApp(App)
// 全局注册elementplus图标组件
for (const iconName in ELIcon) {
  app.component(iconName, ELIcon[iconName])
}
// 全局注册svg组件
app.component('svg-icon', svgIcon)

app.use(router).use(store).mount('#app')
