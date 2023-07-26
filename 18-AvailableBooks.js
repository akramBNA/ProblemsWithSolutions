// Description:

//Write a JS class that allows you to manage a book store invertories!


// Solution:

class Book{
	constructor(title,author,ISBN,NbrCopies){
		this.title = title;
		this.author = author;
		this.ISBN = ISBN;
		this.NbrCopies = NbrCopies;
	}
	get availability(){
		return this.getAvailability();
	}

	getAvailability(){
		if(this.NbrCopies === 0){
			return "Out OF STOCK!"
		} else if(this.NbrCopies <10){
			return "LOW STOCK!"
		}
		return "IN STOCK!"
	}

	sell(NbrCopiesSold =1){
		this.NbrCopies -= NbrCopiesSold;
	}
	restock(NbrCopiesRestocked = 5){
		this.NbrCopies += NbrCopiesRestocked;
	}
}