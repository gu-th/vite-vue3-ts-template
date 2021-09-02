vite + vue3 + ts 项目模板

```
vite-vue3-ts-template
├─ .eslintrc.js
├─ .gitignore
├─ axios.d.ts
├─ d.ts
├─ index.html                   根节点html
├─ package.json
├─ public
│  └─ favicon.ico
├─ README.md
├─ src                 
│  ├─ App.vue                   根Vue
│  ├─ assets
│  │  └─ logo.png
│  ├─ components                组件目录
│  │  ├─ common-nav.vue
│  ├─ main.ts                   入口文件
│  ├─ res                       资源目录
│  │  ├─ api                    请求接口api
│  │  │  ├─ commonNavApi.ts
│  │  ├─ constants               静态常量目录
│  │  ├─ interface               ts接口目录
│  │  │  ├─ dto
│  │  │  │  ├─ common.interface.ts
│  │  │  │  └─ nav.interface.ts
│  │  ├─ request                  请求封装 拦截
│  │  │  └─ http.ts
│  │  ├─ scss                     css目录
│  │  │  ├─ common.scss
│  │  │  └─ reset.css
│  │  └─ utils                    工具函数目录
|  |     └─utils.ts                              
│  ├─ router                      路由目录
│  │  └─ index.ts
│  ├─ store                       store目录
│  │  └─ index.ts
│  └─ views                       视图目录
│     └─ home.vue
├─ tsconfig.json                  ts配置
└─ vite.config.js                 vite 配置  

```