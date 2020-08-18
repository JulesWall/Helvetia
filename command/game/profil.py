import discord 
from db.Profil import *

class Profil():

    def __init__(self, message, bot):
        self.message = message
        self.channel = message.channel
        self.bot = bot
    
    async def run(self):
        profil_data = ProfilData(self.message.author.id)
        await self.channel.send(f"**BTC :** ``{profil_data.btc}`` \n**Dollars :** ``{profil_data.dollars}``")