import inquirer from "inquirer"

const answer:{
    numberOne:number,
    numberTwo:number,
    operator:string,

} = await inquirer.prompt([
{
    type:"number",
    name:"numberOne",
    message:"enter your first number"
},
{
    type:"number",
    name:"numberTwo",
    message:"enter your second number"
},
{
    type:"list",
    name:"operator",
    choices: ["+","-","*","/"],
    message:"select operator"
}
]);

const {numberOne,numberTwo,operator} = answer;

if(numberOne && numberTwo && operator){
    let answer: number = 0;
    if(operator === "+"){
        answer = numberOne + numberTwo
    } else if(operator === "-"){
        answer = numberOne - numberTwo
    } if (operator === "*"){
        answer = numberOne * numberTwo 
    } if (operator === "/"){
        answer = numberOne / numberTwo
    }

    console.log("your result is :", answer)
}else {
    console.log("kindly enter valid input")
}






















