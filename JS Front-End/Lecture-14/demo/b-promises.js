//create promise
const marriagePromise = new Promise((resolve, reject) => {

    setTimeout(() => {
        if (Math.random() < 0.5) {
            resolve('Just Married!');
        } else {
            reject('It`s me,not you!')
        }
    }, 2000);
});

//pending state
console.log(marriagePromise);

//consume promise
marriagePromise.then((result) => {
    return console.log(result);
}).catch((reason) => {
    return console.log('Marriage canceled: ', reason);
}).finally(() => {
    return console.log('Pay the wedding');
})


//promise all

Promise.all([marriagePromise,Promise.resolve('Some promise resolved'),'Pesho','20'])
.then((result)=>{
 console.log(result)
})
.catch((reject)=>{
console.log(reject);
})

//promice race