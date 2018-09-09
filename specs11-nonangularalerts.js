describe('Handling Alerts::', function(){
	
	it('BasicProgram',function(){
		browser.waitForAngularEnabled(false);
		browser.get("http://www.qaclickacademy.com/practice.php");
		browser.driver.manage().window().maximize();
	})
	
	it("Invoking the alert", function(){
		element(by.id("confirmbtn")).click().then(function(){
			browser.sleep(3000);
		})
	})
	
	it("Selecting the alert", function(){
		browser.switchTo().alert().dismiss().then(function(){
			browser.sleep(3000);
		})
	})
	
})