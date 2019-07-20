module.exports = async function(message) {
    var randomSelection = possibleSelections[Math.floor(Math.random()*possibleSelections.length)]
    message.channel.send(
        randomSelection
    );
    console.log(`[${message.guild.name}][${message.channel.name}] ${message.author.username} learned that, through Vader, all things are possible.`);
};

const possibleSelections = [
    `Search your feelings, you know it to be true!`,
    `Nothing is impossible for the Force.`
];