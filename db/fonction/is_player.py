import pymysql
pymysql.install_as_MySQLdb()
import MySQLdb
from config import *

def is_player(user_id):
    db = MySQLdb.connect(user=USERDATABASE, passwd=PASSWORDDATABASE, host="localhost", db=DATABASE)#connexion
    cursor = db.cursor() #création du cursor
    sql = f"SELECT * FROM `player` WHERE `user_id`={int(user_id)}"
    cursor.execute(sql) #fonction sql
    data = len(cursor.fetchall())
    db.close()
    if data > 0:
        return True
    else:
        return False