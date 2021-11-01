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
    else if (thechoosenpizzatoppings[a]==="mushroom"){
        additiontoppings +=500
        console.log(additiontoppings)
    }
    else if (thechoosenpizzatoppings[a]==="extra cheese"){
        additiontoppings +=700
        console.log(additiontoppings)
    }
    else if (thechoosenpizzatoppings[a]==="green pepper"){
        additiontoppings +=900
        console.log(additiontoppings)
    }
}
console.log(additiontoppings)
var inputtedpizzaquantity
var inputtedpizzadelivery =$('delivery').val()

if($('#pizzaquantity').val()){
    inputtedpizzaquantity=$('#delivery').val();
    console.log(inputtedpizzaquantity)
}
if($('#pizzaquantity').val()){
    console.log()


var newOrder;
var newOrder = new Order(inputtedpizzasize,inputtedcrust,additiontoppings,inputtedpizzaquantity,inputtedpizzadelivery);
console.log(newOrder)
console.log($('#delivery').val())
$("#get-pizza").show();
$(".pizza-size").text(newOrder.pizzaSize);
$(".crust").text(newOrder.crust);

$(".pizza-toppings").text(newOrder.pizzaSize);
$(".pizza-quantity").text(newOrder.pizzaquantity);

var yourlocation=prompt("please type in your location:");
alert("your order has been received and we will deliver to" + yourlocation + ".Thank you for making your orders");
}
else {
    $(".pizza-delivery").text("please select whether to deliver or not");
}


