const Discord = require("discord.js")
const client = new Discord.Client()

const prefix = "."

var role = new Array()
role.push(["Paladins", "426961944650579986"])
role.push(["Fortnite", "426961947422883840"])
role.push(["League_of_legends", "426962086413729803"])
role.push(["Battlerite", "426962086497615902"])
role.push(["Warframe", "426962086501941248"])

client.on("ready", () => {
    console.log("Je me prépare!")

    client.user.setActivity("Je choisis les rôles!")

    console.log("Je suis prêt!")
})

client.on("message", (message) => {
    if (message.author.bot) {return}
    if (!message.content.startsWith(prefix)) {return}

    msg = message.content.split(" ")
    
    if (msg[0] === prefix + "AddGame") {
        for (let n = 0; n < role.length; n++) {
            if (role[n][0] === msg[1]) {
                message.member.addRole(role[n][1])

                message.reply("Bienvenue dans " + role[n][0] + ", amuse toi bien!")
                return
            }
        }
    }

    if (msg[0] === prefix + "RemoveGame") {
        for (let n = 0; n < role.length; n++) {
            if (role[n][0] === msg[1]) {
                message.member.removeRole(role[n][1])

                message.reply("Vous avez quittez " + role[n][0] + " c'est telement dommage on s'amusait bien!")
                return
            }
        }
    }

    if (msg[0] === prefix + "help") {
        let embed = new Discord.RichEmbed()
            .setAuthor(client.user.username, client.user.avatarURL)
            .setTitle("Aide du bot Game_Bot")
            .setColor(0x00ff00)
            .addField("Command :", ".AddGame \"NomDuJeu\" : Pour s'ajouter un role" + "\n" +
            ".RemoveGame \"NomDuJeu\" : Pour quiter un role", false)
            .addField("Jeux :", "Paladins \nFornite \nLeague_oflegends \nBattlerite \nWarframe", false)

        return
    }

    message.reply("Erreur de command !")
})

client.login(process.env.TOKEN)
