const arrayvalues=['jonas', 'micheal', 2070-2056, ['khushi', 'khush', 'khusboo']];
//object
const jonas={
    name:'jonas', lastname:'micheal', dob:2070-2056, frindes:['khushi', 'khush', 'khusboo']
};
 console.log(jonas.lastname);
 console.log(jonas['lastname']);
 namekey='name';
 console.log(jonas['name'+namekey]);

 const property=prompt(`what do you want to know about jonas? chose any one name, lasname, dob, freinds`);
 console.log(jonas.property);// will give undefined because dot operator is used to access the key which is defined in valude;
 if(jonas[property])
 {
 console.log(jonas[property]);
 }
 else
 {
console.log('wrong input');
 }

 jonas.location='india';
 jonas['id']='@gmail.com';
 console.log(jonas);
 console.log(`the firstname ${jonas.name} has ${jonas.frindes.length} and his friend are ${jonas.frindes[0]}`);


 const  jonas2={
    name:' jonas2', lastname:'micheal', dob:2040, frindes:['khushi', 'khush', 'khusboo'],
    // calcage=function(dob)
    // {
    //     return 2070-dob;
    // }
    // calcage: function()
    // {
    //     return 2060-this.dob;
    // }
    calcage: function()
    {
        this.age=2040-this.dob;
        return this.age;
    },
    getsummarry: function()
    {
        return `${this.name} is ${this.calcage()} years old`;
    }
};
console.log(jonas2.calcage());
console.log( jonas2.age);
console.log(jonas2.getsummarry());