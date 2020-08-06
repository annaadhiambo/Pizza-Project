// var price , crust_price, topping_price ;
// let total = 0;
function Getpizza( name,size,crust,topping){
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.topping = topping;

}

Getpizza.prototype.fullorder=function(){
    return this.name + ", " +  this.size + ", " + this.crust + ", " + this.topping

};

function Total(prices,crustprices,toppingprices,number){
    this.prices =prices;
    this.crustprices =crustprices;
    this.toppingprices =toppingprices;
    this.number =number;
}
Total.prototype.totalprice=function(){
    return ((this.prices  + this.crustprices + this.toppingprices)* this.number);
}

var prices =[1000,2500,3460]
var toppingprices=[120,40,95,50,125,60]
var crustPrices = [105,134,130]


var pizzasize =['Small','Medium','Large']
var pizzatopping = ['Tomato','Onions','Mushroom','Green Pepper','Beef Peperoni','Periperi Chicken']
var pizzacrust=['Crispy','Stuffed','Gluten-free']


$(document).ready(function(){
    $("#form").click(function(event){
        event.preventDefault();
        var name =($("#flavour").val());
        alert(name);
        var size =parseInt($("#size").val());
        alert(size);
        var crust =parseInt($("#crust").val());
        alert(crust);
        var topping =parseInt($("#topping").val());
        alert(topping);
        var number =parseInt($("input#number").val());
        alert(number);
        var delivery = $("#delivery").val();
        alert(delivery);

        var pizzasize = pizzasize[size-1]
        var pizzacrust = pizzacrust[crust-1]
        var pizzatopping = pizzatopping[topping-1]

    
        
        pizaaprice = prices[size-1]
        
        toppizaa=toppingprices[topping-1]
        
        crustpizaa= crustPrices[crust-1]
    
        newpizzaorder = new Getpizza(name,pizzasize,pizzacrust,pizzatopping)

        newTotal = new Total(pizaaprice,crustpizaa,toppizaa,number)
        

    
    
        
        
      
        if(delivery ==="1"){
           alert("Your order is" + newpizzaorder.fullorder())
           console.log(newpizzaorder.fullorder())
        }

        // else if(delivery==="deliver" && number>0){
        //     prompt("enter your location")
        //     prompt("Your phone number")
        //     alert("Your total price for the pizza is" + (newTotal.totalprice()) + "and your price for  delivery is ksh.500 ")

        // }

    });

}); 
$(function(){
    $("#delivery").click(function(){
        // $("#data").show();

        let inputedName = $("#name").val();
        let inputedPhone = $("#phone").val();
        let inputedLocation = $("#location").val();
        alert(inputedName + " " + "We have recieved your order and the delivery wil be made at " + inputedLocation)
    });

    $("#pick").click(function(){
        alert("Thank you for choosing Us")
    })
    

});
$(document).ready(function(){
    $('form#validity').submit(function(){
        var name = $('input#name').val();
        var email = $('input#email').val();
        var message = $('input#textarea').val();
        if (name && email){
            alert (name + ', we have recived your message. Thank you for contacting us ');
        }else {
            alert('Please enter your name and email');
        }
    });
});




