module.exports = {
    name: 'purge',
    description: 'get rid of it',
    async execute(message, args) {
        if (message.channel.id === "773017704374075465") {
            const messages = await message.channel.messages.fetch({ limit: 100 });
            messages.filter(u => u.author.username !== "J-Klar").forEach(m => m.delete());
        }
        else {
            const messages = await message.channel.messages.fetch({ limit: 100 });
            messages.filter(u => u.author.bot === true).forEach(m => m.delete());
            // message.delete();
        }
    },
};