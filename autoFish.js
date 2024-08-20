const config = require('./config.js');

const token = config.token;
const channelid = config.channelId;
const coolDown = config.coolDown;

const { Client } = require('discord.js-selfbot-v13');
const client = new Client();

const fishbotId = '574652751745777665';

client.on('ready', async () => {
  const discordchannel = client.channels.cache.get(channelid);
  console.log(`Started fisher on ${client.user.username}`);
  let fished = 0;
  function goFish() {
    discordchannel.sendSlash(fishbotId, 'fish').then(() => {
      fished += 1;
      console.log(`fished ${fished}`);
      if (fished == casts) {
        console.log(`finished fishing`)
        client.channels.cache.get(channelid).sendSlash(fishbotId, 'sell', 'all')
      };
    })
    .catch(console.error);
  };
  for (counter = 0; counter < casts; counter++) {
    goFish()
    setTimeout(goFish, coolDown*1000);
  };
})
client.login(token);