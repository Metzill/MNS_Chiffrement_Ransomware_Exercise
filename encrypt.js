const crypto = require("crypto");
const fs = require("fs");

function pad(data) {
  const blockSize = 16;
  const padLength = blockSize - (data.length % blockSize);
  const padding = Buffer.alloc(padLength, padLength);
  return Buffer.concat([data, padding]);
}

function encryptFile(fileName, key) {
  const data = fs.readFileSync(fileName);
  const paddedData = pad(data);
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
  const encryptedData = Buffer.concat([
    cipher.update(paddedData),
    cipher.final(),
  ]);

  fs.writeFileSync(fileName + ".enc", Buffer.concat([iv, encryptedData]));
}

function main() {
  const fileName = "example.txt";
  const key = crypto.randomBytes(32);

  encryptFile(fileName, key);

  console.log(
    `File ${fileName} has been encrypted and saved as ${fileName}.enc`
  );
  console.log(`Encryption key: ${key.toString("hex")}`);
}

main();
