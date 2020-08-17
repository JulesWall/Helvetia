import discord 

class Ping():

    def __init__(self, message, bot):
        self.message = message
        self.channel = message.channel
        self.bot = bot
    
    async def run(self):
        import time
        now = time.monotonic()
        msg = await self.channel.send('Bot latency is :')
        ping = int((time.monotonic() - now) * 1000)
        await msg.edit(content=f'Bot latency is : ``{ping} ms``')