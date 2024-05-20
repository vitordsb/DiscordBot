const {SlashCommandBuilder} = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("playlist")
        .setDescription("Playlist foco de estudo"),

    async execute(interaction) {
        await interaction.reply(`https://www.youtube.com/watch?v=P3kIHuvqRZ0&list=PLfl4341BWE1kN35fCGZ3C0JQ5bCoebGsH&index=3`)
    }
}