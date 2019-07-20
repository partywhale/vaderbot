module.exports = async function(message) {
    var randomSelection = possibleSelections[Math.floor(Math.random()*possibleSelections.length)]
    message.channel.send(
        randomSelection
    );
    console.log(`[${message.guild.name}][${message.channel.name}] ${message.author.username} spoke of the most dangerous man on Tatooine.`);
};

const possibleSelections = [
    `I sense something. A presence I've not felt since...`,
    `Obi-Wan has taught you well.`
];