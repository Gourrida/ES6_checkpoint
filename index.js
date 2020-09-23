const pets = [
  { name: "Max", type: "dog", bornOn: 2018 },
  { name: "Angel", type: "cat", bornOn: 2015 },
  { name: "Jasper", type: "dog", bornOn: 2016 }
];

const getAge = pet => new Date().getFullYear() - pet.bornOn;

console.log(getAge(pets[0]));

const petsWithAge = pets.map(pet=>({...pet,age:getAge(pet)}));
console.log(petsWithAge);

const dogs=petsWithAge.filter(pet=>pet.type==="dog");
console.log(dogs);

const Jasper=petsWithAge.find(pet=>pet.name==="Jasper");
console.log(Jasper);
console.log(`Jasper is ${Jasper.age} years old`);