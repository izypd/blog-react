<p align="center">
  <a href="https://izypd.com">
    <img width="100" src="https://cdn.jsdelivr.net/gh/izypd/Gauss@main/blog/favicon.svg">
  </a>
</p>

<h1 align="center">言语之庭</h1>

<div align="center">

使用 [React](https://reactjs.org), [TypeScript](https://www.typescriptlang.org), [Windi CSS](https://windicss.org) 及 [Ant Design](https://ant.design) 构建的个人博客，网址 https://izypd.com 。

[![React](https://img.shields.io/badge/Made%20With-React-78dafc?style=for-the-badge&labelColor=282c34)](https://reactjs.org)
[![blog-nest](https://img.shields.io/badge/blog-nest-d32a51?style=for-the-badge&labelColor=e0695f)](https://github.com/izypd/blog-nest)
[![Node Version](https://img.shields.io/badge/node-LTS-6f9e67?style=for-the-badge)](https://nodejs.org)
[![Code Style](https://img.shields.io/badge/Code%20Style-Prettier-c097c8?style=for-the-badge)](https://prettier.io)
[![PR Welcome](https://img.shields.io/badge/PR-welcome-60ca2b?style=for-the-badge)](https://github.com/izypd/blog-react/pulls)
[![License](https://img.shields.io/badge/License-GPL-60ca2b?style=for-the-badge)](https://www.gnu.org/licenses/gpl-3.0.html)

</div>

## 🤝 相关项目

- **与这个项目配套的 RESTful API 后端:** [blog-nest](https://github.com/izypd/blog-nest), powered by [NestJS](https://nestjs.com)
- **React + TypeScript + [Vite](https://vitejs.dev) 项目模板:** [vite-react-ts](https://github.com/izypd/vite-react-ts)

## ✨ 特性

- 🗃️ 包括管理系统，采用JWT认证
- 📱 响应式设计
- 💳 卡片瀑布流
- 🎨 代码高亮

## 截图

![](https://cdn.jsdelivr.net/gh/izypd/Gauss@main/blog/shot/pc_home.jpg)

![](https://cdn.jsdelivr.net/gh/izypd/Gauss@main/blog/shot/pc_note.jpg)

<img src="https://cdn.jsdelivr.net/gh/izypd/Gauss@main/blog/shot/mobile_home.png" width="49%" height="49%"> <img src="https://cdn.jsdelivr.net/gh/izypd/Gauss@main/blog/shot/mobile_note.png" width="49%" height="49%">

## 开发

请搭配后端 [blog-nest](https://github.com/izypd/blog-nest) 进行开发

示例采用 [pnpm](https://pnpm.io) ，与 yarn 类似

```bash
$ git clone https://github.com/izypd/blog-react.git
$ cd blog-react
# 安装依赖
$ pnpm i
# 打开在 localhost:3000 的支持热更新的开发服务器
$ pnpm dev
# 为生产环境编译
$ pnpm build
# 测试编译好的文件在生产环境的运行情况，会打开 localhost:5000
$ pnpm serve
# 使用 eslint 检查并修复代码，每次 commit 前会自动运行
$ pnpm lint
```

## 更新记录
[CHANGELOG.md](https://github.com/izypd/blog-react/blob/main/CHANGELOG.md)
