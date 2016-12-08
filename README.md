# UptimeRobot Telegram-hook

This project is a simple webhook for UptimeRobot who sends you a telegram message.

## How to install
This hook require [NodeJS](https://nodejs.org/es/), so you must install it in your machine.

### 1º. Clone this repository
```
git clone https://github.com/claudio4/Uptime-Robot-Telegram-hook.git
```
or in case you doesn't have git
```
wget -O master.zip; unzip master.zip; rm master.zip
```
### 2º. Install dependecies
First you must move to project directory and runs this command:
```
npm install
```
### 3º. Get a Telegram token

* Open a chat with [@BotFather](https://telegram.me/BotFather).
* Send to him **/newbot** and after his answer, send the name of your bot.
* Now send him the alias of your new bot.
* After that the bot Father gives you the token, you must save this.

### 4º. Getting your chat id.

* First send a message to your bot.
* Now go to https://api.telegram.org/botYOUR_TOKEN_ID/getUpdates
* And save your chat id.

### 5º. Making the config
You must copy hook.example.json and call it config.json.
After that you only need fill all fields in the file.

At the hookKey field put some randond password.

### 6º. Setting your hook
Now you only need go to your [UptimeRobot](https://uptimerobot.com/) dashboard, and in settings, "Add Alert Contacts".

Now set Web-Hook in the type field, after set the name you prefer and in URL put the URL of your webhook.
in POST Value put the next text, but change the hookKey by the pass you set in the config file.

```
{
	"key": "PUT YOUR PASS",
	"monitorID": "*monitorID*",
	"monitorURL": "*monitorURL*",
	"monitorFriendlyName": "*monitorFriendlyName*",
	"alertType": "*alertType*",
	"alertTypeFriendlyName": "*alertTypeFriendlyName*",
	"alertDetails": "*alertDetails*"
}
```

Now add the contact to your machines.

### 7. Start your hook
Now you only need run the next command.

```
npm start
```
