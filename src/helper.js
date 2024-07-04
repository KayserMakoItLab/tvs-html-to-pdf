const fs = require("fs").promises;
const path = require("path");

const convertImagetoBase64 = async (filePath) => {
  const imagePath = path.join(__dirname, filePath);
  const data = await fs.readFile(imagePath);
  const base64Image = data.toString("base64");
  return base64Image;
};

module.exports = {
  convertImagetoBase64,
};
