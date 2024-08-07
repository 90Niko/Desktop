function callback(){
    console.log("Second");
};

console.log("First");

setTimeout(callback,0);

console.log("Third"); 