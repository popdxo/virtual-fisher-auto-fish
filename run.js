const { spawn } = require('child_process');

const autoFish = spawn('node', ['autoFish.js']);
const antiDetection = spawn('node', ['antiDetection.js']);

autoFish.stdout;
antiDetection.stdout;

//i copied and pasted this because im i have no clue what im doing