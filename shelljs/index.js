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
  // shell.exec("git pull");
  // // 同步追加  \r\n 表示换行
  // fs.appendFileSync("./打卡.txt", "\r\n" + current_date);
  // shell.exec("git add .");
  // shell.exec(`git commit -m "feat: ${current_date}打卡`);
  // shell.exec("git push");

  if (shell.exec("git add .").code !== 0) {
    shell.echo("Error: Git add failed");
    shell.exit(1);
  }
  if (shell.exec(`git commit -m "feat: ${current_date}打卡"`).code !== 0) {
    shell.echo("Error: Git commit failed");
    shell.exit(1);
  }
  if (shell.exec("git push").code !== 0) {
    shell.echo("Error: Git commit failed");
    shell.exit(1);
  }
}

const job = schedule.scheduleJob("00 19 * * * *", function () {
  main().catch(console.error);
});
