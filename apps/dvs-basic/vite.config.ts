import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'

// 当使用文件系统路径的别名时，请始终使用绝对路径。相对路径的别名值会原封不动地被使用，因此无法被正常解析。
// path.resolve () 方法用于将一系列路径段解析为绝对路径。它通过处理从右到左的路径序列来工作，在每个路径之前添加，直到创建绝对路径。
function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 别名
  resolve: {
    alias: [
      // @/xxxx => src/xxxx
      {
        find: /\@\//,
        replacement: `${pathResolve('src')}/`,
      },
      // #/xxxx => types/xxxx
      {
        find: /\#\//,
        replacement: `${pathResolve('types')}/`,
      },
    ],
    dedupe: ['vue'],
  },

  server: {
    port: 6100,
    host: '0.0.0.0', // 可查看到局域网IP地址
    cors: true, // 默认启用并允许任何源
    // open: true, // 在服务器启动时自动在浏览器中打开应用程序
    //  反向代理配置，注意rewrite写法，开始没看文档在这里踩了坑
    proxy: {
      '/so': {
        target: 'http://101.200.243.192:8080', // 代理接口
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/so/, '')
      }
    }
  }
})