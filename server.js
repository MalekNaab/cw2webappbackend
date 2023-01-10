const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<a href="/lessons">See Lessons</a> <br> <a href="/user">See User</a>');
    // res.send( "<a href='/lessons'>See Lessons</a> <br>" + "Email: " + user[0].Email + " <br> Password: " + user[0].Password);
});

app.get('/lessons', (req, res) => {

    var lessons = [
    
        {
            "subject": "Robotics",
            "description": "Basics of building Hardware and Software Intelligence",
            "location": "Portsmouth",
            "price": 149,
            "total_stock": 5,
            "stock": 5,
            "image_url": "images/undraw_artificial_intelligence_re_enpp.svg"
        },
    
        {
            "subject": "Art of Wellbeing",
            "description": "Explore the tips and techniques of being mentally healthy",
            "location": "London",
            "price": 79,
            "total_stock": 5,
            "stock": 5,
            "image_url": "images/undraw_woman_re_afr8.svg"
        },
        
        {
            "subject": "Archaelogy 101",
            "description": "Opportunity to explore past humanity, from its prehistoric origins to industrialisation and globalisation",
            "location": "Edinbrough",
            "price": 199,
            "total_stock": 5,
            "stock": 5,
            "image_url": "images/undraw_treasure_of-9-i.svg"
        },
    
        {
            "subject": "Blockchain & Crypto",
            "description": "Basics to Advanced of Blockchain Technology",
            "location": "Brighton",
            "price": 99,
            "total_stock": 5,
            "stock": 5,
            "image_url": "images/undraw_nakamoto_-2-iv6.svg"
        }
    ];
    
   
   
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json(lessons);
    
});

app.get('/user', (req, res) => {

    var user = [
        {
            ID: "123456",
            Name: "Ronit Rai",
            Email: "ronitrai.rk@gmail.com",
            Password: "rOnItRaI_123"
        }
    ];
    

    // res.send( "<a href='/lessons'>See Lessons</a> <br>" + "Email: " + user[0].Email + " <br> Password: " + user[0].Password);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json(user);
    // res.send( "<a href='/lessons'>See Lessons</a> <br>" + "Email: " + user[0].Email + " <br> Password: " + user[0].Password);
});

app.listen(3000);