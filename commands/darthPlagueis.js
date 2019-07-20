module.exports = async function(message) {
    message.channel.send(
        `Did ***you*** ever hear the rule about not talking during a performance?`
    );
    console.log(`[${message.guild.name}][${message.channel.name}] ${message.author.username} was yelled at for talking during a performance.`);
};
