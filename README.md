# 我的博客

## 路由

- [ ] 编写路由；antd样式按需加载有问题，先全局import

```shell
pnpm add react-router-dom react-router-config
pnpm add -D @types/react-router-dom @types/react-router-config
```

## 首页

- [ ] 写Header；配置Windi CSS

```shell
pnpm add @iconify/react
```

- [ ] 笔记瀑布流、brotli压缩

```shell
pnpm add @egjs/react-infinitegrid axios date-fns
pnpm add -D vite-plugin-compression
```

- [ ] 设置“关于”的url
- [ ] 标签气泡
- [ ] 回到顶部
- [ ] 相应标签的笔记列表
- [ ] 简历页

## 笔记页

- [ ] markdown

```shell
pnpm add react-markdown remark-gfm
```

- [ ] 代码高亮、笔记内容排版

```shell
pnpm add prismjs
pnpm add -D @types/prismjs
pnpm add vite-plugin-prismjs
```

- [ ] 笔记标题、时间、标签排版；笔记内容图片宽度
- [ ] 笔记页脚

## 用户页

- [ ] 注册页
- [ ] 登录页

- [ ] 不使用react-router-config、修改弹出tag列表的位置

```shell
pnpm rm react-router-config
pnpm rm -D @types/react-router-config
```

- [ ] 更改用户页样式

## 管理页

- [ ] 路由鉴权：已登录才能访问管理页面；重构用户页路由
- [ ] 修复admin页鉴权的bug；admin页的布局
- [ ] 点击新建笔记、管理笔记跳转到相应页

- [ ] 新建笔记页

```shell
pnpm add vditor react-vditor
```

- [ ] 修改新建笔记页样式
- [ ] 管理笔记页：删除单个笔记
- [ ] 管理笔记页：按创建、编辑时间排序

- [ ] 管理笔记页：编辑笔记；将markdown编辑器换为@uiw/react-md-editor

```shell
pnpm rm vditor react-vditor
pnpm add @uiw/react-md-editor
```

## 其他

- [ ] PWGAN

```shell
pnpm add react-compare-image
```

- [ ] 取消brotli压缩

```shell
pnpm rm -D vite-plugin-compression
```

- [ ] 添加gzip压缩

```shell
pnpm add -D vite-plugin-compression
```

- [ ] Rollup的CommonJS plugin有bug，导致导入CommonJS方式编写的库的时候，编译后的静态文件在生产环境出现[Minified React error 130](https://github.com/vitejs/vite/issues/2139)。Vite使用Rollup打包，故有bug，改用webpack的版本[blog-react-webpack](https://github.com/izypd/blog-react-webpack)

