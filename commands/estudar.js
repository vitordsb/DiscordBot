const {SlashCommandBuilder, EmbedBuilder} = require("discord.js")

const exampleEmbed = new EmbedBuilder()
	.setColor("Blue")
	.setTitle('Dias de estudos')
	.setURL('https://discord.js.org/')
	.addFields(
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Segundas-feiras', value: 'Estudar JavaScript', inline: true },
		{ name: 'Terças-feiras', value: 'Estudar Machine Learning', inline: true },
        { name: 'Quartas-ferias', value: 'Estudar APIs Rest', inline: true },
        { name: 'Quintas-ferias', value: 'Estudar Cyber Security', inline: true },
        { name: 'Sextas-feiras', value: 'Gerenciamento de dados', inline: true },
        { name: 'Sabados', value: 'Finalizar projetos', inline: true },
        { name: 'Domingos', value: 'Manutenção de projetos', inline: true },
        { name: '\u200B', value: '\u200B' },
	)

module.exports = {
    data: new SlashCommandBuilder()
        .setName("estudar")
        .setDescription("Dias de estudo e matérias a estudar"),

    async execute(interaction) {
        await interaction.reply({embeds: [exampleEmbed]})
    }
}