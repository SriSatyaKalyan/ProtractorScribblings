describe('ProtractorElementDemo', function(){
	
	it('BasicProgram',function(){
		
		//Write the protractor Code
		browser.get("http://juliemr.github.io/protractor-demo");
		element(by.model("first")).sendKeys("3");
		element(by.model("second")).sendKeys("4");
		element(by.id("gobutton")).click();
		
		//Jasmine Assertion
		expect(element(by.css("h2[class = 'ng-binding']")).getText()).toEqual("7");
		
	})
	
	it('AdvancedProgram',function(){
		
		console.log("I am supposed to be the last thing happening here");
//		browser.close();
		
	})
	
})