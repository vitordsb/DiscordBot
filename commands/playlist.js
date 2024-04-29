const {SlashCommandBuilder} = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("playlist")
        .setDescription("Playlist que fiz para o meu mozão"),

    async execute(interaction) {
        await interaction.reply(`https://www.youtube.com/watch?v=y0wzDTutlmE&list=PLfl4341BWE1mnEa3aO8nsdazbqz6Uni6o&index=5`)
    }
}