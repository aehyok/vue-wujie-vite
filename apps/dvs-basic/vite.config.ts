import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 1110,
    host: '0.0.0.0', // 可查看到局域网IP地址
    cors: true, // 默认启用并允许任何源
    // open: true, // 在服务器启动时自动在浏览器中打开应用程序
    //  反向代理配置，注意rewrite写法，开始没看文档在这里踩了坑
    proxy: {
      '/so': {
        target: 'http://101.35.211.235:3001', // 代理接口
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/so/, '')
      }
    }
  }
})