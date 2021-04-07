function logger(){
    console.log('My name is khushi');
}
function fruitprocessor(apples, bnana)
{
    console.log(apples, bnana);
    const juice=`juice is of ${apples} && of ${bnana}`;
    return juice;
}
const fruiapple=fruitprocessor(5, 9);
console.log(fruiapple);
logger();
//function declaration
 function calculateage(year)
 {
     realage=year-2000;
     return realage;
 }
//fucntion expression
 const anotherfun=function(currentyear)
 {
     return currentyear-2000;
 }
  console.log(anotherfun(2020));
  console.log(calculateage(2025));

  //arrow fucnction

  const store=birthyear=> 2030 - birthyear;
  const keep=store(2000);
  console.log(keep);

  const yearuntillretirement=birthyear=>{
      const age=2037-birthyear;
      const retire=65-age;
      return retire;
  }
  console.log(yearuntillretirement(2023));
    const newfun=(birthyear, name)=>{
      const age=2037-birthyear;
      const retire=65-age;
      return `${name} is ${age} years old`;
  }
  console.log(newfun(2023, 'bob'));

  //fucntion calling other function
  
  function cutfruit(apples)
      {
      return apples*4;
  }
  function fruitprocessor(apples, orange)
  {
      const cutapples=cutfruit(apples);
      const cutorange=cutfruit(orange);
      const exp=`apples are ${cutapples} and orange are ${cutorange}`;
      return exp;
  }