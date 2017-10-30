function TaxCalculator(){
    var price,tax,Tax;
    
    price = document.getElementById("price").value;
    
    tax = document.getElementById("tax").value;
    
    let result = calculate(price,tax);
    $("#resultMessage").html("Net Salary is: $"+result);
    }
    

    
    function calculate(price, tax) {
    let resultMessage = document.getElementById("resultMessage");
    if (price == "" && tax== "")
        {
        alert("Please enter values. It shouldn't be blank!")
         throw Error("Please enter values. It shouldn't be blank!"); 
        }
    if (isNaN(price) || isNaN(tax))
        {
        alert("Value should be a number!")
        throw Error ("Value should be a number!");
        }
    if ( price <=0 || tax <=0) 
        {
        alert("Value shouldn't be 0 or negative value!")
            throw Error("Value shouldn't be 0 or negative value!");
        }
    tax = parseInt(tax);
    price = parseInt(price);
    Tax = tax * 0.01;
    let total = (price * Tax);
    return total;
    }