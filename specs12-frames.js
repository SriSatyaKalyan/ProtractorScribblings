describe('Handling Frames::', function(){
	
	it('BasicProgram',function(){
		browser.waitForAngularEnabled(false);
		browser.get("http://www.qaclickacademy.com/practice.php");
		browser.driver.manage().window().maximize();
	})
	
	it("Finding the frames", function(){
		browser.switchTo().frame("iframe-name").then(function() {
			element(by.css("a[href = 'courses-description.php']")).click().then(function(){
				browser.sleep(3000);
			})
		})
	})
	
})