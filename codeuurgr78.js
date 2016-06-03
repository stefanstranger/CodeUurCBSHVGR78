var restify = require('restify');
var builder = require('botbuilder');

// Create bot and add dialogs
//var bot = new builder.BotConnectorBot({ appId: 'YourAppId', appSecret: 'YourAppSecret' });
var bot = new builder.BotConnectorBot({ appId: '123456789', appSecret: 'CodeUurgr78' });
bot.add('/', function (session) {
	
	//Als de gebruiker intypt 'Wie is de snelste voetballer in Nederland?' antwoord dan met 'Arjan Robben'
	if (((session.message.text).includes("Wie")) && ((session.message.text).includes("Nederlandse")) && ((session.message.text).includes("snelste"))){
		//session.send('Jij hebt het volgende ingetypt: ' + session.message.text)
		session.send('Arjan Robben')
	}
	
    //Als de gebruiker intypt 'Wie is de grootste Nederlandse Youtuber?' antwoord dan met 'Enzo Knol'
	if (((session.message.text).includes("Wie")) && ((session.message.text).includes("Nederlandse")) && ((session.message.text).includes("youtuber"))){
		//session.send('Jij hebt het volgende ingetypt: ' + session.message.text)
		session.send('Enzo Knol')
	}
	//Als je gebruiker intypt 'Wie is de grootste Youtuber' antwoord dan met 'PewdiePie'
	else if (((session.message.text).includes("Wie")) && ((session.message.text).includes("youtuber")) != ((session.message.text).includes("leukste"))) {
		session.send('PewdiePie')
	}
	
	//Als je gebruiker intypt 'Wie vind jij de leukste youtuber' antwoord dan met 'DusDavid'
	else if ((session.message.text).includes("leukste") ) {
		session.send('Dusdavid')
	}
	
	//Als je gebruiker intypt 'Welke youtuber ben jij?' antwoord dan met 'Ik ben geen youtuber'
	else if (((session.message.text).includes("Welke")) && ((session.message.text).includes("youtuber"))) {
		session.send('Ik ben geen youtuber')
	}
	
	//Als je gebruiker intypt 'Waar ging de eerste youtube video over?' antwoord dan met 'Me at the Zoo'
	else if (((session.message.text).includes("eerste")) && ((session.message.text).includes("video"))) {
		session.send('De eerste video op Youtube heet "Me at the Zoo"')
	}
	
	//Als je gebruiker intypt 'Hoe lang bestaat youtube?' antwoord dan met 'sfdsa'
	else if (((session.message.text).includes("Hoelang")) && ((session.message.text).includes("bestaat"))) {
		session.send('Sinds 15 februari 2005, dus 11 jaar')
	}
	

	//Controleer of de gebruiker om de tijd vraagt.
	else if (((session.message.text).includes("tijd")) || ((session.message.text).includes("laat"))) {
		var date = new Date();
		var minute = date.getMinutes();
		var hour = date.getHours();
		var second = date.getSeconds();
		var day = date.getDate();
		var month = date.getMonth();
		var year = date.getFullYear();
		//alert([minute, hour, day, month, year].join("\n"));
		session.send('Het is nu ' + hour + ' uur' + ' en ' + minute + ' minuten' + ' en ' + second + ' seconden')
	}
	
	//Controleer of de gebruiker om de huidige dag vraagt.
	else if (((session.message.text).includes("dag")) || ((session.message.text).includes("vandaag"))) {
		var date = new Date();
		var weekday = new Array(7);
		weekday[0] = 'Zondag';
		weekday[1] = 'Maandag'
		weekday[2] = 'Dinsdag'
		weekday[3] = 'Woensdag'
		weekday[4] = 'Donderdag'
		weekday[5] = 'Vrijdag'
		weekday[6] = 'Zaterdag'
		session.send('Het is vandaag ' + weekday[date.getDay()])
	}
	
	//Controleer of de gebruiker vraagt welke vragen er aan de bot gesteld kunnen worden.
	//Controleer of de gebruiker om de huidige dag vraagt.
	else if ((session.message.text).includes("vragen"))  {
		var vragen = new Array(6);
		vragen[0] = 'Hoe heet je?';
		vragen[1] = 'Wat is je naam?'
		vragen[2] = 'Wat is de tijd?'
		vragen[3] = 'Hoe laat is het?'
		vragen[4] = 'Welke dag is het vandaag?'
		vragen[5] = 'Help me'
		//var allevragen = vragen.join('\n');
		session.send(vragen.join(' '))
	}
	
		//Controleer of de gebruiker om help vraagt.
	else if (((session.message.text).includes("help")) || ((session.message.text).includes("Help"))){
		session.send('Oh je wilt help van me? Vraag me eens "hoe ik heet?"')
	}
	
	//Als de bot geen antwoord weet op de een vraag, antwoord met 'Ik snap niet wat je bedoeld'
	else {
		session.send('Ik snap niet wat je met ' + '"' + session.message.text + '"' + ' bedoeld.\n Type eens "help" in.' )
	}

});

// Setup Restify Server
var server = restify.createServer();
server.post('/api/messages', bot.verifyBotFramework(), bot.listen());
server.listen(process.env.port || 3978, function () {
    console.log('%s listening to %s', server.name, server.url); 
});