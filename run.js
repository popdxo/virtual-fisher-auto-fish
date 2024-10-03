const { spawn } = require('child_process');

const autoFish = spawn('node', ['autoFish.js']);
const antiDetection = spawn('node', ['antiDetection.js']);

autoFish.stdout.on('close', (code) => {
    console.log(`autofish killed itself again. crazy. ${code}`);
    startAutoFish();
});
antiDetection.stdout.on('data', (data) =>
    console.log(`${data}`)
);

//i copied and pasted this because im i have no clue what im doing
