module.exports = {
    name: 'vote',
    description: 'vote feature',
    async execute(message, args) {
        await message.react("✅");
        await message.react("❌");
    },
};