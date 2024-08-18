const token = ""; // put ur token in the quotes
const channelid = ""; // put the channel id you want to fish in

const { Client, version } = require('discord.js-selfbot-v13');
const client = new Client();
const fishbotId = '574652751745777665';

client.once('ready', async () => {
  console.log(`account: ${client.user.username}`);
})

client.on('messageCreate', message => {
    if (message.webhookId && message.applicationId == fishbotId) {
        if (message.embeds.length > 0) {
            message.embeds.forEach(embed => {
                if (embed.description) {
                    const codeMatch = embed.description.match(/Code: \*\*(\w+)\*\*/);
                    if (codeMatch) {
                      verificationCode = codeMatch[1];
                      console.log(`Anti-Bot detection has occurred. Found Verification Code: ${verificationCode}`);
                      client.channels.cache.get(channelid).sendSlash(fishbotId, 'verify', verificationCode)
                    }
                }
            });
        }
    }
});

client.login(token);