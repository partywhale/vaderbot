module.exports = async function(message) {
    var randomSelection = possibleSelections[Math.floor(Math.random()*possibleSelections.length)]
    message.channel.send(
        randomSelection
    );
    console.log(`[${message.guild.name}][${message.channel.name}] ${message.author.username} thinks Vader is Anakin Skywalker. ${message.author.username} is wrong.`);
};

const possibleSelections = [
    `That name no longer has any meaning for me!`,
    `Anakin Skywalker was weak. I destroyed him.`,
    `No. Anakin is dead. I killed him.`,
    `Anakin was a child. I am well accustomed to killing children.`
];