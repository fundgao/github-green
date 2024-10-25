#!/usr/bin / env node

import dotenv from "dotenv";
import { exec } from "child_process";
import fs from "fs";
import { Command } from "commander";
import schedule from "node-schedule";

dotenv.config({ path: ".env" });

async function main() {
  const SSH_KEY = process.env.SSH_KEY || "";
  const now = new Date();
  const current_date = `${now.getFullYear()}-${
    now.getMonth() + 1
  }-${now.getDate()} ${now.getHours()}`;
  const program = new Command();
  program.version("2.3.0").description("Github Auto Green");

  program
    .command("git-pull")
    .description("Pull GitHub code")
    .action(async () => {
      await exec("git pull", (error) => {
        if (error) {
          console.error(`执行的错误: ${error}`);
          return;
        }
      });
      // 同步追加  \r\n 表示换行
      fs.appendFileSync("./打卡.txt", "\r\n" + current_date);
    });

  program
    .command("git-add")
    .description("Add GitHub code")
    .action(async () => {
      await exec("git add .", (error) => {
        if (error) {
          console.error(`执行的错误: ${error}`);
          return;
        }
      });
    });

  program
    .command("git-push")
    .description("Push GitHub code")
    .action(async () => {
      await exec(
        `git add . && git commit -m "feat: ${current_date}打卡" && git push`,
        (error) => {
          if (error) {
            console.error(`执行的错误: ${error}`);
            return;
          }
        }
      );
    });

  program.parse();
}

const job = schedule.scheduleJob("* * 15 * * *", function () {
  main().catch(console.error);
});
