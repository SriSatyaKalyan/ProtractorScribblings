function objects(){
	this.shoppage = element(by.linkText("Shop"));
	
	this.getURL = function(){
		browser.get("https://qaclickacademy.github.io/protocommerce/");
	}
}

module.exports = new objects();