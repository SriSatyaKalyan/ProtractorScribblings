module.exports = {
	phoneselectionsets: {
	
		phoneselection1: {
				firstphone: "Samsung Note 8",
				secondphone: "Blackberry",
				thirdphone: "iphone X"
		},
		
		phoneselection2: {
				firstphone: "Nokia Edge",
				secondphone: "Blackberry",
				thirdphone: "iphone X"
		},
		
		/*  The error with two phones being the same is they get counted as two different phone and since the count becomes 3.
		 *  the program searches for another row of item - which is not there. I should program more efficiently to avoid this
		 */
		
		
		/*  So, I have to program in such a manner that the code reads the phone selections as well and then
		 *  performs actions accordingly
		 */ 
		phoneselection3: {
				firstphone: "Samsung Note 8",
				secondphone: "Nokia Edge",
				thirdphone: "Blackberry"
		}
	}
}