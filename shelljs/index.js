#!/usr/bin/env node

import dotenv from "dotenv";
import fs from "fs";
import shell from "shelljs";
import schedule from "node-schedule";

dotenv.config({ path: ".env" });

async function main() {
  const SSH_KEY = process.env.SSH_KEY || "";
  const now = new Date();
  const current_date = `${now.getFullYear()}-${
    now.getMonth() + 1
  }-${now.getDate()} ${now.getHours()}`;
  if (shell.exec("git pull").code !== 0) {
    shell.echo("Error: Git pull failed");
    shell.exit(1);
  }
  // // 同步追加  \r\n 表示换行
  fs.appendFileSync("./打卡.txt", "\r\n" + current_date);
  if (shell.exec("git add .").code !== 0) {
    shell.echo("Error: Git add failed");
    shell.exit(1);
  }
  if (
    shell.exec(`git commit -m "feat: auto commit ${current_date}"`).code !== 0
  ) {
    shell.echo("Error: Git commit failed");
    shell.exit(1);
  }
  if (shell.exec("git push").code !== 0) {
    shell.echo("Error: Git commit failed");
    shell.exit(1);
  }
}

const job = schedule.scheduleJob("00 17 20 * * *", function () {
  main().catch(console.error);
});

job.on("scheduled", () => {
    console.log("1、每次计划执行前的事件。");
});


job.on("run", () => {
    console.log("3、每次计划执行后的事件。");
});


job.on("success", () => {
    console.log(`4、每次计划执行成功事件。`);
});


job.on("error", (err) => {
    console.log(`[error][${new Date().toLocaleString()}]${err.message}`);
});