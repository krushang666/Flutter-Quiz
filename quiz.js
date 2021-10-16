const r = require("readline-sync");
const chalk = require("chalk");
const question = require("./questions");
var cnt = 0;
var total = question.length;
var blue = chalk.blue.bold;
var yellow = chalk.yellow.italic;
var green = chalk.green.italic;
var red = chalk.red.bold.bgHex("#000111");
var purple = chalk.magenta.bold.bgHex("#000111");
var score=0;

var color=[blue,yellow,green,red,purple];

console.log(blue("\nWelcome To The Game!!!!"));
console.log(yellow("\nHow Well Do You Know About Flutter!!!"));

var name=r.question(purple("\nEnter Your Name:- "));
console.log(purple("\nWelcome "+name));
console.log("\n! There will be "+ total +" question with 4 option you can select any one i.e", yellow("1, 2, 3, 4"), "!\n");
console.log(green("+5 "), purple("for right answer,"), red(" -2"), purple(" for wrong answer!\n"));

question.forEach(Ask_question);
console.log("\n\nThank You For Playing!!!!! ");
console.log(purple(name+"'s Score:- "+score));
function Ask_question(q){
    console.log(color[Math.floor(Math.random() * color.length)]("\n "+(++cnt)+". "+q.question));
    q.option.forEach((v,i)=>{
        console.log("\n "+(i+1)+". "+v);
    });
    var ans=user_answer();q
    if(q.option[ans-1]==q.answer){
        score+=5;
        console.log(green("\nCorrect Answer!!!!"));
    }
    else{
        score-=2;
        console.log(red("\n!!Wrong Answer!!!!!!!\n\n2Correct Answer :- "+q.answer));
    }
}

function user_answer(){
    var ans=r.question(color[Math.floor(Math.random() * color.length)]("\nEnter Your Answer:- "));
    if(ans>0 && ans<5){
        return ans;
    }
    else{
        console.log(red("\nEnter Valid Input!!!!!1"));
        return user_answer();
    }
}