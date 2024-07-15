function scheduleMeeting(input) {

    const meetings = {};

    for (let line of input) {
        let [day, name] = line.split(' ');
        if (meetings.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            meetings[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }

    for (const key in meetings) {
        console.log(`${key} -> ${meetings[key]}`);
    }
}

scheduleMeeting(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim']); // Scheduled for Monday, Scheduled for Wednesday, Conflict on Monday!, Scheduled for Friday