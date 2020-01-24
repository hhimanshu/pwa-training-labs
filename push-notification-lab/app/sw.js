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

// TODO 2.6 - Handle the notificationclose event
self.addEventListener('notificationclose', event => {
    const notification = event.notification;
    const primaryKey = notification.data.primaryKey;
  
    console.log('Closed notification: ' + primaryKey);
  });

// TODO 2.7 - Handle the notificationclick event
// self.addEventListener('notificationclick', event => {
//     // TODO 2.8 - change the code to open a custom page
//     const notification = event.notification;
//     let primaryKey = notification.data.primaryKey;
//     // clients.openWindow('https://google.com');
//     clients.openWindow('samples/page' + primaryKey + '.html');
//     notification.close()    
//   });
self.addEventListener('notificationclick', event => {
    const notification = event.notification;
    const primaryKey = notification.data.primaryKey;
    const action = event.action;
  
    if (action === 'close') {
      notification.close();
    } else {
      clients.openWindow('samples/page' + primaryKey + '.html');
      notification.close();
    }
  
    // TODO 5.3 - close all notifications when one is clicked
  
  });


// TODO 3.1 - add push event listener
