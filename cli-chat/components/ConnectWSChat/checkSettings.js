const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

function checkSettings() {
    let username;
    let wsChatURL;
    // let reconnectInterval;
    const fileWithSettings = fs.readFileSync(path.join(__dirname, '../../settings/settings.config'), { flag: 'as+' }, { encoding: 'utf-8' });
    const regExpUsername = /(?<=USERNAME = ")[^"]+/;
    const regExpWsChatURL = /(?<=WSCHATURL = ")[^"]+/;

    if (regExpUsername.exec(fileWithSettings) !== null
    || regExpWsChatURL.exec(fileWithSettings !== null)) {
        username = regExpUsername.exec(fileWithSettings)[0];
        wsChatURL = regExpWsChatURL.exec(fileWithSettings)[0];
    } else {
        console.log(chalk.red(`You do not have settings for chat, now you need to answer a couple of questions
                    Press enter when you are ready `));
    }
    return {
        username,
        wsChatURL,
    };
}

module.exports = checkSettings;
