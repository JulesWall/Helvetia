import discord
from db.function.Querry import *
from config import *

class Eval:
    def __init__(self, message, bot):
        self.bot = bot
        self.message = message
        
    async def run(self):
        if self.message.author.id in OWNER:
            import time
            import os
            command = str(self.message.content[6:])
            try:
                output = eval(command)
                await self.message.channel.send(output)
            except Exception as e:
                error = "`ERROR`\n```py\n{0}```".format(e)
                await self.message.channel.send(error)
                