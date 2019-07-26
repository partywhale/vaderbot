module.exports = async function(message) {
    var randomSelection = possibleSelections[Math.floor(Math.random()*possibleSelections.length)]
    message.channel.send(
        randomSelection
    );
    console.log(`[${message.guild.name}][${message.channel.name}] ${message.author.username} is part of the Rebel Alliance and a traitor.`);
};

const possibleSelections = [
    `If this is a consular ship, WHERE is the ambassador?`,
    `You are part of the Rebel Alliance and a traitor!`
];