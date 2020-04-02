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

const pushSubscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/cAXtvqc5l8k:APA91bFXZuxEdlwXRsqQgiZAOIrpjdQuA8hZX0YPG2RWG9VTxToImB3apIPwCiQgarcRLJ2bnYtBoO3_I49bCFovuO566yoIDCxPMwBuqDVtIp66u3dvLhxilGcFmGFEUFz8fGhG61f7","expirationTime":null,"keys":{"p256dh":"BKqoKcPqUnZ2lqVDgLKP8iz7TIWq9y7dMJ6ZTVITy-uK47qnKtD312YedWcVzYx_Ib9CviuLPggYENPgWCmCgRE","auth":"HtF98CLp-1kp9WqM6dr5wg"}}

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

setInterval(f, 3000)