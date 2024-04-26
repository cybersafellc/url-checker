import chalk from "chalk";
import readline from "readline";
import disclaimer from "./interface/disclaimer.js";
import logo from "./interface/logoAscii.js";
import line from "./interface/line.js";
import exe from "./app/exe.js";

const main = async () => {
  const rl = await readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  await logo();
  await disclaimer();
  await line();

  rl.question(
    chalk.green("enter filename (default: domain.txt) : "),
    async (fileName) => {
      return await exe(fileName || "domain.txt"), rl.close();
    }
  );
  return;
};

main();
