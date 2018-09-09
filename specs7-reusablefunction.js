describe("Chain Locators", function(){
	
	function add(a, b){
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);
		element(by.id("gobutton")).click();
	}
	
	it("Open AngularJS website", function(){
		browser.get("http://juliemr.github.io/protractor-demo/");
	})
	
	it("Performing Addition Operation", function(){
		add(2,3);
	})
	
	it("Performing Another Addition Operation", function(){
		add(5,6);
	})
	
	it("Performing Yet Another Addition Operation", function(){
		add(7,8);
		add(3,8);
		add(4,9);
	})
	
	it("Result Verification using repeater", function(){
		element.all(by.repeater("result in memory")).count().then(function(text) {
			console.log("The number of rows in the table are " + text);	
		})
	})
	
	//Loop for traversing through all the rows in the table
	it("Printing all the results", function(){
		console.log("Loop for traversing through all the rows in the table");
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
