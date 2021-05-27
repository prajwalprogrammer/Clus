import faker from 'faker'
faker.seed(10);
const DATA = [...Array(30).keys()].map((_, i) => {
    return {
        id: faker.datatype.uuid(),
        name:faker.company.companyName(),
        img:faker.image.business(),
        price:faker.commerce.price(),
        sizes:[6,7,8,9,10],
    };
});
 
export default DATA

// [
//     {
//         "id": 0,
//         "name": "Nike Air Zoom Pegasus 36",
//         "img": "../../assets/images/bg1.png",
//         "bgColor": "#BF012C",
//         "type": "RUNNING",
//         "price": "$186",
//         "sizes": [6, 7, 8, 9, 10]
//     }
// ]