import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

let app: any = null

function dataListener(opts: any) {
  switch (opts.type) {
    case 'navigate': // 当基座下发跳转指令时进行跳转
      router.push(opts.data.path)
      break
  }
}
const _window: any = window
_window.mount = () => {
  app = createApp(App)
  app.use(createPinia())
  app.use(router)

  app.mount('#app')
  _window.microApp?.addDataListener(dataListener, true)
}

// 👇 将卸载操作放入 unmount 函数，就是上面步骤2中的卸载函数
_window.unmount = () => {
  app.unmount()
  app = null
  _window.microApp?.removeDataListener(dataListener)
}

// 如果不在微前端环境，则直接执行mount渲染
if (!_window.__MICRO_APP_ENVIRONMENT__) {
  _window.mount()
}

