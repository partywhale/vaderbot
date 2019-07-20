module.exports = async function(message) {
    message.channel.send(
        `He probably killed him because he wouldn't stop talking and let people enjoy the show.`
    );
    console.log(`[${message.guild.name}][${message.channel.name}] ${message.author.username} was threatened for talking during a performance.`);
};
