module.exports = async function(message) {
    var randomSelection = possibleSelections[Math.floor(Math.random()*possibleSelections.length)]
    message.channel.send(
        randomSelection
    );
    console.log(`[${message.guild.name}][${message.channel.name}] ${message.author.username} believes in Luke Skywalker.`);
};

const possibleSelections = [
    `The son of Skywalker will join us or die.`,
    `The Force is with you, young Skywalker, but you are not a Jedi yet.`
];