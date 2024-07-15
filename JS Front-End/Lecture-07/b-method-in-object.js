//Declare method in object
let robot = {
    name: 'Wall-E',
    color: 'White',
    clean: function () {
        console.log('Robot cleaning...');
    },
    move: function () {
        console.log('Robot moving...');
    },
    charge: function () {
        console.log('Robot charging...');
    },
    cook: function () {
        console.log('Robot cooking...');
    },
    dance() {
        console.log('Robot dancing...');
    },
};

robot.clean(); //Cleaning
robot.move(); //Moving

//Object values
console.log(Object.values(robot));

//Object keys
console.log(Object.keys(robot));

//Object entries
console.log(Object.entries(robot));