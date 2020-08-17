import discord 

class Profil():

    def __init__(self, message, bot):
        self.message = message
        self.channel = message.channel
        self.bot = bot
    
    async def run(self):
        await self.channel.send("Profile")