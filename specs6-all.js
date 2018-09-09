describe("Chain Locators", function(){
	
	it("Open AngularJS website", function(){
		browser.get("http://juliemr.github.io/protractor-demo/");
	})
	
	it("Performing Addition Operation", function(){

		element(by.model("first")).sendKeys("3");
		element(by.model("second")).sendKeys("4");
		element(by.id("gobutton")).click();
	})
	
	it("Performing Another Addition Operation", function(){

		element(by.model("first")).sendKeys("5");
		element(by.model("second")).sendKeys("6");
		element(by.id("gobutton")).click();
	})
	
	it("Performing And Another Addition Operation", function(){

		element(by.model("first")).sendKeys("7");
		element(by.model("second")).sendKeys("8");
		element(by.id("gobutton")).click();
	})
	
	it("Result Verification using repeater", function(){

//		browser.sleep(5000);
//		element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text) {
//			console.log("The result is " + text);
//		})
	//Because the above-mentioned code does not help us in accessing elements down the table, we go ahead with the below code
		
		element.all(by.repeater("result in memory")).count().then(function(text) {
			console.log("The number of rows in the table are " + text);	
		})
	})
	
	//Loop for traversing through all the rows in the table
	it("Printing all the results", function(){
		element.all(by.repeater("result in memory")).each(function(item) {
			item.element(by.css("td:nth-child(3)")).getText().then(function(text) {
				console.log("The result is " + text);
			})
		})
	})
	
	it("Accessing the result in the middle by crude methods", function(){
		element(by.css("tr:nth-child(2)")).element(by.css("td:nth-child(3)")).getText().then(function(text) {
			console.log("Crude method output is " + text);
		})
	})
	
	it("Accessing the result in the middle by all() methods", function(){
		element.all(by.repeater("result in memory")).get(1).element(by.css("td:nth-child(3)")).getText().then(function(text) {
			console.log("Intelligent method output is " + text);
		})
	})
})
