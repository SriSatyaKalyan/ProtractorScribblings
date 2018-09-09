describe("Testing Actions Class::", function(){
	
	it("Opening the browser", function(){
		browser.get("http://posse.com");
	})
	
	it("Entering data", function(){
		element(by.model("userInputQuery")).sendKeys("river");
	})
	
	it("Performing browser actions", function(){
		browser.actions().mouseMove(element(by.model("locationQuery")).sendKeys("London")).perform();
		browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
		browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function(){
			browser.sleep(3000);
		})
	})
	
	it("Counting the number of search results", function(){
//		console.log(element.all(by.css("div[ng-mouseover* = 'onSearchResultOver']")).count());
		expect(element.all(by.css("div[ng-mouseover = 'onSearchResultOver(searchResult)']")).count()).toEqual(7);  
	})
	
	it("Checking the location on map", function(){
		element.all(by.css("div[ng-mouseover = 'onSearchResultOver(searchResult)']")).get(0).click().then(function(){
			browser.sleep(2000);
		})
	})
	
	it("Pressing the \"River Island\" location", function(){
		element(by.css("a[ng-href='/place/GB/London/River Island']")).click().then(function(){
			browser.sleep(3000);
		})
	})
})