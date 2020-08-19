import discord 
from config import *
from logs.bankwatch import *
import json

class Bank():

    def __init__(self, message, bot):
        self.message = message
        self.channel = message.channel
        self.author = message.author
        self.bot = bot

        #Bank data
        with open(f"db/files/bank.json") as f:
            data = json.load(f)
        self.data = data
        self.initial_BTC = self.data.get("BankStorage")
        import time
        if time.time() - self.data["BankTime"] > 3600:
            new_bank_storage = self.data["BankStorage"] * ((100 - (int((time.time() - self.data["BankTime"])/3600)*0.25))/100)
            print(100 - (int((time.time() - self.data["BankTime"])/3600)*2)/100)
            print(new_bank_storage)
            self.data["BankStorage"] = new_bank_storage
            self.data["BankTime"] = time.time()
            with open("db/files/bank.json", 'w') as f:
                json.dump(self.data, f)
        self.bank_storage = data.get("BankStorage")
        self.BankTime = data.get("BankTime")
        self.half_price = data.get("HalfPrice")
    
    async def run(self):
        
        embed=discord.Embed(title="Bank", description="Use `!bank convert <amout>` to convert BTC in dollars", color=0x1dc007)
        embed.add_field(name="Convert Price", value=f"1 BTC = {self.half_price/(self.bank_storage/2)}", inline=False)
        embed.add_field(name="Daily limit", value=f"{0.02*self.bank_storage} BTC", inline=False)
        embed.set_footer(text=f"{EMBEDFOOTERS}")
        await self.channel.send(embed=embed)

        if self.initial_BTC != self.bank_storage:
            embed=discord.Embed(title="Bank storage change")
            embed.add_field(name="Convert Price", value=f"1 BTC = {self.half_price/(self.bank_storage/2)}", inline=False)
            embed.add_field(name="Daily limit", value=f"{0.02*self.bank_storage} BTC", inline=False)
            embed.add_field(name="Storage", value=f"{self.bank_storage}")
            embed.set_footer(text=f"{EMBEDFOOTERS}")
            await BankWatch(embed, self.bot).sendlog(self.message)

        
        
