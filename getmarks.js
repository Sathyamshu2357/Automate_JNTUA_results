const puppeteer = require('puppeteer');
const fs = require('fs');

( async () => { try {
	const browser = await puppeteer.launch();
	const jntupage = await browser.newPage();
	
	const pageurl = ""
	const rolls = [ ]
	
	// Eg : const pageurl = "https://jntuaresults.ac.in/view-results-56736237.html"
	// Eg : const rolls = [ '174G1A0560', '1744G10A560' ]
	
	for (var roll in rolls) { 
	await jntupage.goto(pageurl);
	await jntupage.type('#ht',rolls[roll]);
	await jntupage.click('input.ci');
    	await jntupage.waitFor(1000);
	const innertext = await jntupage.evaluate( () => document.querySelector('#rs').innerText);
	console.log(innertext.length);
		if(innertext.length > 91) {
			console.log("Received " + rolls[roll] + " marks");
			fs.appendFileSync( 'marks.txt', innertext );
		} else {
		console.log(rolls[roll] + "did not appeared for exam");
		}
	}
	await browser.close();
} catch(err) { console.log(err); }
	
})();

