import discord
import time
from Engine import *

from config import *

client = discord.Client()

@client.event
async def on_ready():
    print('We have logged in as {0.user}'.format(client))
    if is_maintenance:
        
    
@client.event
async def on_message(message):
    await Engine(message, client).run()

client.run(TOKEN)
