function calcagerage(value1, value2, value3)
{
    return (value1+value2+value3)/3;
}

     const dolphinaerage=calcagerage(44, 23, 71);
     const koalasaverage=calcagerage(65, 54, 49);
 function checkwinner(dolphin, koalas)
 {
    if(dolphin===2*koalas)
    return `dolphin wins`;
  else  if (koalas===2*dolphin)
    return `koals wins`;
    else
    return `none win`;
 }

console.log(checkwinner(dolphinaerage, koalasaverage));