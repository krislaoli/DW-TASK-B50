// ini adalah asynchronus
// console.log("Kris");
// function loop () {
//   for(let i = 0; i < 7; i++) {
//     console.log(`langkag ku ${i}`);
//   }
// }

// loop()
// console.log("lidia");
// ================= asynchronus end

// console.log('buyung');

// function name() {
//   console.log('ucok');
// }

//   for(let i = 0; i < 5; i++) {
//   }

// const data = fetch("https://jsonplaceholder.typicode.com/users")
// console.log(data);
// const data = fetch("https://jsonplaceholder.typicode.com/users")
// .then(res => console.log(res))
// .catch(res => console.log(res))

const isVip = true;

const chekingVip = new Promise((resolve, reject) => {
  if (isVip) {
    resolve("Member is Vip");
  } else {
    reject("Member Isnt Vip");
  }
});

// console.log(chekingVip);
chekingVip
.then((response) => console.log('yes '  + response))
.catch((response) => console.log('no '  + response))
