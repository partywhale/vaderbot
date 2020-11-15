// Grabs required library: discord.js
const Discord = require('discord.js');


// Grabs the 'commands' files
// Response relegated to separate file when more than a single response + console.log to keep index.js cleaner
const darthPlagueis = require('./commands/darthPlagueis');
const stopTalking = require('./commands/stopTalking');
const impossible = require('./commands/impossible');
const jedi = require('./commands/jedi');
const anakin = require('./commands/anakin');
const kenobi = require('./commands/kenobi');
const lukeskywalker = require('./commands/lukeskywalker');
const diplomat = require('./commands/diplomat');
const deathstar = require('./commands/deathstar');
const vader = require('./commands/vader');


// Initialize bot object
const client = new Discord.Client({
    messageCacheMaxSize: 10           // Will only read 10 messages back
});


client.on('error', console.error);
client.on('ready', () => {
    // Report when logged in
    console.log(`Logged in as ${client.user.tag}!`);
    client.guilds.tap(guild => console.log(`[${guild.name}] [ready] Rejoining server.`));

    // Console summary
    console.log(`\n` + 
                `${client.user.tag} has successfully started in ${client.guilds.size} servers, comprising ${client.channels.size} channels and ${client.users.size} users.` + 
                `\n`);

    // This line sets what the bot is 'playing' - change as you wish
    client.user.setActivity('X-Wing vs. TIE Figher');
});


// Report to console when added to a server
client.on('guildCreate', async (guild) => {
    console.log(`[${guild.name}][guildCreate] Joined server: ${guild.name}.`);
});


// Report to console when deleted from a server
client.on('guildDelete', async (guild) => {
    console.log(`[${guild.name}][guildDelete] Removed from server: ${guild.name}.`);
  });


// Welcome new server members
// Should be re-written so that server admins can specify a default channel or disable greetings
client.on("guildMemberAdd", async (member) => {
    // Look for "general" channel on server
    const generalChannel = member.guild.channels.find(channel => channel.name === 'general');

    // Do nothing if "general" channel not found
    if (!generalChannel) return;

    // Posts welcome message on user join to channel named "general"
    generalChannel.send(
        `It was foretold that you would be here, <@${member.id}>. Our long-awaited meeting has come at last.`
    );
    await console.log(`[${member.guild.name}][guildMemberAdd] ${member.user.tag} was welcomed to the ${member.guild.name} server.`);
});


