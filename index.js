

// use node index to run in terminal


// needed variables from lab
const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;
const plantSpace = 0.8;
const maxPlants = Math.floor(area / plantSpace);




// Part 1: testing for 1, 2, and 3 weeks
let firstPlants = 20
let plants = firstPlants


// loop through 1-3 weeks 
for (let i = 1; i <= 3; i++) {
    plants = plants * 2
    const capacity = (plants / maxPlants) * 100
    if (capacity > 80) {
        let status = "prune plants to control growth"
        console.log(status)
    } else if (capacity >= 50) {
        let status = "watch the plants because they are growing too fast"
        console.log(status)
    } else {
        let status = "plant more plants as there is enough space"
        console.log(status)
    }
    console.log(`after ${i} weeks you will have ${plants} plants`)
}




// Part 2: thinking bigger
let newStartPlants = 100;
let finalPlantCount = newStartPlants;
for (let i = 0; i < 10; i++) {
    finalPlantCount = finalPlantCount * 2;
}
let requiredSpace = finalPlantCount * plantSpace;
let updatedRadius = Math.sqrt(requiredSpace / PI);

console.log(`to have ${finalPlantCount} plants after 10 weeks,` +
    ` ${requiredSpace - area} square meters is needed.`);
console.log(`circular garden should have radius of ${updatedRadius} meters`);





// Part 3: handle errors
try {
    let initialOvergrowth = 100;
    if (initialOvergrowth * plantSpace > area) {
        throw new Error("plant count exceeds available space in the garden");
    }
    console.log("graden setup can support plant count");
} catch (error) {
    console.log(error);
}
