const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');

const dotenv = require('dotenv');
dotenv.config()
const { TOKEN, CLIENT_ID, GUILD_ID } = process.env

const fs = require("node:fs")
const path = require("node:path")
const commandsPath = path.join(__dirname, "commands")
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"))

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection()

for (const file of commandFiles){
    const filePath = path.join(commandsPath, file)
    const command = require(filePath)
    if ("data" in command && "execute" in command) {
        client.commands.set(command.data.name, command)
    } else {
        console.log(`Esse comando ${filePath} não funciona, ou vc é burro poha`)
    }
}
// chamar o corno do bot
client.once(Events.ClientReady, readyClient => {
	console.log(`Pronto, login realizado pohaa ${readyClient.user.tag}`);
});

client.login(TOKEN);

client.on(Events.InteractionCreate, async interaction => {
    if (interaction.isStringSelectMenu()){
        const seleted = interaction.values[0]
        switch (seleted){
            case "javascript":
                await interaction.reply("Documentação do Java Script: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript")
            case "react":
                await interaction.reply("Documentação do React js: https://react.dev/learn")
            case "node":
                await interaction.reply("Documentação do Node js: https://nodejs.org/en/learn/getting-started/introduction-to-nodejs")
            case "mongo":
                await interaction.reply("Documentação do Mongo DB: https://learn.mongodb.com/")
        }
    }

    if (!interaction.isChatInputCommand() ) return
    const command = interaction.client.commands.get(interaction.commandName)
    if (!command){
        console.error("Não tem esse comando fela da puta") 
        return
    }
    try {
        await command.execute(interaction)
    } catch (error){
        console.error(error)
        await interaction.reply("Houve erro ao executar")
    }
})