/**
 * 
 */
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['specs17-jasminedataprovider.js'],

  onPrepare:function(){
	  browser.driver.manage().window().maximize();
  }

};