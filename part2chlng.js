const caltip=function(bill)
{
    return bill>=50 && bill<=200? bill*0.15 : bill *020;
}

const bills=[190, 489, 23];
const tips=[caltip(bills[0]), caltip(bills[1]), caltip(bills[2])];
const total=[tips[0]+bills[0], tips[1]+bills[1], tips[2]+bills[2]];
console.log(bills, tips, total);