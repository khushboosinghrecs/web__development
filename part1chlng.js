
const mark_mass=78;
const mark_height=1.69;
const john_mass=92;
const john_height=1.95;
const bmi_mark=mark_mass/mark_height**2;
const bmi_john=john_mass/john_height**2;
console.log(bmi_john<bmi_mark);
console.log(bmi_mark, bmi_john);
if(bmi_john>bmi_mark)
{
    console.log('john bmi is greater');
}
else{
    console.log("mark bmi is greater");
}