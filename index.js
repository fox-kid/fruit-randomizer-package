const data = require("./fruits/fruits.json");


// function we will need to get singular values of each fruit for any array we get

function fruitSingular(props) {
    return props.map((item) => {
        if(item.endsWith("ies")) {
            return item.replace("ies", "y");
        } else if(item.endsWith("s")) {
            return item.slice(0, -1);
        } else {
            return item;
        }
    })
}

function randomFruit(fruitProps = data.data) {
    const fruitSingularArr = fruitSingular(fruitProps);

    return fruitSingularArr[Math.floor(Math.random() * fruitSingularArr.length)];
}

function randomFruits(qt = 5, fruitProps = data.data) {
    const fruitSingularArr = fruitSingular(fruitProps);

    const requestedArr = [];

    for(let i = 0; i < qt; i++){
        requestedArr.push(fruitSingularArr[Math.floor(Math.random() * fruitSingularArr.length)]);
    }

    return requestedArr;
}

module.exports = {
    randomFruit: randomFruit,
    randomFruits: randomFruits,
    fruits: data
}
