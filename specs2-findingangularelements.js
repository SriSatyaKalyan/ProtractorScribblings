describe('ProtractorElementDemo', function(){
	
	it('BasicProgram',function(){
		
		//Write the protractor Code
		browser.get("http://juliemr.github.io/protractor-demo");
		element(by.model("first")).sendKeys("3");
		element(by.model("second")).sendKeys("4");
		element(by.id("gobutton")).click();
		element(by.css("h2[class = 'ng-binding']")).getText().then(function(text) {
			console.log("The output is observed to be " + text);
		})
//		element("The answer is " + by.css("h2[class = 'ng-binding']")).getText(); //But this a function on retrieving the text on the webpage
															   //Here, we are not resolving the promise
	})
	
	it('AdvancedProgram',function(){
//		browser.sleep(5000);
		console.log("I am supposed to be the last thing happening here");
//		browser.close();
	})
	
})