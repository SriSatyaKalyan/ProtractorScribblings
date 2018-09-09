/**
 * 
 */
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['specs16-forms3.js'],

  onPrepare:function(){
	  browser.driver.manage().window().maximize();
  }

};