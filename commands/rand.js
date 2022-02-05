module.exports = {
    name: 'rand',
    description: 'choose rand for jew baby',
    async execute(message, args) {
        if (args.length) {
            if (message.content.indexOf(",") >= 0) {
                const text = message.content;
                var arbs = text.split(", ");
                arbs[0] = arbs[0].replace("!rand", "");
                // console.log(arbs);
                // console.log(arbs[Math.floor(Math.random() * arbs.length)]);
                message.channel.send(arbs[Math.floor(Math.random() * arbs.length)]);
            }
            else {
                message.channel.send(args[Math.floor(Math.random() * args.length)]);
            }
        }
    },
};
//https://tenor.com/view/the-goon-prize-wheel-wheel-of-excuses-excuses-no-gif-14618546