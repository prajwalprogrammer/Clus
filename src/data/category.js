import faker from 'faker'
faker.seed(10);
const DATA = [...Array(30).keys()].map((_, i) => {
    return {
        id: faker.datatype.uuid(),
        name:faker.commerce.productName(),
        bgColor:faker.commerce.color(),
        type:faker.commerce.department(),
        price:faker.commerce.price(),
        sizes:[6,7,8,9,10]
    };
});

export default DATA

// [
//     {
//         "id": 0,
//         "name": "Winter Collection",
//         "bgColor": "#BF012C",
//         "type": "RUNNING",
//         "price": "$186",
//         "sizes": [6, 7, 8, 9, 10]
//     },
// ]