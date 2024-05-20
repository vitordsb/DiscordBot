const {SlashCommandBuilder} = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("pergunta")
        .setDescription("mensagem motivacional"),

    async execute(interaction) {
        await interaction.reply(`O melhor final feliz é o final de semana`)
    }
}