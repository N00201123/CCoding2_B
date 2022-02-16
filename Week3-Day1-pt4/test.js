// myList = [
 //   {name: "Oranges", total:23}
// ]

class dataObjects{
constructor(_title, _num, _price) {
    this.name = _title;
    this.total = _num;
    this.price = _price;

    this.totalPrice = this.calculateTotal()
    }
    calculateTotal() {
        this.totalPrice = this.total * this.price
        return this.totalPrice;
    }
}




