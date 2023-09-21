const express = require('express');
const cors = require('cors')
const app = express();

app.use(express.json());

app.listen(4000, () => {
    console.log("Server Listening on PORT: 4000");
});

app.use(cors());

app.get('/foodList', (request, response) => {
    const foodInfo = [
        {
            "Name": "Apple",
            "Type": "fruit",
            "Price": 100
        },
        {
            "Name": "pizza",
            "Type": "italian",
            "Price": 370
        },
        {
            "Name": "pasta",
            "Type": "italian",
            "Price": 570
        },
        {
            "Name": "Burger",
            "Type": "Mac&Cheese",
            "Price": 310
        },
        {
            "Name": "salad",
            "Type": "Veg",
            "Price": 50
        },
        {
            "Name": "asparagus",
            "Type": "veg",
            "Price": 310
        },
        {
            "Name": "bell pepper",
            "Type": "veg",
            "Price": 120
        },
        {
            "Name": "apricot",
            "Type": "fruit",
            "Price": 780
        }]
    response.send(foodInfo);
});