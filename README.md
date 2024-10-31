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

- `nohup npm run start &`

  如果报错 `nohup: ignoring input and appending output to 'nohup.out'`

- `nohup npm run start > /dev/null 2> /dev/null &`

- 查看 nohup 进程 `ps -aux | grep nohup` `ps aux | grep 'command_starting_with_nohup'`
- 杀进程 `kill -9 PID`

## 怎样让你的 GitHub 365 天都保持全绿

- [怎样让你的 GitHub 365 天都保持全绿？](https://cloud.tencent.com/developer/article/1796848)


# Github Action

通过 Github Action，定时更新仓库。

- 新增 Action 配置文件 `.github/workflows/ci.yml`
- 修改邮箱 `git config --local user.email "email"`
- 修改提交描述 `git commit --allow-empty -m "feat: github auto commit by github action"`
- Done
