import discord

class BankWatch:

    def __init__(self, embed, bot):
        self.embed = embed
        self.bot = bot
        self.channel = self.bot.get_channel(745367400123465839)
    
    async def sendlog(self):
        await self.channel.send(embed=self.embed)
       