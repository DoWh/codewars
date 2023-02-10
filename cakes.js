function cakes(recipe, available) {
    let count,current;
    for(ingredient in recipe){
        if (available[ingredient] != undefined) {
            current = Math.trunc(available[ingredient] / recipe[ingredient]);
            if ((current < count) || (count == undefined)) count = current;
        } else return 0;
    }
    return count;
}

let recipe = {flour: 500, sugar: 200, eggs: 1};
let available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};

// let recipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
// let available = {sugar: 500, flour: 2000, milk: 2000};

console.log(cakes(recipe, available))