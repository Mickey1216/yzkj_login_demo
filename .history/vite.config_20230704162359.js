import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: '3000',
    proxy: {
      '/api': {
        target: 'http://localhost:8080/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '') // 不可以省略rewrite
      }
    }
  }

作者：Maskedheroe
链接：https://juejin.cn/post/7072275952142647310
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
})
