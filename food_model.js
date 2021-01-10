const { send } = require('micro');
const {database} = require('./firebase');

module.exports = {
    addFood: async (req, res) => {
        const docRef = database.collection('foods').doc('123');
        const result = await docRef.set({
            foodName: 'Pizza',
            price: 10000,
            image: "pizza.png"
        });

        send(res, 200, result);
    }
}