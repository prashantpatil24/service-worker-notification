const express = require("express");
const webpush = require("web-push");
const bodyParser = require("body-parser");
const path = require("path");

//init app
const app = express();

//configure client path
app.use(express.static(path.join(__dirname, "client")));

//extracts the entire body portion of an incoming 
//request stream and exposes it on
app.use(bodyParser.json());

//public and private key
const publicVapidKey = 'BL45R9oTyuOJ7SWImxwH4rjO_YqK2NWaVEPm5_sMjetR5xIiKZVETA1YuErc-qIer1WBlcz96b5njgz1pQ1htgg';
const privateVapidKey = 'lLhsEzZpFK6NK5Ed_dZPugPche4b3_32yJ2Acbd7IKQ';

//who sending push notification
webpush.setVapidDetails('mailto:test@test.com', publicVapidKey, privateVapidKey);

//subscribe route
console.log('0. subscribe method regisered in server side...');
app.post('/subscribe', (req, res) => {

    //get push subscription object to send to client
    const subscription = req.body;

    //send 201 - resource created
    res.status(201).json({});

    //create payload : optional

    const payload = JSON.stringify({
        title: 'This is Pust test notification',
        options: {
           // data: "https://www.google.com",
            body: "Notified by Push Test demo",
            icon: "https://freeiconshop.com/wp-content/uploads/edd/notification-flat.png",
           // vibrate: [200, 100, 200],
            //image: "https://freeiconshop.com/wp-content/uploads/edd/notification-flat.png",
            //actions: [{ action: "Detail", title: "View", icon: "https://via.placeholder.com/128/ff0000" }]
        }
    });

    //pass object to sendNotification
    console.log('6. send notification from server..');
    webpush.sendNotification(subscription, payload).catch(err => console.error(err));
});

const port = 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));