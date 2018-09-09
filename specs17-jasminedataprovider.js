describe("Synchronization::", function(){
	
	var objects = require("./pageobjects.js");
	var dataobject = require("./datafile2.js");
	
	var using = require('jasmine-data-provider');
	
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
	
	it("Selecting different phones", function(){
		using(dataobject.phoneselectionsets, function(data, description) {
			
			objects.getURL();
			
			objects.shoppage.click().then(function() {
				browser.sleep(1000);
			})		
			
			addThePhone(data.firstphone);
			addThePhone(data.secondphone);
			addThePhone(data.thirdphone);
			
			element(by.css("a[class = 'nav-link btn btn-primary']")).getText().then(function(text) {
				console.log("The number of checked-out items are:" + text.substring(11, 12));
			})
			
			element(by.partialLinkText("Checkout")).click().then(function(){
				browser.sleep(2000);
			})
			
			element.all(by.css("table[class = 'table table-hover'] tbody tr")).count().then(function(totalitems) {
				console.log("The total items are: " + totalitems-2);
				for (let i = 1;i <= totalitems-2; i++){
					element(by.css("tr:nth-child("+ i +") td:nth-child(4) strong")).getText().then(function(text) {
						calculatedtotalcost += Number(text.substring(3, text.length));
						console.log("The item numbered " + i + " costed " + text.substring(3, text.length));
					})
				}
			})
			
			element(by.css("table[class = 'table table-hover'] tbody tr:nth-child(4) td:nth-child(5) h3 strong")).getText().then(function(totalprice) {
				expect(totalprice.substring(3)).toBe(calculatedtotalcost.toString());
				console.log("The totalprice on the cart is " + totalprice.substring(3) + " and the calculated total cost is " + calculatedtotalcost);
				calculatedtotalcost = 0;
			})
		})
	})
})