// Check messages and respond appropriately
client.on('message', async (message) => {
    // Ignore system and bot messages
    if (message.system || message.author.bot) return;
    // Ignore direct messages
    if (!message.channel.name) return;
    if (!message.guild || !message.guild.available) return;

    // Reserve '/vader' command
    const vaderCommand = '/vader';

    // Sanitize special characters from messages; call saniTerm when appropriate
    const saniTerm = message.content.replace(/[^0-9a-z ]/gi, '').toLowerCase().trim();


    // Begin our long if-elseif chain. Remove ping/pong later.
    if (saniTerm === 'ping') {
        message.reply('pong');
    }

    // Looks for '/vader' commands first. No functionality yet, so just returns.
    else if (message.content.startsWith(vaderCommand)) {
        return;
    }

    // Ignore admin commands - common characters are / ? !
    else if ((message.content.startsWith('/')) || (message.content.startsWith('?')) || (message.content.startsWith('!'))) {
        return;
    }
    
    else if (saniTerm.startsWith('did you ever hear the tragedy of darth')) {
        await darthPlagueis(message);
    } else if (saniTerm.includes('his apprentice killed him in his sleep')) {
        await stopTalking(message);
    } else if ((saniTerm.includes(' impossible')) || (saniTerm.startsWith('impossible'))) {
        await impossible(message);
    } else if ((saniTerm.includes(' jedi')) || (saniTerm.startsWith('jedi'))) {
        await jedi(message);
    } else if ((saniTerm.includes(' sophie')) || (saniTerm.startsWith('sophie'))) {
        await message.channel.send(
            `Sophie is a princess. There will be no escape for her this time.`
        );
        await console.log(`[${message.guild.name}][${message.channel.name}] ${message.author.username} heard about Sophie.`);
    } else if ((saniTerm.includes(' breakfast')) || (saniTerm.startsWith('breakfast'))) {
        await message.channel.send(
            `I am eating eggs for breakfast.`
        );
        await console.log(`[${message.guild.name}][${message.channel.name}] ${message.author.username} learned about Vader's breakfast.`);
    } else if ((saniTerm.includes('good')) && ((saniTerm.includes(' vader')) || (saniTerm.startsWith('vader')))) {
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
    } else if ((saniTerm.includes(' impressive')) || (saniTerm.startsWith('impressive'))) {
        await message.channel.send(
            `Most impressive.`
        );
        await console.log(`[${message.guild.name}][${message.channel.name}] ${message.author.username} impressed Vader.`);
    } else if ((saniTerm.includes(' disturbance')) || (saniTerm.startsWith('disturbance'))) {
        await message.channel.send(
            `I have felt it.`
        );
        await console.log(`[${message.guild.name}][${message.channel.name}] ${message.author.username} felt a disturbance in the Force.`);
    } else if ((saniTerm.includes('disintegrat')) || (saniTerm.includes('disintigrat'))) {
        await message.channel.send(
            `No disintegrations!`
        );
        await console.log(`[${message.guild.name}][${message.channel.name}] ${message.author.username} was told not to disintegrate people.`);
    } else if ((saniTerm.includes(' asteroid')) || (saniTerm.startsWith('asteroid'))) {
        await message.channel.send(
            `Asteroids do not concern me, Admiral!`
        );
        await console.log(`[${message.guild.name}][${message.channel.name}] Vader doesn't care about ${message.author.username}'s asteroids.`);
    } else if ((saniTerm.includes(' escape')) || (saniTerm.startsWith('escape'))) {
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
    } else if ((saniTerm.includes(' geonosis')) || (saniTerm.startsWith('geonosis'))) {
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
        await deathstar(message);
    } else if ((saniTerm.includes(' padme')) || (saniTerm.includes(' amidala')) || (saniTerm.includes(' big sad')) || (message.content.toLowerCase().includes('padmé')) || (saniTerm.startsWith('padme')) || (saniTerm.startsWith('amidala')) || (saniTerm.startsWith('big sad'))) {
        await message.channel.send(
            `Where is Padmé? Is she safe? Is she all right?`
        );
        await console.log(`[${message.guild.name}][${message.channel.name}] ${message.author.username} died from the big sad.`);
    } else if ((saniTerm.includes(' anakin')) || (saniTerm.startsWith('anakin'))) {
        await anakin(message);
    } else if ((saniTerm.includes(' sir vader')) || (saniTerm.includes(' mr vader')) || (saniTerm.startsWith('sir vader')) || (saniTerm.startsWith('mr vader'))) {
        await message.channel.send(
            `***Lord*** Vader.`
        );
        await console.log(`[${message.guild.name}][${message.channel.name}] ${message.author.username} is a very poor excuse for a protocol droid.`);
    } else if ((saniTerm.includes(' avenge')) || (saniTerm.includes(' revenge')) || (saniTerm.startsWith('avenge')) || (saniTerm.startsWith('revenge'))) {
        await message.channel.send(
            `Revenge is not the Jedi way.`
        );
        await console.log(`[${message.guild.name}][${message.channel.name}] ${message.author.username} is no Jedi.`);
    } else if ((saniTerm.includes(' kenobi')) || (saniTerm.includes(' obiwan')) || (saniTerm.includes(' obi wan')) || (saniTerm.startsWith('kenobi')) || (saniTerm.startsWith('obiwan')) || (saniTerm.startsWith('obi wan'))) {
        await kenobi(message);
    } else if ((saniTerm.includes('i dont fear')) || (saniTerm.includes('im not afraid'))) {
        await message.channel.send(
            `Then you will die braver than most.`
        );
        await console.log(`[${message.guild.name}][${message.channel.name}] ${message.author.username} died braver than most.`);
    } else if ((saniTerm.includes(' unfair')) || (saniTerm.includes(' not fair')) || (saniTerm.includes(' deal')) || (saniTerm.startsWith('unfair')) || (saniTerm.startsWith('not fair')) || (saniTerm.startsWith('deal'))) {
        await message.channel.send(
            `I am altering the deal. Pray I don't alter it any further.`
        );
        await console.log(`[${message.guild.name}][${message.channel.name}] ${message.author.username} thinks this deal is getting worse all the time.`);
    } else if ((saniTerm.includes('more powerful than you can imagine')) || (saniTerm.includes('more powerful than you could imagine')) || (saniTerm.includes('more powerful than you can possibly imagine')) || (saniTerm.includes('more powerful than you could possibly imagine'))) {
        await message.channel.send(
            `I need not imagine being more powerful. I am more powerful with every step I take away from you.`
        );
        await console.log(`[${message.guild.name}][${message.channel.name}] ${message.author.username} is more powerful than they can possibly imagine.`);
    } else if ((saniTerm.includes(' sister')) || (saniTerm.startsWith('sister'))) {
        await message.channel.send(
            `So, you have a sister. Your feelings have now betrayed her too. Obi-Wan was wise to hide her from me. Now his failure is complete. If you will not turn to the Dark Side, then perhaps she will.`
        );
        await console.log(`[${message.guild.name}][${message.channel.name}] ${message.author.username} has a sister.`);
    } else if ((saniTerm.includes(' luke')) || (saniTerm.startsWith('luke'))) {
        await lukeskywalker(message);
    } else if ((saniTerm.includes(' atheis')) || (saniTerm.startsWith('atheis')) || (saniTerm.includes(' athies')) || (saniTerm.startsWith('athies')) || (saniTerm.includes(' agnost')) || (saniTerm.startsWith('agnost')) || (saniTerm.includes(' i dont believe')) || (saniTerm.startsWith('i dont believe'))) {
        await message.channel.send(
            `I find your lack of faith disturbing.`
        );
        await console.log(`[${message.guild.name}][${message.channel.name}] ${message.author.username} was rebuked for their lack of faith.`);
    } else if ((saniTerm.includes('dont try to frighten us')) || (saniTerm.includes('sad devotion')) || (saniTerm.includes('ancient religion')) || (saniTerm.includes('stolen data tapes'))) {
        await message.channel.send(
            `I find your lack of faith disturbing.`
        );
        await console.log(`[${message.guild.name}][${message.channel.name}] ${message.author.username} was rebuked for their lack of faith.`);
    } else if ((saniTerm.includes(' diplomat')) || (saniTerm.startsWith('diplomat'))) {
        await diplomat(message);
    } else if ((saniTerm.includes(' honored')) || (saniTerm.startsWith('honored')) || (saniTerm.includes(' honoured')) || (saniTerm.startsWith('honoured'))) {
        await message.channel.send(
            `You may dispense with the pleasantries, ${message.author.username}.`
        );
        await console.log(`[${message.guild.name}][${message.channel.name}] ${message.author.username} may dispense with the pleasantries.`);
    } else if ((saniTerm.includes(' as planned')) || (saniTerm.startsWith('as planned'))) {
        await message.channel.send(
            `The Emperor does not share your optimistic appraisal of the situation.`
        );
        await console.log(`[${message.guild.name}][${message.channel.name}] ${message.author.username} will double their efforts.`);
    } else if (saniTerm.includes(' wont leave you')) {
        await message.channel.send(
            `Then you will die.`
        );
        await console.log(`[${message.guild.name}][${message.channel.name}] ${message.author.username} won't leave Vader this time.`);
    } else if ((saniTerm.includes(' temple')) || (saniTerm.startsWith('temple'))) {
        await message.channel.send(
            `There is power in this place. I can feel it stirring...`
        );
        await console.log(`[${message.guild.name}][${message.channel.name}] ${message.author.username} can feel the power in this place.`);
    } else if ((saniTerm.includes(' surrounded')) || (saniTerm.startsWith('surrounded'))) {
        await message.channel.send(
            `All I am surrounded by is fear. And dead men.`
        );
        await console.log(`[${message.guild.name}][${message.channel.name}] ${message.author.username} has Vader surrounded.`);
    } else if ((saniTerm.includes(' rebel')) || (saniTerm.startsWith('rebel')) || (saniTerm.includes(' resist')) || (saniTerm.startsWith('resist'))) {
        await message.channel.send(
            `Resist and die.`
        );
        await console.log(`[${message.guild.name}][${message.channel.name}] ${message.author.username} resisted, and died.`);
    } else if ((saniTerm.includes(' in a month')) || (saniTerm.startsWith('in a month'))) {
        await message.channel.send(
            `You have two weeks.`
        );
        await console.log(`[${message.guild.name}][${message.channel.name}] ${message.author.username} has two weeks.`);
    } else if ((saniTerm.includes(' dark side')) || (saniTerm.startsWith('dark side'))) {
        await message.channel.send(
            `The Dark Side is strength. I am that strength.`
        );
        await console.log(`[${message.guild.name}][${message.channel.name}] ${message.author.username} doesn't know the power of the Dark Side.`);
    } else if ((saniTerm.includes(' the force')) || (saniTerm.startsWith('the force'))) {
        await message.channel.send(
            `You understand much, but not the Force.`
        );
        await console.log(`[${message.guild.name}][${message.channel.name}] ${message.author.username} does not understand the Force.`);
    } else if ((saniTerm.includes(' ahsoka')) || (saniTerm.startsWith('ahsoka')) || (saniTerm.includes(' asokha')) || (saniTerm.startsWith('asokha')) || (saniTerm.includes(' ashoka')) || (saniTerm.startsWith('ashoka'))) {
        await message.channel.send(
            `Ahsoka, why did you leave? Where were you when I needed you? You were selfish. You abandoned me! You failed me! Do you know what I've become?`
        );
        await console.log(`[${message.guild.name}][${message.channel.name}] ${message.author.username} is haunted by the memory of Anakin.`);
    
    // End with a search for 'vader', if nothing else is true
    } else if ((saniTerm.includes(' vader')) || (saniTerm.startsWith('vader'))) {
        await vader(message);
    }
  });


// Logs in, establishing websocket connection
// BOT_TOKEN env used for Heroku config
client.login(process.env.BOT_TOKEN);
