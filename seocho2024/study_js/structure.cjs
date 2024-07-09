const fs = require('fs');
const path = require('path');

function getDirectoryStructure(dir, result = {}) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      result[file] = {};
      getDirectoryStructure(filePath, result[file]);
    } else {
      result[file] = 'file';
    }
  });

  return result;
}

const directoryPath = '/Users/cwj/TeamProject/NoticeBoard/next/board';
const structure = getDirectoryStructure(directoryPath);

fs.writeFileSync(
  'directory_structure_board11.json',
  JSON.stringify(structure, null, 2)
);
console.log('디렉토리 구조가 directory_structure.json 파일로 저장되었습니다.');
