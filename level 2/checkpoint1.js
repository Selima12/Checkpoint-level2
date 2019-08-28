const pets = [
    { name: "Max", type: "dog", bornOn: 2018 },
    { name: "Angel", type: "cat", bornOn: 2015 },
    { name: "Jasper", type: "dog", bornOn: 2016 }
];
      
      
const getAge = pet =>  new Date().getFullYear() - pet.bornOn;




let petsWithAge=[]

  pets.forEach((pet,i) =>{
    pet = pets[i];
    pet.age = getAge(pet)
   
    petsWithAge.push(pet)
  });
  console.log(petsWithAge);


 let dogs = petsWithAge.filter(pet=>pet.type==="dog") 
  console.log(dogs);


  let jasper = petsWithAge.filter(pet=>pet.name==="Jasper")
  console.log(jasper)
  console.log(`Jasper is ${jasper[0].age} years old
}`)