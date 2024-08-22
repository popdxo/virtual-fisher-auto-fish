# virtual-fisher-auto-fish thats broken because idk
This is an auto fisher for the Virtual Fisher Discord bot

This uses [Discord.js Selfbot](https://github.com/aiko-chan-ai/discord.js-selfbot-v13)

This breaks a lot and I found there isn't much work arounds for my coding capabilities so I'm most likely going to rewrite this soon with another language and modules.

> [!CAUTION]
> This bot can get detected occasionally for automation by Virtual Fisher. You should also be careful using Discord self-bot as they are against Discord's TOS

## How to use

To use this, make sure you have [Node.js](https://nodejs.org/) installed and run:
`npm install discord.js-selfbot-v13@latest`

Clone/download the repo

Open the config.js file in any text editor

Follow the instructions in the comments for the first 4 lines.

Run the script using `node path/to/run.js`


If you need to get your Discord token, press ctrl+shift+i and go to the console tab.

You can use this to output your token: (Credit to NotNexuss)

```javascript
(webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void 0).exports.default.getToken()
```
