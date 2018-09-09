describe("Synchronization::", function(){
	
	it("Opening the page", function(){
		browser.get("https://qaclickacademy.github.io/protocommerce/");
	})
	
	it("Entering the credentials", function(){
		element(by.name("name")).sendKeys("S");
		//We either have to hit enter or click on another element for the error 
		//box to show up and the latter is what I have chosen
		element(by.name("email")).click().then(function(){
			expect(element(by.css("div[class = 'alert alert-danger']")).getText()).toContain("characters");
		})
	})
	
//	it("Selecting checkbox", function(){
//		element(by.id("exampleCheck1")).click();
//	})
//	
//	it("Selecting Gender", function(){
//		element(by.id("exampleFormControlSelect1")).click();
//		element(by.cssContainingText("[id = 'exampleFormControlSelect1'] option", "Female")).click();
//	})
//	
//	it("Radio Buttons", function(){
//		//code snippet to access the radio button using 'all'
//		element.all(by.name("inlineRadioOptions")).get(1).click();
//	})					
//	
//	
//	it("DateOfBirth",function(){
//		element(by.css("input[type = 'date']")).sendKeys("07201995")
//	})
//	
//	it("Hitting submit button", function(){
//		element(by.buttonText("Submit")).click().then(function() {
//			expect(element(by.css("div[class = 'alert alert-success alert-dismissible']")).getText()).toContain("Success!");
//		})			
//	})
})