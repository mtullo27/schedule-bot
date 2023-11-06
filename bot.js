const Discord = require("discord.js")
const client = new Discord.Client({
    intents: ["GUILDS", "DIRECT_MESSAGES", "GUILD_MESSAGES"],
    partials: ["MESSAGE", "CHANNEL"]
})
const prefix = "!" // You can change the prefix if needed

client.once("ready", () => {
    console.log("Bot is online!")
})

client.on("messageCreate", (message) => {
    console.log(message.content)
    if (!message.content.startsWith(prefix)) return

    const args = message.content.slice(prefix.length).trim().split(/ +/)
    const command = args.shift().toLowerCase()

    console.log(command)
    if (command === "schedule") {
        console.log("schedule")
        if (args.length < 2) {
            if (message.author.id.toString === "139910247195213824") {
                return message.channel.send("Use the command right you bozo")
            } else if (message.author.id.toString === "174974574105067520") {
                return message.channel.send(
                    "Use the command right you greasy loafer"
                )
            } else {
                return message.channel.send(
                    "Please use the correct format: !schedule @user date/time (MM/DD HH:MM)"
                )
            }
        }

        const targetUser = message.mentions.users.first()
        const dateAndTime = args.slice(1).join(" ")

        if (!targetUser) {
            if (message.author.id.toString === "139910247195213824") {
                return message.channel.send("Use the command right you bozo")
            } else if (message.author.id.toString === "174974574105067520") {
                return message.channel.send(
                    "Use the command right you greasy loafer"
                )
            } else {
                return message.channel.send(
                    "Please mention a user to schedule."
                )
            }
        }

        if (!dateAndTime.match(/\d{1,2}\/\d{1,2} \d{1,2}:\d{2}/)) {
            if (message.author.id.toString === "139910247195213824") {
                return message.channel.send("Use the command right you bozo")
            } else if (message.author.id.toString === "174974574105067520") {
                return message.channel.send(
                    "Use the command right you greasy loafer"
                )
            } else {
                return message.channel.send(
                    "Please provide a valid date and time format (MM/DD HH:MM)"
                )
            }
        }

        const [month, day, time] = dateAndTime.split(/[\/ ]/)
        const year = new Date().getFullYear() // Get the current year
        const fullDate = `${year}-${month}-${day} ${time}`
        const dayOfWeek = new Date(fullDate).toLocaleString("en-US", {
            weekday: "long"
        })

        const scheduledChannel = message.guild.channels.cache.find(
            (channel) => channel.name === "scheduled-matches"
        ) // Change to your desired channel name

        if (!scheduledChannel) {
            return message.channel.send(
                "Could not find the scheduled matches channel."
            )
        }

        scheduledChannel.send(
            `${message.author} vs ${targetUser} is scheduled for ${dayOfWeek}, ${month}/${day} at ${time}`
        )
    } else if (command === "updateschedule") {
        console.log("updateSchedule")
        if (args.length < 2) {
            if (message.author.id.toString === "139910247195213824") {
                return message.channel.send("Use the command right you bozo")
            } else if (message.author.id.toString === "174974574105067520") {
                return message.channel.send(
                    "Use the command right you greasy loafer"
                )
            } else {
                return message.channel.send(
                    "Please use the correct format: !updateschedule @user date/time (MM/DD HH:MM)"
                )
            }
        }

        const targetUser = message.mentions.users.first()
        const updatedDateTime = args.slice(1).join(" ")

        if (!targetUser) {
            if (message.author.id.toString === "139910247195213824") {
                return message.channel.send("Use the command right you bozo")
            } else if (message.author.id.toString === "174974574105067520") {
                return message.channel.send(
                    "Use the command right you greasy loafer"
                )
            } else {
                return message.channel.send(
                    "Please mention a user to update the schedule."
                )
            }
        }

        if (!updatedDateTime.match(/\d{1,2}\/\d{1,2} \d{1,2}:\d{2}/)) {
            if (message.author.id.toString === "139910247195213824") {
                return message.channel.send("Use the command right you bozo")
            } else if (message.author.id.toString === "174974574105067520") {
                return message.channel.send(
                    "Use the command right you greasy loafer"
                )
            } else {
                return message.channel.send(
                    "Please provide a valid date and time format (MM/DD HH:MM)"
                )
            }
        }

        const [month, day, time] = updatedDateTime.split(/[\/ ]/)
        const year = new Date().getFullYear() // Get the current year
        const fullDate = `${year}-${month}-${day} ${time}`
        const dayOfWeek = new Date(fullDate).toLocaleString("en-US", {
            weekday: "long"
        })

        const scheduledChannel = message.guild.channels.cache.find(
            (channel) => channel.name === "scheduled-matches"
        ) // Change to your desired channel name

        if (!scheduledChannel) {
            return message.channel.send(
                "Could not find the scheduled matches channel."
            )
        }

        scheduledChannel.send(
            `${message.author} vs ${targetUser} has been updated to ${dayOfWeek}, ${month}/${day} at ${time}`
        )
    } else if (command === "howtoschedule") {
        const howToEmbed = new Discord.MessageEmbed()
            .setColor("#0099ff")
            .setTitle("Scheduling Bot Commands")
            .setDescription("To schedule a match, use the following commands:")
            .addField(
                "!schedule",
                "Schedule a match with a user: `!schedule @user MM/DD HH:MM`"
            )
            .addField(
                "!updateSchedule",
                "Update a scheduled match: `!updateSchedule @user MM/DD HH:MM`"
            )

        message.channel.send({ embeds: [howToEmbed] })
    } else {
        if (message.author.id.toString === "139910247195213824") {
            message.channel.send("Use the command right you bozo")
        } else if (message.author.id.toString === "174974574105067520") {
            message.channel.send("Use the command right you greasy loafer")
        } else {
            console.log(message.author.id.toString)
            message.channel.send(
                "Command not found. Type !howtoschedule for a list of commands."
            )
        }
    }
})

client.login("")
