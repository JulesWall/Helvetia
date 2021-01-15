const mysql = require("mysql");
require("dotenv").config();
const querryAsync = require("./function/querryAsync.js");

module.exports = {
    NewPlayer: function (idu, pseudo, choselang = "fr", caracther_sex, caracther_name, caracther_story) {

        // anti-pseudo de merde by ttd
        if (pseudo.includes("'")) pseudo =pseudo.replace("'","''");

        var Dollars = 0;
        var gold = 0;
        var iron = 0;
        var precious = 0;
        var wood = 0;
        var localisation = 1;
        var lf = 0;
        var sex = caracther_sex;
        var name = caracther_name;
        var story = caracther_story;
        var created_at = Date.now();
        var lang = choselang;

        querryAsync(`INSERT INTO player (user_id, user_name, sex, name, story, lang, lf, creation_date, dollars, gold, iron, precious, wood, localisation) VALUES\
        (${idu}, '${pseudo}', '${sex}', '${name}','${story}', '${lang}', ${lf}, ${created_at}, ${Dollars}, ${gold}, ${iron}, ${precious}, ${wood}, ${localisation})`)
    },
    Save:  function (self, user_id, user_name, date) {

    self.user_id = user_id
    self.user_name = user_name
    self.creation_date = date
    self.btc = 0
    self.dollars = 0
    self.daily_convert = 0

    db = MySQLdb.connect(user=USERDATABASE, passwd=PASSWORDDATABASE, host="localhost", db=DATABASE)
    cursor = db.cursor()
    sql = "INSERT INTO `player`(`user_id`, `user_name`, `creation_date`, `btc`, `dollars`, `daily_convert`)\
    VALUES ({self.user_id},'{self.user_name}',{self.creation_date},{self.btc},{self.dollars},{self.daily_convert})"
    cursor.execute(sql)
    db.commit()
    db.close()
    }
}