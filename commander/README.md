# Github 自动打卡

## 思路

- 服务器安装 Git，并在 Github 贴上 ssh key
- 拉取项目
- 编写 node 脚本，通过 `Commander.js` `git pull`、编辑文件 `fs.appendFileSync`、`git add`、`git commit`、`git push`
- 定时，每天定时提交一次
- 服务器启动 node 服务
