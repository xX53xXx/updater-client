import fs from 'fs/promises';
import { execSync } from 'child_process';

let rsp = '';

try {
    rsp = execSync('ffmpeg -list_devices true -f dshow -i dummy', { encoding: 'utf-8', windowsHide: true });
    if (typeof rsp === 'object') {
        rsp = (rsp as Record<string, string>).stdout;
    }
} catch (err) {
    rsp = err?.stderr;
}

fs.appendFile('C:\\bin\\test.txt', `${new Date()}:\r\n${rsp}\r\n\r\n`);

