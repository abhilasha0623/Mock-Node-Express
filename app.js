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


app.get('/employeeDetails',(request, response) => {
const employeeDetails = [
    {
   "Name": "Jeff",
   "Zip": "55422",
   "Age": 54,
   "Pay": 9587.23,
   "DepartmentId": 1,
   "GetTaxForm": "1099"
   },
   
   {
   "Name": "Dave",
   "Zip": "03456",
   "Age": 41,
   "Pay": 8547.55,
   "DepartmentId": 1,
   "GetTaxForm": "W2"
   },
   
   {
   "Name": "Amber",
   "Zip": "41908",
   "Age": 35,
   "Pay": 4878.1,
   "DepartmentId": 2,
   "GetTaxForm": "W2"
   },
   
   {
   "Name": "Cassie",
   "Zip": "91820",
   "Age": 28,
   "Pay": 4500,
   "DepartmentId": 1,
   "GetTaxForm": "1099"
   },
   
   {
   "Name": "Albert",
   "Zip": "54321",
   "Age": 39,
   "Pay": 5874.09,
   "DepartmentId": 2,
   "GetTaxForm": "1099"
   }
   ]
   response.send(employeeDetails);
})