module.exports = async function(message) {
    var randomSelection = possibleSelections[Math.floor(Math.random()*possibleSelections.length)]
    message.channel.send(
        randomSelection
    );
    console.log(`[${message.guild.name}][${message.channel.name}] ${message.author.username} misses the Jedi Order.`);
};

const possibleSelections = [
    `I see through the lies of the Jedi. I do not fear the Dark Side as you do.`,
    `The Jedi are gone. The reason why stands before you.`
];