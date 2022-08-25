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

const addToCalendar = (meetingDetails) => {
  const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
  return Promise.resolve(calender);
};

async function myMeeting() {
  try {
    const meetingDetails = await meeting;
    const calender = await addToCalendar(meetingDetails);
    console.log(calender);
  } catch {
    console.log(`something wrong happened`);
  }
}

myMeeting();

console.log(`Hello meeting...`);
 */
