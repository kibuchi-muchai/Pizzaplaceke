//business logic
function Order(size, crust,toppings,quantity,delivery) {
    this.pizzaSize = size;
    this.crust = crust;
    this.pizzatoppings = toppings;
    this.pizzaquantity = quantity;
    this.pizzadelivery = delivery;
}

let firstPizza = new Pizza("small","spicy pepperoni & pepper","crispy",1000,1)
let secondPizza = new Pizza("small","spicy pepperoni & pepper","stuffed",1000,2)
let thirdPizza = new Pizza("small","spicy pepperoni & pepper","gluten-free",1000,3)
let fourthPizza = new Pizza("medium","spicy pepperoni & pepper","crispy",1000,4)
let fifthPizza = new Pizza("medium","spicy pepperoni & pepper","stuffed",1000,5)
let sixthPizza = new Pizza("medium","spicy pepperoni & pepper","gluten-free",1000,6)
let seventhPizza = new Pizza("large","spicy pepperoni & pepper","crispy",1000,7)
let eighthPizza = new Pizza("large","spicy pepperoni & pepper","stuffed",1000,8)
let ninethPizza = new Pizza("large","spicy pepperoni & pepper","gluten-free",1000,9)
let tenthPizza = new Pizza("small","mushroom","crispy",1000,10)
let eleventhPizza = new Pizza("small","mushroom","stuffed",1000,11)
let twelvethPizza = new Pizza("small","mushroom","gluten-free",1000,12)
let thirteenthPizza = new Pizza("medium","mushroom","crispy",1000,13)
let fourteenthPizza = new Pizza("medium","mushroom","stuffed",1000,14)
let fifteenththPizza = new Pizza("medium","mushroom","gluten-free",1000,15)
let sixteenthPizza = new Pizza("large","mushroom","crispy",1000,16)
let seventeenthPizza = new Pizza("large","mushroom","stuffed",1000,17)
let eighteenththPizza = new Pizza("large","mushroom","gluten-free",1000,18)
let nieteenthPizza = new Pizza("small","extracheese","crispy",1000,19)
let twentiethPizza = new Pizza("small","extracheese","stuffed",1000,20)
let twentyfirstPizza = new Pizza("small","extracheese","gluten-free",1000,21)
let twentysecondPizza = new Pizza("medium","extracheese","crispy",1000,22)
let twentythirdPizza = new Pizza("medium","extracheese","stuffed",1000,23)
let twentyfourthPizza = new Pizza("medium","extracheese","gluten-free",1000,24)
let twentyfifthPizza = new Pizza("large","extracheese","crispy",1000,25)
let twentysixththPizza = new Pizza("large","extracheese","stuffed",1000,26)
let twentysevenththPizza = new Pizza("large","extracheese","gluten-free",1000,27)
let twentyeighthPizza = new Pizza("small","green pepper","crispy",1000,28)
let twentyninethPizza = new Pizza("smal","green pepper","stuffed",1000,29)
let thirtiethPizza = new Pizza("small","green pepper","gluten-free",1000,30)
let thirtyfirstPizza = new Pizza("medium","green pepper","crispy",1000,31)
let thirtysecondPizza = new Pizza("medium","green pepper","stuffed",1000,32)
let thirtythirdPizza = new Pizza("medium","green pepper","gluten-free",1000,33)
let thirtyfourthfPizza = new Pizza("large","green pepper","crispy",1000,34)
let thirtyfifthPizza = new Pizza("large","green pepper","stuffed",1000,35)
let thirtysixthPizza = new Pizza("large","green pepper","gluten-free",1000,36)


pizza.prototype.myOrderDetails = function (){
    console.log('your order has been received for' + this.size + 'pizza with'+ this.crust + 'and' + this.toppings)
}

//user interface logic
$(document).ready(function () {
    $('button#orderButton').click(function () {

    $('#orderAnotherButton, pizza-orders, #grandTotal').hide();

        var pizzaSize = $('.pizza-size option:selected').val();
        var pizzatoppings = $('.pizza-toppings option:selected').val();
        var pizzacrust = $('.pizza-crust option:selected').val();

        var total = parseInt(pizzaSize) + parseInt(pizzatoppings) + parseInt(pizzacrust);
        var order = 1;
        var grandTotal =0;


        $("#orderNo").html(order);
        $("#size").html(pizzaSize);
        $("#toppings").html(pizzacrust);
        $('#total').html(total);

        $('#grandTotal').html(grandTotal + total);

        $('#orderButton').hide()
        $('#orderAnotherButton ,pizza-orders, grandTotal').show();

        $('button#orderAnotherButton').click(function (){
            var pizzaSize = $('.pizza-size option:selected').text() + "-" + pizzaSize;
            var pizzatoppings = $('.pizza-toppings option:selected').text()+ "-" + pizzatoppings ;
            var pizzacrust = $('.pizza-crust option:selected').text() + "-" + pizzacrust;
            var total = parseInt(pizzaSize) + parseInt(pizzatoppings) + parseInt(pizzacrust);
            order = order + 1;
            var grandTotal =0;

            let.newpizza = new pizza(pizzaSize,pizzatoppings,pizzacrust,total,order);
            let.newpizzaorder ='<p>order No: <span id="orderNo" + order + '<span ;id ="size"+$('.pizza-size option:selected').text() + "-" + newPizza.size + '</span> Toppings: <span id="Toppings">' +$('.pizza-toppings option:selected').text()+ "-" + newPizza.toppings +'</span crust:<span id=:"crust"'+ $('.pizza-crust option:selected').text() + "-" + newPizza.crust + '</span><strong>Total : <span id="total">' + newPizza.total + '</span></strong'
        .
        _});
        $('.pizza-orders').append(newPizzaOrder);
        $('#grandTotal span').html(grandTotal);

        $('button#checkoutButton').click(function(){
            prompt('Do you want it to be delivered?');
        }
    
        
    

    ,);
    }

    ,);
})
