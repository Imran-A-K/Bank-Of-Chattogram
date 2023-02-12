/*
step:1 adding event handler to withdraw button
step:2 get the withdraw amount from the input field
    step2.5 make sure to  convert it to number with parseFloat()
step:3 get previous withdraw total
step:4 calculate total withdraw amount
    step:4-5 set total withdraw amount
step:5  get the previous balance total
step:6 calculate new balance total
    step:6-5 set the new balance total
step:7 clearing input field
*/



// step:1 
document.getElementById('btn-withdraw').addEventListener('click', function(){
    //step:2
    const withdrawField = document.getElementById('withdraw-field');
    const newWithDrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithDrawAmountString);
    
    //step:3
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    
    //step:7 
    withdrawField.value = '';

    if(isNaN(newWithdrawAmount)){
        alert("Please provide a valid number!");
        return;
    }


    

    //step:5
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    
    if(newWithdrawAmount > previousBalanceTotal){
        //withdrawField.value = '';
        alert("You don't have this much money!");
        return;
    }
        //step:4 
        const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
        //step:4-5
    withdrawTotalElement.innerText = currentWithdrawTotal;

    //step:6 
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

})