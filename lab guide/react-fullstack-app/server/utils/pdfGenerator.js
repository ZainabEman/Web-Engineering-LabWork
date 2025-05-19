const fs = require('fs');
const path = require('path');

exports.createPDF = async (text) => {
  const filePath = path.join(__dirname, '../../client/public', 'report.pdf');
  fs.writeFileSync(filePath, `PDF Report: ${text}`);
  return filePath;
};