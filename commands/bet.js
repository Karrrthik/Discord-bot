module.exports = {
    name: 'bet',
    description: 'bet feature',
    async execute(message, args) {
        if (args.length > 2) {
            const user = args[0];
            const factor = args[1];
            const wager = args[2];
            message.reply("wagering that " + user + " " + factor + " " + wager);
        }
    },
};