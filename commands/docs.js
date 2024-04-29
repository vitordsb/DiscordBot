const {SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder} = require("discord.js")

const row = new ActionRowBuilder()
    .addComponents(
        new StringSelectMenuBuilder()
            .setCustomId("Select")
            .setPlaceholder("Clique para ver a lista de tecnologias")
            .addOptions({
                label: "Java Script",
                description: "Veja sobre a linguagem mais usada em desenvolvimento Web",
                value: "javascript"
            },
            {
                label: "React js",
                description: "Veja sobre o framework front-end mais usado do Java Script",
                value: "react"
            },
            {
                label: "Node js",
                description: "Veja sobre o framework back-end mais usado do java script",
                value: "node"
            },
            {
                label: "Mongo DB",
                description: "Banco de dados com menos dor de cabeça para iniciantes",
                value: "mongo"
            }
        )   
    )
module.exports = {
    data: new SlashCommandBuilder()
        .setName("docs")
        .setDescription("Documentações de tecnologias"),
    async execute(interaction) {
        await interaction.reply({content: "Selecione uma tecnologia abaixo:", components: [row]})
    }
}