from command.misc.ping import *
from command.game.profil import *
from command.game.bank import *

commands = {
    "ping":[Ping, False],
    "profil":[Profil, True],
    "p":[Profil, True],
    "pro":[Profil, True],
    "bank":[Bank, True]
}

