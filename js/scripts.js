var price , crust_price, topping_price ;
let total = 0;
function Getpizza( name,size,crust,topping){
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
}
Getpizza.prototype.fullorder=function(){
    return this.name + ", " +  this.size + ", " + this.crust + ", " + this.topping
}
$(document).ready(function(){
    $("#form").submit(function(event){
        event.preventDefault();
        var name =$("#flavour").val();
        var size =$("#size").val();
        var crust =$("#crust").val();
        var topping =$("#topping").val();
        var number =$("#number").val();

        newpizzaorder =new Getpizza(name,size,crust,topping)
        alert("Your order is" +", " + newpizzaorder.fullorder())

        
    });


});