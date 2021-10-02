# Vite + React + TypeScript

- [ ] 新建项目

```shell
pnpm dlx create-vite vite-react-ts --template react-ts
cd vite-react-ts
pnpm i
```

- [ ] push到GitHub

```shell
git init
git remote add origin https://github.com/izypd/vite-react-ts.git
git branch -m master main
git add .
git commit -m ":tada:init: 用Vite创建react-ts项目"
git push --set-upstream origin main
```

- [ ] 删除不需要的文件，并修改相关的文件

```shell
git commit -a -m ":fire:refactor: 删除不需要的文件"
git push
```

- [ ] IDE已检查ts，去掉tsc

- [ ] 路径alias

```shell
pnpm add -D @types/node
```

- [ ] ESLint

```shell
pnpm add -D eslint eslint-plugin-react @typescript-eslint/eslint-plugin eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react-hooks @typescript-eslint/parser
./node_modules/.bin/eslint --init
git add .eslintrc.js
```

- [ ] Prettier

```shell
pnpm add -D prettier
git add .prettierrc.js
```

