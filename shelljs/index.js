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

const job = schedule.scheduleJob("00 00 12 * * *", function () {
  main().catch(console.error);
});
