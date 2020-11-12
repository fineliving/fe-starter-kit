1. 使用vue create **新建** fe-starter-kit 项目
2. 使用git init初始化git并远程github
3. 配置.gitignore、settings.json文件（其他文件暂不配置：环境配置.env、.eslintrc.js、.prettierrc、设置浏览器的兼容.browserslistrc、dev.proxy.js、vue.config.js）
4. 清除App.vue中的默认菜单、样式
5. 删除router文件夹中的默认路由、注释掉VueRouter配置中的mode、base，
6. 配置router.js，添加404.vue、temp.vue页面和对应资源，配置main.vue页面
7. 编写main.vue页面

   1. 清除公共组件HelloWorld.vue，配置Navbar.vue组件

   2. 组件中使用了element-ui

      1. 添加element-ui组件库
   2. 添加plugins文件夹，添加完整的组件引用
      3. 引入 Element
      1. 安装babel-plugin-component来**按需引入**以达到减小项目体积的目的（注意：开发环境、打包都必须安装，**否则编译报错**，尝试）
         2. 在babel.config.js中引入element-ui插件
      3. 在 main.js 中引入完整的组件
      4. 
   5. 
      6. 
8. 添加面包屑代码
   1. 
9. 编写样式表

   1. 添加styles文件夹，编写全局样式、elementUi样式
   2. main.js中添加样式表引用
10. 浏览效果，已经完成对导航栏的编写
11. 添加EditorPanel工具组件
12. 添加vuex-persistedstate数据持久化组件，增加侧边栏

###### 问题

1. EditorPanel组件iframe存在跨域问题，如https://fineliving.github.io/canvas-test/menu.html在EditorPanel页面中的链接访问有问题。已使用href重新设置进行了解决，但需要转发，