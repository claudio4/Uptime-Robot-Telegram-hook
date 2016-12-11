# UptimeRobot Telegram-hook

This project is a simple webhook for UptimeRobot that sends you a telegram message.

## How to install
This hook require [NodeJS](https://nodejs.org/es/), so you must install it in your machine.

### 1º. Clone this repository
```
git clone https://github.com/claudio4/Uptime-Robot-Telegram-hook.git
```
or in case you don't have git
```
wget -O master.zip; unzip master.zip; rm master.zip
```
### 2º. Install dependencies
First you must move to project directory and runs this command:
```
npm install
```
### 3º. Get a Telegram token

* Open a chat with [@BotFather](https://telegram.me/BotFather).
* Type **/newbot** and after its message type your bot's name.
* Now, type your bot's alias.
* When you're done the BotFather will give you the token, you must save this code.

### 4º. Getting your chat id.

* First send a message to your bot.
* Now go to https://api.telegram.org/botYOUR_TOKEN_ID/getUpdates
* And save your chat id.

### 5º. Creating the config file
You must copy *hook.example.json* and call it *config.json*.
After that you only need to fill all fields in the file.

At the *hookKey* field type some random password.

### 6º. Setting your hook
Now you only need to go to your [UptimeRobot](https://uptimerobot.com/) dashboard, and in settings, "Add Alert Contacts".

Now set the Web-Hook in the type field, when you are done set the name you prefer and in the URL parameter type the URL of your webhook.
In the "POST Value" type the next text but change the hookKey with the password you set in the config file.

```
{
	"key": "TYPE YOUR PASS",
	"monitorID": "*monitorID*",
	"monitorURL": "*monitorURL*",
	"monitorFriendlyName": "*monitorFriendlyName*",
	"alertType": "*alertType*",
	"alertTypeFriendlyName": "*alertTypeFriendlyName*",
	"alertDetails": "*alertDetails*"
}
```

Now add the contact to your monitors.

### 7. Start your hook
Now you only need to run the next command.

```
npm start
```
