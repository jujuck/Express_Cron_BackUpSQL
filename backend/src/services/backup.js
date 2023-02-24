const fs = require("fs");
const { spawn } = require("child_process");

const backupDB = () => {
  const dumpFileName = `./backup/${Math.round(Date.now() / 1000)}.dump.sql`;

  const writeStream = fs.createWriteStream(dumpFileName);

  const dump = spawn("mysqldump", [
    "-u",
    process.env.DB_USER,
    `-p${process.env.DB_PASSWORD}`,
    process.env.DB_NAME,
  ]);

  dump.stdout
    .pipe(writeStream)
    .on("finish", () => {
      console.error("Completed");
    })
    .on("error", (err) => {
      console.error(err);
    });
};

module.exports = backupDB;
