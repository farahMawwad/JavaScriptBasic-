let Cash =1000;
let current_liabilities = 500;
let Cash_flow_ratio = {
    cash: 1000, 
    current_liabilities: 500, 
    output: 1000/500
}
console.log(Cash_flow_ratio)

let revenues =1000;
let expenses= 500;
let Net_income = {
    revenues: 1000, 
    expenses: 500, 
    output: 1000-500
}

console.log(Net_income);


let liabilities =1000;
let quity= 500;
let Total_assets = {
    liabilities: 1000, 
    quity: 500, 
    output: 1000+500
}
console.log(Total_assets)

let profit =1000;
let sales= 500;
let Net_income1 = {
    liabilities: 1000, 
    quity: 500, 
    output: 1000*500
}

console.log(Net_income1)
let number = 18
let number_length = 3;
let Average = {
    numbers: "2,9,7",
 
    output: number/number_length
}

console.log(Average)


let price= 150;
 let discount= 30/100;
 let mult =price*discount;
 
let Discount = {
    price :150,
 discount : 30/100,
 output:price-mult
}

console.log(Discount)

let num1=20; 
let result = console.log(18<num1 && num1<30);
let Age_limit = {
    number: 20 ,

output : result,

}
console.log( Age_limit );
 

let num11=2; 
let num12=3; 

let Exponential = {
    number1: 2 ,
    number2: 3,
    output :num11**num12
}
console.log( Exponential );
 
let num_1=4; 
let num_2=10; 
let num_3=2; 
let num_4 =num_1*num_3;


let Remainder = {
    number1: 4 ,
    number2: 10,
    output :num_2-num_4
}
console.log( Remainder );
 

console.log( "task2" );

console.log (typeof (100)+" " +
typeof (73.9)+" " +
typeof (NaN)+" " +
typeof ( "Water" )+" " +
typeof (false)+" " +
typeof(9!=11)+" " +
typeof("Orang" + "e")+" " +
typeof("Orange" - "s")+" " +
typeof( "4" + "8")+" " +
typeof( "4" - "8")+" " + 
typeof( "name" + 3)+" " +
typeof( "name" - 3)+" " +
typeof(82 * "word" ) +" " +
typeof(1 + "hello" ) +" " +
typeof("hello" + 1 ) +" " +
typeof( 1 + true )+" " +
typeof(  "hello" + true)+" " +
typeof (Infinity) +" " +
typeof(1 == '1' ) +" " +
typeof(1 === '1' ))

console.log( "task3" );

let text = "welcome to Orange ";
let text3 = "cactus";
let text1=text.toUpperCase();
let text2=text.toLowerCase();
console.log(text1);
console.log(text1.slice (7,10));
console.log(text1.replace( "WELCOME TO" ,"Hello from"));
console.log(text2);
console.log(text2.length -1);
console.log(text+"Jordan");
console.log(text3.substring(0,2)+"*"+text3.substring(3,5));

