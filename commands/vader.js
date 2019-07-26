module.exports = async function(message) {
    
    const possibleSelections = [
        `Yes, master?`,
        `I will make you ash.`,
        `This is how it was always going to end.`,
        `Do you think you can stand against a Dark Lord of the Sith?`,
        `I speak with the voice of the Emperor. A command from me is as a command from him.`,
        `Only your hatred can destroy me.`,
        `All too easy.`,
        `So, you have accepted the truth?`,
        `Do not make me reconsider my generosity.`,
        `It is as the Emperor wills.`,
        `We shall see, <@${message.author.id}>. We shall see.`,
        `Silence!`
    ];
    
    var randomSelection = possibleSelections[Math.floor(Math.random()*possibleSelections.length)]
    message.channel.send(
        randomSelection
    );
    console.log(`[${message.guild.name}][${message.channel.name}] ${message.author.username} summoned Darth Vader.`);
};

