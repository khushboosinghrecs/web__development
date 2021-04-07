const dolphinscore1=96;
const dolphinscore2=108;
const dolphinscore3=47;
const avrgdolphin=(dolphinscore1+dolphinscore2+dolphinscore3)/3;
const koalasscore1=88;
const koalasscore2=91;
const koalasscore3=110;
const avgkoalas=(koalasscore1+koalasscore2+koalasscore3)/3;
if(avgkoalas>avrgdolphin && avgkoalas>100)
console.log("koalas win");
else if(avrgdolphin>avgkoalas && avrgdolphin>100)
console.log("dolphin win");
else
console.log("draw");