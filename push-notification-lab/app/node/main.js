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

const pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/f9S8kOzPe1Y:APA91bFq9m5A7WR3YL60yO7_5POLg6Tp32Mb5qX2MEg0psZrm9VKH0tnq4jtcKksvkL_cA2Ty67ZD0rcuV-3CLYLIkT1QNeRYtlplAif5fLRCPItmxO8nz29zPt1GtZ1pDb-rVZ21Iu3",
    "expirationTime": null,
    "keys": {
        "p256dh": "BAE1Bk8Qx-9O5VKzNwE6XCdUXSMoPEq-Ve-B-nsTrpkGQ4FsQxsCxtL7-C2YFlWgJLFvyjaLXJKrezQ-SS73bZI",
        "auth": "t8zeNga_qX9qlJ0eH8AgXQ"
    }
};

// TODO 4.3a - include VAPID keys
const vapidPublicKey = 'BKrMB5VoRgrYcJ4yjcTk2BHhsOK2XzGpKv379pUoYGLYV93kEt1QdDKe14igMbNMTZ8ytiD7umZ-g0U_5cPTS08';
const vapidPrivateKey = 'AFvbeQvXZCHk4acEK0GKrCpLIaxNvoskibnyuUoe3OU';

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