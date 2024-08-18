const token = ""; // put ur token in the quotes
const channelid = ""; // put the channel id you want to fish in
casts = 10; // put the number of casts you want to cast
coolDown = 3.5; // put ur cooldown in seconds

const { Client } = require('discord.js-selfbot-v13');
const client = new Client();

const fishbotId = '574652751745777665';

client.on('ready', async () => {
  const discordchannel = client.channels.cache.get(channelid);
  console.log(`account: ${client.user.username}`);
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
    setTimeout(goFish, coolDown*1000);
  };
})
client.login(token);
