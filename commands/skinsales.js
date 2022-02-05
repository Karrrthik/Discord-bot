module.exports = {
    name: 'skinsales',
    description: 'skin sales for this week',
    execute(message) {
        const rp = require('request-promise');
        const url = "https://leagueoflegends.fandom.com/wiki/Sales";
        const Discord = require('discord.js')

        rp(url).then((html) => {
            const $ = require('cheerio').load(html);

            let data = [];
            $('.skin_portrait').each((i, e) => {
                if (i > 4)
                    data.push($(e).text());
            });

            var skins_name = "";
            var skins_price_og = "";
            var skins_price_sale = "";

            for (var i in data) {
                var text = data[i].split(" ");

                for (let j = 0; j < text.length - 2; j++)
                    skins_name += text[j] + " ";
                skins_name += "\n";
                skins_price_og += text[text.length-2] + "\n";
                skins_price_sale += text[text.length-1] + "\n";
            }

            const embed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle("Skin Sales for the Week")
                .addFields(
                    { name: 'Skin', value: skins_name, inline: true },
                    { name: 'Sale Price', value: skins_price_sale, inline: true },
                    { name: 'Normal Price', value: skins_price_og, inline: true });
            
            message.channel.send(embed);
            // console.log(skins);

        }).catch((err) => {
            console.log(err);
            
        })
    },
};