/* 
const myPromise2 = new Promise((resolve, reject) => {
  const user = null;

  if (!user) {
    reject('Something went wrong!');
  } else {
    setTimeout(() => {
      resolve('Successfully get the data...');
    }, 1000);
  }
});

myPromise2
  .then((res) => console.log('From Then:', res))
  .catch((err) => console.log('From Catch:', err));
 */

/* const myPromise = new Promise((resolve, reject) => {
  const user = true;

  if (!user) {
    reject('Something went wrong!');
  } else {
    setTimeout(() => {
      resolve({ name: 'john' });
    }, 1000);
  }
});

const userIds = [1, 2, 3, 4, 5];
let userData = [];

for (let i = 0; i < userIds.length; i++) {
  const userId = userIds[i];
  userData.push(myPromise);
}

Promise.all(userData).then((res) => {
  console.log(res);
});

// myPromise
//   .then((res) => console.log('From Then:', res))
//   .catch((err) => console.log('From Catch:', err));
 */

/* 
const hasMeeting = false;

const meeting = new Promise((resolve, reject) => {
  if (!hasMeeting) {
    const meetingDetails = {
      name: 'Technical Meeting',
      location: 'Google Meet',
      time: '10:00 PM',
    };
    resolve(meetingDetails);
  } else {
    reject(new Error('Meeting already scheduled!'));
  }
});

const addToCalendar = (meetingDetails) => {
  const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;

  return Promise.resolve(calender);
};

meeting
  .then(addToCalendar)
  .then((res) => {
    console.log('then:', res);
  })
  .catch((err) => {
    console.log('catch:', err.message);
  });

console.log('Hello...');
 */

/* 
const promise1 = Promise.resolve(`Promise 1 resolved`);

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`Promise 2 resolved`);
  }, 2000);
});

// promise1.then((res) => console.log(res));
// promise2.then((res) => console.log(res));

// Promise.all([promise1, promise2]).then((res) => console.log(res));

Promise.race([promise1, promise2]).then((res) => {
  console.log(res);
});
 */
/* 
const hasMeeting = true;

const meeting = new Promise((resolve, reject) => {
  if (!hasMeeting) {
    const meetingDetails = {
      name: 'Technical team meeting',
      location: 'Google meet',
      time: '10:00 PM',
    };
    resolve(meetingDetails);
  } else {
    reject(new Error(`Meeting already scheduled!`));
  }
});

// const addToCalendar = (meetingDetails) => {
//   return new Promise((resolve, reject) => {
//     const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
//     resolve(calender);
//   });
// };

const addToCalendar = (meetingDetails) => {
  const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
  return Promise.resolve(calender);
};

meeting
  .then(addToCalendar)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err.message);
  });
 */
