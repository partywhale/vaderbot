module.exports = async function(message) {
    var randomSelection = possibleSelections[Math.floor(Math.random()*possibleSelections.length)]
    message.channel.send(
        randomSelection
    );
    console.log(`[${message.guild.name}][${message.channel.name}] ${message.author.username} was too proud of the technological terror they constructed.`);
};

const possibleSelections = [
    `Don't be too proud of this technological terror you've constructed. The ability to destroy a planet is insignificant next to the power of the Force.`,
    `While I commend the Emperor for completing this powerful space station, I was troubled to read about the installation of an exhaust port leading "directly to it's hyper-sensitive power core." I was further disturbed to hear this opening described as "torpedo-sized."`,
    `Tarkin had vision. You... do not.`
];