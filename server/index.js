const express = require('express');
const bodyParser = require('body-parser');
const App = express();

App.use(bodyParser.json());

const userExist = {
    login: 'admin',
    pass: 'admin'
};

//login
App.post('/api/user', (req, res) => {
    const login = req.body.login;
    const pass = req.body.pass;

    if (userExist.login === login && userExist.pass === pass) {
        return res.json({
            userExist: 'exist'
        })
    }
    else {
        return res.json({
            userExist: 'not exists'
        })
    }
});
const userProjects = {
    "items":[
        {
            id:0,
            userId: 1,
            title:"Mobile app 0",
            message: "sad sad asd asd as",
            date: "sadasdasd",
            price: "1500",
            status: 0,
            deadline:"10 days left",
            spent:"40 hours",
        },
        {
            id:1,
            userId: 1,
            title:"Mobile app 10",
            message: "sad sad asd asd as",
            date: "sadasdasd",
            price: "1500",
            status: 0,
            deadline:"10 days left",
            spent:"40 hours",
        },
        {
            id:2,
            userId: 1,
            title:"Mobile app 1",
            message: "sad sad asd asd as",
            date: "sadasdasd",
            price: "1500",
            status: 1,
            deadline:"10 days left",
            spent:"40 hours",
        },
        {
            id:3,
            userId: 1,
            title:"Mobile app 2",
            message: "sad sad asd asd as",
            date: "sadasdasd",
            price: "1500",
            status: 2,
            deadline:"10 days left",
            spent:"40 hours",
        },
        {
            id:4,
            userId: 1,
            title:"Mobile app 3",
            message: "sad sad asd asd as",
            date: "sadasdasd",
            price: "1500",
            status: 3,
            deadline:"10 days left",
            spent:"40 hours",
        },
        {
            id:5,
            userId: 1,
            title:"Mobile app",
            message: "sad sad asd asd as",
            date: "sadasdasd",
            price: "1500",
            status: 4,
            deadline:"10 days left",
            spent:"40 hours",
        },
        {
            id:6,
            userId: 1,
            title:"Mobile app",
            message: "sad sad asd asd as",
            date: "sadasdasd",
            price: "1500",
            status: 5,
            deadline:"10 days left",
            spent:"40 hours",
        },
    ]


}

const userMessages = {
    "items":[
        {
            id:0,
            userId: 1,
            name: "Michelle Stewart",
            message: "Today, 5:32 PM",
            date: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et",
            status: true,
        },
        {
            id:1,
            userId: 2,
            name: "Jolene Slater",
            message: "Today, 5:31 PM",
            date: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et",
            status: true,
        },
        {
            id:2,
            userId: 2,
            name: "Lyall Roach",
            message: "Today, 5:31 PM",
            date: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et",
            status: true,
        },
        {
            id:3,
            userId: 2,
            name: "Michelle Stewart",
            message: "Today, 5:31 PM",
            date: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et",
            status: false,
        },
        {
            id:4,
            userId: 3,
            name: "Lyall Roach",
            message: "as 123 wd asd asd",
            date: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et",
            status:true,
        }
    ]


};
//HomeSalesReport
const reportSales = {
    year: [150, 216, 168, 105, 66, 105, 105, 153, 123, 195, 161, 51],
    month: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
};



App.get("/api/user/messages", (req, res) => {
    return res.json(userMessages.items)
});
App.get("/api/all/projects", (req, res) => {
    return res.json(userProjects.items)
});
App.get("/api/user/projects", (req, res) => {
    return res.json(userProjects.items)
});

//Sales Report
App.get("/api/user/report/year", (req, res) => {
    return res.json(reportSales.year)
});

App.get("/api/user/report/month", (req, res) => {
    return res.json(reportSales.month)
});


App.listen(4000, () => {
    console.log('server is started');
});
