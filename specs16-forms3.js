describe("Synchronization::", function(){
	
	var objects = require("./pageobjects.js");
	var dataobject = require("./datafile.js");
	
	var calculatedtotalcost = 0;
	var totalprice = 0;
	
	function addThePhone(nameofphone){
		element.all(by.tagName("app-card")).each(function(item) {
			item.element(by.css("div div h4 a")).getText().then(function(cellname) {
				if(cellname == nameofphone){
					item.element(by.tagName("button")).click();
				}
			})
		})
	}
	
	it("Opening the page", function() {
		objects.getURL();
	})
	
	it("Entering the SHOP page", function(){
		objects.shoppage.click().then(function() {
			browser.sleep(1000);
		})
	})
	
	it("Selecting the phones", function(){
		addThePhone(dataobject.data.firstphone);
		addThePhone(dataobject.data.secondphone);
		addThePhone(dataobject.data.thirdphone);
	})
	
	it("Verifying the checkout", function(){
		element(by.css("a[class = 'nav-link btn btn-primary']")).getText().then(function(text) {
			console.log("The number of checked-out items are:" + text.substring(11, 12));
		})
	})
	
	it("Checking out the items", function(){
		element(by.partialLinkText("Checkout")).click().then(function(){
			browser.sleep(2000);
		})
	})
	
	it("Finding the total cost", function(){
		element.all(by.css("table[class = 'table table-hover'] tbody tr")).count().then(function(totalitems) {
			console.log("The total items are: " + totalitems-2);
			for (let i = 1;i <= totalitems-2; i++){
				element(by.css("tr:nth-child("+ i +") td:nth-child(4) strong")).getText().then(function(text) {
					calculatedtotalcost += Number(text.substring(3, text.length));
					console.log("The item numbered " + i + " costed " + text.substring(3, text.length));
				})
			}
		})
	})
	
	it("Finalizing the total cost", function(){
		element(by.css("table[class = 'table table-hover'] tbody tr:nth-child(4) td:nth-child(5) h3 strong")).getText().then(function(totalprice) {
			expect(totalprice.substring(3)).toBe(calculatedtotalcost.toString());
			console.log("The totalprice on the cart is " + totalprice.substring(3) + " and the calculated total cost is " + calculatedtotalcost);
		})
	})
	
//	afterEach(function() {
//		browser.close();
//	})
})