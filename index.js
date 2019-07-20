const Discord = require('discord.js');
const auth = require('./auth.json');

const darthPlagueis = require('./commands/darthPlagueis');
const stopTalking = require('./commands/stopTalking');
const impossible = require('./commands/impossible');
const jedi = require('./commands/jedi');
const anakin = require('./commands/anakin');
const kenobi = require('./commands/kenobi');

const client = new Discord.Client({
    messageCacheMaxSize: 10     // Will only read 10 messages back
});

client.on('error', console.error);
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.guilds.tap(guild => console.log(`[${guild.name}] [ready] Rejoining server.`));
    client.user.setActivity('X-Wing vs. TIE Figher');
});

client.on('guildCreate', async (guild) => {
    console.log(`[${guild.name}][guildCreate] Joined server.`);
});

client.on('message', async (message) => {
    if (message.system || message.author.bot) return;   // Ignore system and bot messages
    const vaderCommand = '/vader';

    const saniTerm = message.content.replace(/[^0-9a-z ]/gi, '').toLowerCase().trim();

    if (saniTerm === 'ping') {
        message.reply('pong');
    } else if (saniTerm.startsWith('did you ever hear the tragedy of darth')) {
        await darthPlagueis(message);
    } else if (saniTerm.includes('his apprentice killed him in his sleep')) {
        await stopTalking(message);
    } else if (saniTerm.includes('impossible')) {
        await impossible(message);
    } else if (saniTerm.includes('jedi')) {
        await jedi(message);
    } else if (saniTerm.includes('sophie')) {
        await message.channel.send(
            `Sophie is a princess. There will be no escape for her this time.`
        );
        await console.log(`[${message.guild.name}][${message.channel.name}] ${message.author.username} heard about Sophie.`);
    } else if (saniTerm.includes('breakfast')) {
        await message.channel.send(
            `I am eating eggs for breakfast.`
        );
        await console.log(`[${message.guild.name}][${message.channel.name}] ${message.author.username} learned about Vader's breakfast.`);
    } else if ((saniTerm.includes('good')) && (saniTerm.includes('vader'))) {
        await message.channel.send(
            `I am a **bad** guy.`
        );
        await console.log(`[${message.guild.name}][${message.channel.name}] ${message.author.username} learned about Vader's alignment.`);
    } else if (saniTerm.includes('never join')) {
        await message.channel.send(
            `If only you knew the power of the Dark Side.`
        );
        await console.log(`[${message.guild.name}][${message.channel.name}] ${message.author.username} won't join Vader.`);
    } else if (saniTerm.includes('told me you killed him')) {
        await message.channel.send(
            `No, I am your father.`
        );
        await console.log(`[${message.guild.name}][${message.channel.name}] ${message.author.username} learned the truth of their parentage.`);
    } else if (saniTerm.includes('i am your father')) {
        await message.channel.send(
            `No, **I** am your father.`
        );
        await console.log(`[${message.guild.name}][${message.channel.name}] ${message.author.username} made a false claim about their parentage.`);
    } else if (saniTerm.includes('impressive')) {
        await message.channel.send(
            `Most impressive.`
        );
        await console.log(`[${message.guild.name}][${message.channel.name}] ${message.author.username} impressed Vader.`);
    } else if (saniTerm.includes('disturbance')) {
        await message.channel.send(
            `I have felt it.`
        );
        await console.log(`[${message.guild.name}][${message.channel.name}] ${message.author.username} felt a disturbance in the Force.`);
    } else if ((saniTerm.includes('disintegrat')) || (saniTerm.includes('disintigrat'))) {
        await message.channel.send(
            `No disintegrations!`
        );
        await console.log(`[${message.guild.name}][${message.channel.name}] ${message.author.username} was told not to disintegrate people.`);
    } else if (saniTerm.includes('asteroid')) {
        await message.channel.send(
            `Asteroids do not concern me, Admiral!`
        );
        await console.log(`[${message.guild.name}][${message.channel.name}] Vader doesn't care about ${message.author.username}'s asteroids.`);
    } else if (saniTerm.includes('escape')) {
        await message.channel.send(
            `Escape is not his plan. I must face him, alone.`
        );
        await console.log(`[${message.guild.name}][${message.channel.name}] ${message.author.username} is misinformed about Kenobi's intentions on the Death Star.`);
    } else if (saniTerm.includes('high ground')) {
        await message.channel.send(
            `You underestimate my power!`
        );
        await console.log(`[${message.guild.name}][${message.channel.name}] ${message.author.username} underestimated Vader's power.`);
    } else if (saniTerm.includes('do what i must')) {
        await message.channel.send(
            `You will try.`
        );
        await console.log(`[${message.guild.name}][${message.channel.name}] ${message.author.username} tried to do what they must.`);
    } else if (saniTerm.includes('geonosis')) {
        await message.channel.send(
            `I have no feelings regarding Geonosis.`
        );
        await console.log(`[${message.guild.name}][${message.channel.name}] ${message.author.username} is concerned about Vader visiting Geonosis.`);
    } else if (saniTerm.includes('you promised')) {
        await message.channel.send(
            `I promised you nothing.`
        );
        await console.log(`[${message.guild.name}][${message.channel.name}] ${message.author.username} was thrown out of an airlock.`);
    } else if ((saniTerm.includes('i loved you')) || (saniTerm.includes('you were my brother'))) {
        await message.channel.send(
            `You are a liar and a coward! If you loved me, Obi-Wan, you would have killed me.`
        );
        await console.log(`[${message.guild.name}][${message.channel.name}] ${message.author.username} is a liar and a coward.`);
    } else if (saniTerm.includes('death star')) {
        await message.channel.send(
            `Don't be too proud of this technological terror you've constructed. The ability to destroy a planet is insignificant next to the power of the Force.`
        );
        await console.log(`[${message.guild.name}][${message.channel.name}] ${message.author.username} was too proud of the technological terror they constructed.`);
    } else if ((saniTerm.includes('padme')) || (saniTerm.includes('amidala')) || (saniTerm.includes('big sad'))) {
        await message.channel.send(
            `Where is Padmé? Is she safe? Is she all right?`
        );
        await console.log(`[${message.guild.name}][${message.channel.name}] ${message.author.username} died from the big sad.`);
    } else if (saniTerm.includes('anakin')) {
        await anakin(message);
    } else if ((saniTerm.includes('sir vader')) || (saniTerm.includes('mr vader'))) {
        await message.channel.send(
            `***Lord*** Vader.`
        );
        await console.log(`[${message.guild.name}][${message.channel.name}] ${message.author.username} is a very poor excuse for a protocol droid.`);
    } else if ((saniTerm.includes('avenge')) || (saniTerm.includes('revenge'))) {
        await message.channel.send(
            `Revenge is not the Jedi way.`
        );
        await console.log(`[${message.guild.name}][${message.channel.name}] ${message.author.username} is no Jedi.`);
    } else if ((saniTerm.includes('kenobi')) || (saniTerm.includes('obiwan')) || (saniTerm.includes('obi wan'))) {
        await kenobi(message);
    } else if ((saniTerm.includes('i dont fear')) || (saniTerm.includes('im not afraid'))) {
        await message.channel.send(
            `Then you will die braver than most.`
        );
        await console.log(`[${message.guild.name}][${message.channel.name}] ${message.author.username} died braver than most.`);
    } else if ((saniTerm.includes('unfair')) || (saniTerm.includes('not fair')) || (saniTerm.includes('deal'))) {
        await message.channel.send(
            `I am altering the deal. Pray I don't alter it any further.`
        );
        await console.log(`[${message.guild.name}][${message.channel.name}] ${message.author.username} thinks this deal is getting worse all the time.`);
    } else if ((saniTerm.includes('more powerful than you can imagine')) || (saniTerm.includes('more powerful than you could imagine')) || (saniTerm.includes('more powerful than you can possibly imagine')) || (saniTerm.includes('more powerful than you could possibly imagine'))) {
        await message.channel.send(
            `I need not imagine being more powerful. I am more powerful with every step I take away from you.`
        );
        await console.log(`[${message.guild.name}][${message.channel.name}] ${message.author.username} is more powerful than they can possibly imagine.`);
    } else if (saniTerm.includes('sister')) {
        await message.channel.send(
            `So, you have a sister. Your feelings have now betrayed her too. Obi-Wan was wise to hide her from me. Now his failure is complete. If you will not turn to the Dark Side, then perhaps she will.`
        );
        await console.log(`[${message.guild.name}][${message.channel.name}] ${message.author.username} has a sister.`);
    }
  });

client.login(auth.token);