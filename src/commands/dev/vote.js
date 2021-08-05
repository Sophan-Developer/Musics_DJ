const Command = require('../../structures/Command');

module.exports = class Votes extends Command {
    constructor(client) {
        super(client, {
            name: 'votes',
            description: 'Shows # of votes',
            usage: '',
            enabled: true,
            cooldown: 5,
            permission: 'devs',
            args: false,
        });
    }
    async run(client, message) {
        client.dbl.getVotes().then(votes => {
            return message.channel.send(`Total votes: ${votes.length}`);
        });
    }
};