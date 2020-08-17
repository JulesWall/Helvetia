import pymysql
pymysql.install_as_MySQLdb()
import MySQLdb
from config import *

class NewPlayer:

    def __init__(self, user_id, user_name, date):

        self.user_id = user_id
        self.user_name = user_name
        self.creation_date = date

        db = MySQLdb.connect(user=USERDATABASE, passwd=PASSWORDDATABASE, host="localhost", db=DATABASE)#connexion
        cursor = db.cursor() #création du cursor
        sql = f"INSERT INTO `player`(`user_id`, `user_name`, `creation_date`)\
        VALUES ({self.user_id},'{self.user_name}','{self.creation_date}')"
        cursor.execute(sql) #fonction sql
        db.commit()
        db.close()
        