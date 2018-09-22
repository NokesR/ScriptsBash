const Discord = require ('discord.js');

const bot = new Discord.Client();

bot.login("paste your token bot");

var prefix = ("+")

//sytème rich presence # by OnDebian

bot.on('ready', function() {
    bot.user.setPresence({game:{name:"Aide: +help", url:'https://twitch.tv/ondebian', type:"STREAMING"}})
    console.log("Bot is already online");
});

//message de bienvenue

bot.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "bienvenue").send(`:loudspeaker: **Bienvenue, __${member.user.username}__ sur le discord de VinesUp :smile: **`)
})

bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "bienvenue").send(`:paperclip: **Bye, __${member.user.username}__ au plaisir de vous revoir :smirk:**`)
})

bot.on('message', message => {

      if (message.content === prefix + "548984re48re84r8e484r8e48r4e4r84e")
      var infembed = new Discord.RichEmbed()
        .setColor("random")
        .addField('```Latence du BOT: ```', new Date().getTime() - message.createdTimestamp + " ms ")
        .addField('```(Ceci est le ping de l\'API Discord.gg et non de la machine.```', '\u200B')
        message.channel.send(infembed)
        console.log("Commande !ping effectué");

//avatar

    if (message.content === '+avatar') {
      var infembed = new Discord.RichEmbed()
          .setColor("#21a529")
          .setTitle("__**Avatar**__", '\u200B')
          .setDescription("Service suspendu par WarZøx#3729")
          .setFooter("VinesUp - Avatar")
          message.channel.send(infembed)
      }

      if (message.content === '.avatarenable') {
        var infembed = new Discord.RichEmbed()
            .setColor("#21a529")
            .setTitle("__**Avatar**__", '\u200B')
            .setDescription("Service désormais activé ;)")
            .setFooter("VinesUp - Avatar")
            message.channel.send(infembed)
        }

        if (message.content === '.avatardisable') {
          var infembed = new Discord.RichEmbed()
              .setColor("#21a529")
              .setTitle("__**Avatar**__", '\u200B')
              .setDescription("Service désormais désactivé :p")
              .setFooter("VinesUp - Avatar")
              message.channel.send(infembed)
          }

        if (message.content === '.avatarstatus') {
            var infembed = new Discord.RichEmbed()
                .setColor("#21a529")
                .setTitle("__**Avatar**__", '\u200B')
                .setDescription("Service désactivé (.avatarenable pour activation).")
                .setFooter("VinesUp - Avatar")
                message.channel.send(infembed)
            }

        if (message.content === '+avatarstatus') {
            var infembed = new Discord.RichEmbed()
                .setColor("#21a529")
                .setTitle("__**Avatar**__", '\u200B')
                .setDescription("Service désactivé (.avatarenable pour activation).")
                .setFooter("VinesUp - Avatar")
                message.channel.send(infembed)
            }

//annonce 

        if (message.content === '+1') {
            var infembed = new Discord.RichEmbed()
                .setColor("#21a529")
                .setTitle("Idée", '\u200B')
                .setDescription("Régler le drop en 10 coups en gapple. (Par Meliodas)")
                .setFooter("- Nøkes")
                message.channel.send(infembed)
            }

        if (message.content === '+1') {
            var infembed = new Discord.RichEmbed()
                .setColor("#21a529")
                .setTitle("Idée", '\u200B')
                .setDescription("Mettre en place un /ignore pour les messages. (Par Meliodas)")
                .setFooter("- Nøkes")
                message.channel.send(infembed)
            }

        if (message.content === '+1') {
            var infembed = new Discord.RichEmbed()
                .setColor("#21a529")
                .setTitle("Idée", '\u200B')
                .setDescription("Régler les KBs en Sumo. (Par Meliodas)")
                .setFooter("- Nøkes")
                message.channel.send(infembed)
            }

        if (message.content === '+1') {
            var infembed = new Discord.RichEmbed()
                .setColor("#21a529")
                .setTitle("Idée", '\u200B')
                .setDescription("Régler le soucis des blocs de verre (**/freeze bug**), et régler les blocs manquants sur certines maps (**Spleef**). (Par Nøkes)")
                .setFooter("- Nøkes")
                message.channel.send(infembed)
            }

        if (message.content === '+1') {
            var infembed = new Discord.RichEmbed()
                .setColor("#21a529")
                .setTitle("Idée", '\u200B')
                .setDescription("Enlever les enclumes dans la map train. (Par DICTATOR_gisher)")
                .setFooter("- Nøkes")
                message.channel.send(infembed)
            }

        if (message.content === '+1') {
            var infembed = new Discord.RichEmbed()
                .setColor("#21a529")
                .setTitle("Idée", '\u200B')
                .setDescription("Ajouter un « Rechercher un joueur » sur le site et montrer ses elos etc. (Par iNeyZik_)")
                .setFooter("- Nøkes")
                message.channel.send(infembed)
            }

        if (message.content === '+1') {
            var infembed = new Discord.RichEmbed()
                .setColor("#21a529")
                .setTitle("Idée", '\u200B')
                .setDescription("Refaire le plugin de Tab/Practice. (Par Nøkes)")
                .setFooter("- Nøkes")
                message.channel.send(infembed)
            }

        if (message.content === '+1') {
            var infembed = new Discord.RichEmbed()
                .setColor("#21a529")
                .setTitle("Idée", '\u200B')
                .setDescription("Inclure un plugin BungeeCord pour le /ping ... (Par Nøkes)")
                .setFooter("- Nøkes")
                message.channel.send(infembed)
            }

//commande ts

    if (message.content === prefix + "ts"){
    var infembed = new Discord.RichEmbed()
        .setColor("#21a529")
        .setTitle("__**TeamSpeak**__", '\u200B')
        .setDescription("L'adresse de notre TeamSpeak officiel est ```ts.vinesup.com```")
        .setFooter("VinesUP - Commande ts")
        message.channel.send(infembed)
    }

//commande serverinfo

    if (message.content === prefix + "serverinfo"){
        let online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
        let day = message.guild.createdAt.getDate()
        let month = 1 + message.guild.createdAt.getMonth()
        let year = message.guild.createdAt.getFullYear()
         let sicon = message.guild.iconURL;
         let serverembed = new Discord.RichEmbed()
         .setAuthor(message.guild.name, sicon)
         .setFooter(`Serveur crée le • ${day}.${month}.${year}`)
         .setColor("#21a529")
         .setThumbnail(sicon)
         .addField("Serveur ID", message.guild.id, true)
         .addField("Nom", message.guild.name, true)
         .addField("Créateur", "No Set", true)
         .addField("Region", message.guild.region, true)
         .addField("Canaux", message.guild.channels.size, true)
         .addField("Membres", message.guild.memberCount, true)
         .addField("Humains", message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size, true)
         .addField("Robots", message.guild.members.filter(m => m.user.bot).size, true)
         .addField("Connectés", online.size, true)
         .addField("Rôles", message.guild.roles.size, true);
         message.channel.send(serverembed);
    }

//commande annonce # v1

    if (message.content === prefix + "NOKESCOMMAND0209")
        message.guild.channels.find('id', '446030079454216213').send(':white_check_mark: Bonsoir @everyone !\nLa session des recrutements (*Moderators/Developers*) n\' est toujours pas finie! :wink: \n\nVous pouvez dès maintenant postuler sur notre site web :)\n\n:arrow_right: **Developers** : https://vinesup.com/recruitment/developer/.\n:arrow_right: **Moderators** : https://vinesup.com/recruitment/moderator/.\n\n*(Une réponse sous 5jours (ouvrés) est normalement donnée, si cela n\'est pas le cas, pas d\'inquiétude, pour en être sûr veuillez contactez WarZox.)*\n\nMerci :call_me: \n\n- *Nøkes*')

//command botinfo

    if (message.content === prefix + "botinfo"){
        let online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
        let day = message.guild.createdAt.getDate()
        let month = 1 + message.guild.createdAt.getMonth()
        let year = message.guild.createdAt.getFullYear()
         let sicon = message.guild.iconURL;
         let serverembed = new Discord.RichEmbed()
         .setAuthor(message.guild.name, sicon)
         .setFooter(`Dernière Update : 10/09/18`)
         .setColor("#21a529")
         .setThumbnail(sicon)
         .addField("Nom: ", "VinesUP Assistance", true)
         .addField("Créateur/Développeur: ", "Ryan MARC - (@NokesOffi)", true)
         .addField("Système de distribution: ", "Linux/Debian 8", true)
         .addField("Hébergeur: ", "FlashCloud.eu", true)
         .addField("Lien de téléchargement: ", "https://flashcloud.eu/p/ryan/vinesupbot.jar", true)
         .addField("Crée avec: ", "Java-8", true);
         message.channel.send(serverembed);
    }

//command site

    if (message.content === prefix + "site"){
        var infembed = new Discord.RichEmbed()
        .setColor("#21a529")
        .setTitle("__**Site**__", '\u200B')
        .setDescription("L'adresse de notre Site Web est:")
        .addField('```https://vinesup.com```', '\u200B')
        .setFooter("VinesUP - Commande site")
        message.channel.send(infembed)
    }

//command ip

    if (message.content === prefix + "ip"){
        var infembed = new Discord.RichEmbed()
            .setColor("#21a529")
            .setTitle("__**IP**__", '\u200B')
            .setDescription("L'adresse de notre Serveur est:")
            .addField('```vinesup.com```', '\u200B')
            .setFooter("VinesUP - Commande IP")
        message.channel.send(infembed)
    }

//command twitter

    if (message.content === prefix + "twitter"){
      var infembed = new Discord.RichEmbed()
      .setColor("#21a529")
      .setTitle("__**Twitter**__", '\u200B')
      .setDescription("L'adresse de notre twitter officiel est:")
      .addField('```https://twitter.com/VinesUpOff```', '\u200B')
      .setFooter("VinesUp - Commande twitter")
      message.channel.send(infembed)
  }

//command dev

    if (message.content === prefix + "dev"){
      var infembed = new Discord.RichEmbed()
      .setColor("#21a529")
      .setTitle("__**Site**__", '\u200B')
      .setDescription("Le développeur du bot est: ```Ryan Marc (@NokesOffi)```")
      .setFooter("VinesUp - Commande dév")
      message.channel.send(infembed)
  }

//command annonce

  if (message.content === prefix + "annonce"){
    var infembed = new Discord.RichEmbed()
    .setColor("#21a529")
    .setTitle("__**ANNONCE**__", '\u200B')
    .setDescription(".annonce <text>")
    .addField('Crée un message en mentionnant here.', '\n')
    .setFooter("VinesUp - Commande annonce")
    message.channel.send(infembed)
  }

//command concours

  if (message.content === prefix + "concours"){
    var infembed = new Discord.RichEmbed()
    .setColor("#21a529")
    .setTitle("__**Concours**__", '\u200B')
    .setDescription(".concourscreate")
    .addField('En cours de développement ...', '\u200B')
    .setFooter("VinesUp - Commande dév")
    message.channel.send(infembed)
  }

  //ticket

  if (message.content === prefix + "ticketclose"){
    var infembed = new Discord.RichEmbed()
    .setColor("#21a529")
    .setTitle("__**Système de ticket**__", '\u200B')
    .setDescription("Fermeture du ticket actuel ...")
    .addField('Aucuns ticket ouvert (.ticketcreate)', '\u200B')
    .setFooter("VinesUp - Commande ticketclose")
    message.channel.send(infembed)
}

  if (message.content === prefix + "ticketcreate"){
    var infembed = new Discord.RichEmbed()
    .setColor("#21a529")
    .setTitle("__**Système de ticket**__", '\u200B')
    .setDescription("Ouverture d'un ticket en cours ...")
    .addField('Système perturbé par ', '\u200B')
    .setFooter("VinesUp - Commande ticketopen")
    message.channel.send(infembed)
  }

  if (message.content === prefix + "ticketenable"){
    var infembed = new Discord.RichEmbed()
    .setColor("#21a529")
    .setTitle("__**Système de ticket**__ - 502 Echec", '\u200B')
    .addField('Permissions non permises :x: ', '\u200B')
    .setFooter("VinesUp - Commande ticketenable")
    message.channel.send(infembed)
  }

  if (message.content === prefix + "ticketdisable"){
    var infembed = new Discord.RichEmbed()
    .setColor("#21a529")
    .setTitle("Erreur 502 - Autorisation non permise", '\n')
    .addField('Permissions non permises :x: ', 'Veuillez contactez un administrateur.')
    .setFooter("VinesUp - Commande ticketdisable")
    message.channel.send(infembed)
  }

  if (message.content === prefix + "tickethelp"){
    var infembed = new Discord.RichEmbed()
    .setColor("#21a529")
    .setTitle("__**Système de ticket**__", '\u200B')
    .setDescription("\n__**.ticketcreate**__ : Sert à crée un ticket.\n__**.ticketclose**__ : Sert à fermer le ticket ouvert.\n__**.ticketenable**__ : Active le système de ticket.\n__**.ticketdisable**__ : Désactives le système de ticket.")
    .addField('Le système subis des perturbations non prévues.', '\u200B')
    .setFooter("VinesUp - Commande ticket")
    message.channel.send(infembed)
  }

    if (message.content === prefix + "worldcup"){
          var infembed = new Discord.RichEmbed()
          .setColor("#21a529")
          .setTitle("Finale Coupe du monde 2018", '\u200B')
          .setDescription('\n:flag_fr: `France`    4\n                Terminé\n:flag_cr: `Croatie`    2')
          .setFooter("Commande éffectuée par: "+message.author.tag)
          console.log("Commande worldcup effectuée!");
          message.channel.send(infembed)
      }

    //command help

    if (message.content === prefix + "help"){
          var infembed = new Discord.RichEmbed()
          .setColor("#21a529")
          .setTitle("__**Help**__", '\u200B')
          .setDescription('- `+avatar` : Permet de voir votre avatar. (Désactivé)\n- `+serverinfo` : Permet de voir les informations sur le discord.\n- `+botinfo` : Permet de voir les informations sur le bot.\n- `+tickethelp` : Permet de voir les commandes.\n- `+recrutements` : Permet de voir les planches horaires des recrutements. (Désactivé)\n- `+ts` : Permet de voir le lien d\'accès au TeamSpeak Support.\n- `+ip` : Permet de voir le lien d\'accès au ServeurMC.\n- `+site` : Permet de voir le lien d\'accès du site internet.')
          .setFooter("VinesUp - Commande help")
          console.log("Commande help effectuée!");
          message.channel.send(infembed)
      }

    const args = message.content.slice(1).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

//command clear

    if(command === "clear"){
                if(!args[0]){
                        var err_code = new Discord.RichEmbed()
                        .setTitle('Erreur - Commande non trouvée')
                        .setDescription('Tu n\'a pas précisé le nombre de message !')
                        .setColor('#e74c3c')
                        .setFooter("Commande éffectuée par: "+message.author.tag)
                        message.channel.send(err_code);
                }else if(!message.member.hasPermission("MANAGE_MESSAGES")){
                        var err_code = new Discord.RichEmbed()
                        .setTitle('Erreur 502 - Autorisation non permise')
                        .setDescription('Tu n\'a pas la permission d\'executer cette commande !')
                        .setColor('#e74c3c')
                        .setFooter("Commande éffectuée par: "+message.author.tag)
                        message.channel.send(err_code);
                }else if(isNaN(args[0])){
                        var err_code = new Discord.RichEmbed()
                        .setTitle('Erreur - Commande non trouvée')
                        .setDescription('L\'argument donné n\'est pas un nombre !')
                        .setColor('#e74c3c')
                        .setFooter("Commande éffectuée par: "+message.author.tag)
                        message.channel.send(err_code);
                }else if(parseInt(args[0]) > 99){
                        var err_code = new Discord.RichEmbed()
                        .setTitle('Erreur - Commande non trouvée')
                        .setDescription('Tu ne peux effacer que 99 messages max. !')
                        .setColor('#e74c3c')
                        .setFooter("Commande éffectuée par: "+message.author.tag)
                        message.channel.send('err_code');
                }else{
                        message.channel.fetchMessages()
                        .then(messages => {
                                try {
                                        message.channel.bulkDelete(parseInt(args[0]));
																				var clear_code = new Discord.RichEmbed()
                                .setTitle('Succès :')
                                .setDescription(args[0]+' message(s) ont été supprimé !')
                                .setColor('#e74c3c')
                                .setFooter("Commande éffectuée par: "+message.author.tag)
                                message.channel.send(clear_code);
                                } catch (err) {
                                console.log(err);
                                }
                        })
                }
        }

})

bot.login('paste your token bot');
