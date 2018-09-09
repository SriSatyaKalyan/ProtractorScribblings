describe("Synchronization::", function(){
	
	it("Opening the page", function(){
		browser.get("https://qaclickacademy.github.io/protocommerce/");
	})
	
	it("Entering the credentials", function(){
		element(by.name("name")).sendKeys("Sri");
		element(by.name("email")).sendKeys("whatever@anymail.boom");
		element(by.css("input[id = 'exampleInputPassword1']")).sendKeys("What@v@%^&");
	})
	
	it("Selecting checkbox", function(){
		element(by.id("exampleCheck1")).click();
	})
	
	it("Selecting Gender", function(){
		element(by.id("exampleFormControlSelect1")).click();
		element(by.cssContainingText("[id = 'exampleFormControlSelect1'] option", "Female")).click();
	})
	
	it("Radio Buttons", function(){
		//code snippet to normally access the radio button
//		element(by.id("inlineRadio2")).click().then(function(){
//			browser.sleep(3000);
//		})
		
		//code snippet to access the radio button using 'all'
		element.all(by.name("inlineRadioOptions")).get(1).click();
	})					
	
	
	it("DateOfBirth",function(){
		element(by.css("input[type = 'date']")).sendKeys("07201995")
	})
	
	it("Hitting submit button", function(){
		element(by.buttonText("Submit")).click().then(function() {
			expect(element(by.css("div[class = 'alert alert-success alert-dismissible']")).getText()).toContain("Success!");
		})			
	})
	
//	it("Validating the Success! message", function(){
//		element(by.css("div[data-dismiss = 'alert']")).getText().then(function(text) {
//			console.log(text);
//		})
//	})
	
	//This code is not working
//	it("Setting an explicit wait kinda code", function(){
//		element(by.css("input[class = 'ng-pristine ng-valid ng-touched']")).click().then(function(){
//			browser.sleep(3000);
//		})
//	})
})