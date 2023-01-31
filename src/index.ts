import fs from 'fs/promises';

fs.appendFile('./test.txt', `\r\n${new Date()}`);

