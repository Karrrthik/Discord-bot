module.exports = {
    name: 'sheesh',
    description: 'you do be sheeshing',
    execute(message) {
        const sheeshes = [
            "https://tenor.com/view/sheesh-shee-unbelievable-wow-interesting-gif-21718182",
            "https://tenor.com/view/sheesh-gif-21357175",
            "https://tenor.com/view/ronan-sheesh-sheesh-gif-21479305",
            "https://tenor.com/view/sheesh-nice-gif-21095005",
            "https://tenor.com/view/addysheesh-sheesh-gif-21436138"
        ]
        message.channel.send(sheeshes[Math.floor(Math.random() * 5)]);
        // message.delete();
    },
};