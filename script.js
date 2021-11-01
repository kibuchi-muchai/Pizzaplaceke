var username = prompt("whats your name?")
document.write(`Hello${username},how are you? please make your orders and we will deliver within 24hrs`)

//business logic
function Order(size, crust,toppings,quantity,delivery) {
    this.pizzaSize = size;
    this.crust = crust;
    this.pizzatoppings = toppings;
    this.pizzaquantity = quantity;
    this.pizzadelivery = delivery;
}
Order.prototype.allInformation=function(){
    return this.sizeofpizza + "," + this.crust + "," + this.pizzatoppings + "," + this.pizzaquantity + ","}