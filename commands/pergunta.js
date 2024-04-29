const {SlashCommandBuilder} = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("pergunta")
        .setDescription("Vai perguntar quem é a mulher mais linda"),

    async execute(interaction) {
        await interaction.reply(`Quem é a mulher mais linda de todas? 

        È claro que é o meu amor Victorya <3`)
    }
}