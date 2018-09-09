describe('ProtractorBabySteps', function(){
	
	it('BasicProgram',function(){
		//Write the protractor Code
		browser.get("https://angularjs.org");
		browser.get("http://juliemr.github.io/protractor-demo").then(function(){
			browser.sleep(5000);
		})
	})
	
	it('AdvancedProgram',function(){
//		browser.sleep(5000);
		console.log("I am supposed to be the last thing happening here");
		browser.close();
	})
	
})