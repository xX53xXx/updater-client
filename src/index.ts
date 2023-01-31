import fs from 'fs/promises';
import { execSync } from 'child_process';

const data = execSync('ffmpeg -list_devices true -f dshow -i dummy').toString();
fs.appendFile('C:\\bin\\updater-client\\test.txt', `${new Date()}:\r\n${data}\r\n\r\n`);

