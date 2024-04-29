const {SlashCommandBuilder, EmbedBuilder} = require("discord.js")

const exampleEmbed = new EmbedBuilder()
	.setColor("Purple")
	.setTitle('Datas com o mozão')
	.setURL('https://discord.js.org/')
	.addFields(
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Dia 07/03', value: 'Nos conhecemos', inline: true },
		{ name: 'Dia 16/03', value: 'Primeira conversa', inline: true },
        { name: 'Dia 23/03', value: 'Primeira declaraçaão', inline: true },
        { name: 'Dia 26/03', value: 'Primeiro eu te amo e primeira madru ATÉ AS 5AM', inline: true },
        { name: 'Dia 25/04', value: 'Ela quase desistiu de mim', inline: true },
        { name: 'Dia 11/05', value: 'Primeira vez cabulando', inline: true },
        { name: 'Dia 24/05', value: 'Primeiro beijo', inline: true },
        { name: 'Dia 19/07', value: 'Pedido de namoro', inline: true },
        { name: 'Dia 29/12', value: 'Primeira serie terminada', inline: true },
        { name: '\u200B', value: '\u200B' },
	)

module.exports = {
    data: new SlashCommandBuilder()
        .setName("amorzinhu")
        .setDescription("Nossas datas de comemoração"),

    async execute(interaction) {
        await interaction.reply({embeds: [exampleEmbed]})
    }
}