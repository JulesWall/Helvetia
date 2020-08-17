import discord
import asyncio

from config import *
from commands import commands
from db.Registration import *
from db.function.is_player import *

class Engine():

    def __init__(self, message, bot):
        self.message = message
        self.bot = bot
    
    async def run(self):
        has_prefix = self.message.content.startswith("!")
        if has_prefix:
            if is_maintenance and self.message.author.id not in MAINTENANCE_AUTHORIZE:
                pass
            else:
                self.message.content = self.message.content.lower()
                try:
                    command_info = commands.get(self.message.content[1:].split()[0])
                    command = command_info[0]
                except:
                    pass
                must_reg, is_register = command_info[1], is_player(self.message.author.id)
                if must_reg and is_register: 
                    await command(self.message, self.bot).run()
                elif not must_reg:
                    await command(self.message, self.bot).run()
                elif must_reg and not is_register:
                    import time
                    time.time()
                    NewPlayer(self.message.author.id, self.message.author.name, time.time())
                    await self.message.channel.send("Registration ok")
