import discord 
from function.Text import *

class Ping():

    def __init__(self, message, bot):
        self.message = message
        self.channel = message.channel
        self.bot = bot
    
    async def run(self):
        import time
        now = time.monotonic()
        msg = await self.channel.send(f'{str(Text("fr", "Ping").get())}')
        ping = int((time.monotonic() - now) * 1000)
        await msg.edit(content=f'{str(Text("fr", "Ping").get())} ``{ping} ms``')