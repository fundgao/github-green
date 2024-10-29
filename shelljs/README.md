# Github 自动打卡

## 思路

- 服务器安装 Git，并在 Github 贴上 ssh key
- 拉取项目
- 编写 node 脚本，通过 `shelljs` `git pull`、编辑文件 `fs.appendFileSync`、`git add`、`git commit`、`git push`
- 定时，每天定时提交一次
- 服务器启动 node 服务

## RUN

- `npm install`
- `npm run start`

## 卡点
Docker 在 app 目录下工作，此处没有git文件，无法完成git相关操作
