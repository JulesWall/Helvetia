import pymysql
pymysql.install_as_MySQLdb()
import MySQLdb
from config import *

def Querry(sql):
    db = MySQLdb.connect(user=USERDATABASE, passwd=PASSWORDDATABASE, host="localhost", db=DATABASE)#connexion
    cursor = db.cursor() #création du cursor
    sql = str(sql)
    cursor.execute(sql) #fonction sql
    db.commit()
    data = cursor.fetchall()
    db.close()
    return data