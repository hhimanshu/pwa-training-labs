/*
Copyright 2018 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

// TODO 3.8 - push a message using the web push library
const webPush = require('web-push');

const pushSubscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/cB2JUdnLbGs:APA91bGtZpqMz-Ee2klmnETpSvcOYQAS0TpKJEksVOYHeEq-DBYHyDuZTHXC5oLyHd7Oaz2djEVdnfDINSws1azfBLeqH9SSPZQmC65Zk89taSfhCh7xeTp2_mgyPa8-QaYxR4PFfcm2","expirationTime":null,"keys":{"p256dh":"BKhBx6DfXSuPWHXOQS-x1llZTK3T2FXT4Yk45MkpFuPHcrRjUWq-2eSBglED5Da6SHRoDlhDvFmV6r_RL_nBvVk","auth":"vzMOUXUtHgo13zE7Ujxhxw"}}

// TODO 4.3a - include VAPID keys
const vapidPublicKey = 'BFCV2QdN0JH3f5EAf6PaA4lEOsKZTcmxI9f4aLyNv3paUF-NOf6dt-6uulkwYaq2q6017X1G3Tga4sKkPVv0gtI';
const vapidPrivateKey = 'Vqi25PCQs6CdmWLcjPaC1jsm6sMAnKMas4xpWSCEP6s';

const payload = 'Hello from server!';

const options = {
    // gcmAPIKey: 'YOUR_SERVER_KEY',
    TTL: 60,
    vapidDetails: {
        subject: 'mailto: harit.subscriptions@gmail.com',
        publicKey: vapidPublicKey,
        privateKey: vapidPrivateKey
    }
};

let f = () => webPush.sendNotification(
    pushSubscription,
    payload,
    options
);

// f() // for one-time notification
setInterval(f, 3000) // for recurring notification