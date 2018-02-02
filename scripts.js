function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
}

Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
};

var samsungGalaxyS6 = new Phone("Samsung", 4899, "silver");
var iPhone6s = new Phone("Apple", 4999, "black");
var onePlusOne = new Phone("OnePlus", 2999, "white");

samsungGalaxyS6.printInfo();
iPhone6s.printInfo();
onePlusOne.printInfo();


