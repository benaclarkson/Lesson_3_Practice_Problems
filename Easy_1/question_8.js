// How can we add the family pet, "Dino", to the following array?

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

// Solution 1
flintstones.push('Dino');

// Solution 2
flintstones[flintstones.length] = 'Dino';

// Solution 3
flintstones.concat('Dino');