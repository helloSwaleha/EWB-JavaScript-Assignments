let bill = prompt("enter bill amount:");
let percentage = prompt("enter tip percentage:");

bill = Number(bill);
percentage = Number(percentage);

if (bill>=0 && percentage>=0) {
    let tip= bill*percentage/100;
    let total= tip+bill;

    console.log("Subtotal :$" +bill);
    console.log("Tipe percentage :"+percentage+ "%");
    console.log("calculated Tip : $" +tip);
    console.log("Total amount to Pat : $"+total);

}
else{
    console.log("enter valid number");
}