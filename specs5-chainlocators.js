describe("Chain Locators", function(){
	
	it("Open AngularJS website", function(){
		browser.get("http://juliemr.github.io/protractor-demo/");
	})
	
	it("Performing Addition Operation", function(){

		element(by.model("first")).sendKeys("3");
		element(by.model("second")).sendKeys("4");
		element(by.id("gobutton")).click();
	})
	
	it("Result Verification using repeater", function(){
		
		element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text) {
			console.log("The result is " + text);
		})
	})
	
})
