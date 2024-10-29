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

Docker 在 app 目录下工作，此处没有 git 文件，无法完成 git 相关操作

## 解决

通过云服务器上的终端，运行永久命令

## 怎样让你的 GitHub 365 天都保持全绿

- [怎样让你的 GitHub 365 天都保持全绿？](https://cloud.tencent.com/developer/article/1796848)
