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
    return this.sizeofpizza + "," + this.crust + "," + this.pizzatoppings + "," + this.pizzaquantity + "," + this.pizzadelivery}

    //user interface logic
$(document).ready (function(){
    $("form#pizza").submit(function(event){
        event.preventDefault();

    var inputtedpizzasize=$("#size").val();
    console.log(inputtedpizzasize)

     var inputtedcrust=$("#crust").val();
    console.log(inputtedcrust)

    var thechoosenpizzatoppings=[];
    $('input[type=checkbox]:checked').each(function() {
        thechoosenpizzatoppings.push($(this).val());
    }
   ,); 
    }
,)})

console.log(thechoosenpizzatoppings);
var additiontoppings = 0;
for(var a=0; a<thechoosenpizzatoppings.length; a++){
    if(thechoosenpizzatoppings[a]==="Spicy pepperoni $ pepper"){
        additiontoppings += 500
        console.log(additiontoppings)
    }
    
}
