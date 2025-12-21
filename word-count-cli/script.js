import { readFile } from 'node:fs/promises';
import path from 'path';

const filepath = process.argv[2];
const searchWord = process.argv[3];


const fileToRead = filepath ? path.resolve(filepath) : path.resolve('word.txt');

try {
  let filedata = await readFile(fileToRead, 'utf8');

  const wordsArr = filedata
    .toLowerCase()
    .split(/[\W]/)
    .filter((w) => w);

  let words = {};
  let count = 0;

  const lowerSearch = searchWord ? searchWord.toLowerCase() : null;

  wordsArr.forEach((w) => {
    if (w in words) {
      words[w] += 1;
    } else {
      words[w] = 1;
    }


    if (lowerSearch && w === lowerSearch) count++;
  });

  if (searchWord) {
    console.log(`"${searchWord}" appears ${count} time(s)`);
  } else {
    console.log('All word counts:', words);
  }

} catch (err) {
  console.error('Error reading file:', err.message);
}
