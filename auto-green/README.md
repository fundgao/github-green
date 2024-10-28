# node-auto-green

自动保持 GitHub 提交状态常绿。

> a commit a day keeps your girlfriend away.

## 安装

```shell
npm install auto-green
```

或者使用 yarn：

```shell
yarn add auto-green
```

## 使用

```js
const autoGreen = require("auto-green");

const owner = "your name";
const repo = "仓库名";
const auth = "person token";

autoGreen({
  owner,
  repo,
  auth,
  debug: true, // 开启调试模式
});
```

## 认证

参数 `auth` 用于认证。

进入 GitHub 的 [Personal access tokens](https://github.com/settings/tokens) 页面，点击 “Generate new token” 按钮。此步骤会提示你输入密码，然后进入新建页面。

勾选 repo/public_repo，点击下面的 “Generate token” 按钮。

注意：token 生成后只会显示一次，因此你必须复制 token 后再刷新页面。如果你忘了复制 token，你可以重写生成新的 token。
