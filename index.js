const input = require("readline-sync");
const chalk = require('chalk');
const log = console.log;
const green = chalk.greenBright.bold.bgBlackBright;
const red = chalk.redBright.bgBlackBright.bold;
const white = chalk.whiteBright.bgBlackBright.bold;
var score = 0;
var top=[{
  name:green("DEVELOPER"),
  score:green("4"),
}];

log("               "+green.underline("WELCOME, LET SEE HOW WELL DO YOU KNOW ME !!")+"            \n");

var userName = input.question(red("ENTER YOUR NAME : "));

log("\n"+green.underline("WELCOME! "+userName.toUpperCase()));

log("\n"+red("LET'S BEGIN ....."));

//----FUNCTION-----
function play(question,answer){
    log("\n"+question);
    var creater=['SILICON VALLEY','BILL GATES','MESSI','JAVASCRIPT'];
    var index=input.keyInSelect(creater);
    if(creater[index]===answer){
      log("\n"+green("CORRECT"));
      log("\n"+"---------------------------------------------------------------");
      score=score+1;
    }
    else{
      log("\n"+red("WRONG"));
    }
}

//----ARRAY+OBJECTS-----
var quelist=[{
  question:white("1.WHO INSPIRES ME A LOT ? "),
  answer:"BILL GATES",
},
{
  question:white("2.WHICH PROGRAMMING LANGUAGE I LIKE ? "),
  answer:"JAVASCRIPT",
},{
  question:white("3.WHICH WEB SERIES I LIKE ? "),
  answer:"SILICON VALLEY",
},{
  question:white("4.WHICH SPORTSTAR I LIKE ? "),
  answer:"MESSI",
}
];

//----LOOPS----
for(i=0;i<quelist.length;i++){
  var current=quelist[i];
  play(current.question,current.answer);
}
log("\n"+green("YOUR SCORE : ",score));
log("\n"+white.underline("TOP SCORE : "));
//----TOP -----
for(var i=0;i<top.length;i++){
  var c=top[i];
  log("\nNAME: "+c.name);
  log("\nSCORE: "+c.score);
}
log("\n"+"                 "+green.underline("THANKS FOR PLAYING !!")+"                         ");

