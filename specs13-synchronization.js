describe("Synchronization::", function(){
	
	it("Open AngularJS website", function(){
		browser.waitForAngularEnabled(false);
		browser.get("http:www.itgeared.com/demo/1506-ajax-loading.html");
	})
	
	it("Clicking on Ajax", function(){
		element(by.css("a[href = 'javascript: void(0);loadAjax();']")).click().then(function(){
			browser.sleep(3000);
		})
	})
	
	it("Getting text by setting wait condition", function(){
		var expectedconditions = protractor.ExpectedConditions;
		browser.wait(expectedconditions.invisibilityOf(element(by.id("loader"))), 5000).then(function(){
			element(by.id("results")).getText().then(function(text){
				console.log("The text is: " + text);
			})
		})
	})
	
})
