import pymysql
pymysql.install_as_MySQLdb()
import MySQLdb
from config import *

class ProfilData:

    def __init__(self, user_id):
        self.user_id = user_id

        db = MySQLdb.connect(user=USERDATABASE, passwd=PASSWORDDATABASE, host="localhost", db=DATABASE)#connexion
        cursor = db.cursor() #création du cursor
        sql = f"SELECT * FROM `player` WHERE `user_id`={int(self.user_id)}"
        cursor.execute(sql) #fonction sql
        data = cursor.fetchall()[0]
        db.close()

        self.btc = data[4]
        self.dollars = data[5]
