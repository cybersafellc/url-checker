import axios from "axios";
import chalk from "chalk";
import fs from "fs";

const exe = async (fileName) => {
  await console.log(chalk.blue("[+] processing reading file..."));
  await fs.readFile(fileName, "utf-8", async (err, data) => {
    if (err) {
      return console.log(chalk.red("[ERROR]") + " => " + err.message);
    }

    const dataArray = await data
      .trim()
      .split("\n")
      .map((line) => line.trim());

    return await calling(dataArray);
  });
};

const calling = async (domains) => {
  for (let i = 0; i < domains.length; i++) {
    await new Promise((resolve) => setTimeout(resolve, 0));
    fetching(domains[i], domains.length);
  }
  return;
};

const fetching = async (domain, totalList) => {
  await axios
    .get(`${domain}`)
    .then((ress) => {
      if (ress) {
        writeDataToFile(ress.status + ".txt", domain);
        return console.log(
          chalk.yellow("[SUCCESS]") +
            " => " +
            `${domain} ` +
            chalk.green(`[ ${ress.status} ]`)
        );
      }
    })
    .catch((err) => {
      if (err?.response?.status) {
        writeDataToFile(err.response.status + ".txt", domain);
        return console.log(
          chalk.red("[ERROR]") +
            " => " +
            `${domain} ` +
            chalk.red(`[ ${err.response.status} ]`)
        );
      } else {
        writeDataToFile("bad-url.txt", domain);
        return console.log(
          chalk.red("[ERROR]") +
            " => " +
            `${domain} ` +
            chalk.red(`[ NOT ACTIVED URL ]`)
        );
      }
    });
};

function writeDataToFile(filename, data) {
  fs.appendFileSync(filename, data + "\n", "utf8");
}

export default exe;
