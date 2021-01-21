const lang = require("../lang/fr.json");
module.exports = function(Time) {
    var GlobalSeconds = Time / 1000;
    var Heure = Math.floor(GlobalSeconds / 3600) === 0 ? "" : `${Math.floor(GlobalSeconds / 3600)} ${lang.time.hours} `;
    var Minutes = Math.floor((GlobalSeconds - (Math.floor(GlobalSeconds / 3600) * 3600)) / 60) === 0 ? "" : `${Math.floor((GlobalSeconds - (Math.floor(GlobalSeconds / 3600) * 3600)) / 60)} ${lang.time.minutes} `;
    var Secondes = Math.round(GlobalSeconds - ((Math.floor(GlobalSeconds / 3600) * 3600) + (Math.floor((GlobalSeconds - (Math.floor(GlobalSeconds / 3600) * 3600)) / 60) * 60))) === 0 ? "" : `${Math.round(GlobalSeconds - ((Math.floor(GlobalSeconds / 3600) * 3600) + (Math.floor((GlobalSeconds - (Math.floor(GlobalSeconds / 3600) * 3600)) / 60) * 60)))} ${lang.time.seconds}`;
    return `${Heure}${Minutes}${Secondes}`;
}