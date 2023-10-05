// let after = false;
// const dataBlog = [];

// document.getElementById("contactForm").addEventListener("submit", (e) => {
//   e.preventDefault();

//   let title = document.getElementById("input-blog-title").value;
//   let content = document.getElementById("input-content-blog").value;
//   let image = document.getElementById("input-blog-image").files;

//   console.log(dateToSeconds(new Date(startDate)));
//   console.log(dateToSeconds(new Date(endDate)));

//   if (projectName == "") {
//     return alert("Project Name diperlukan!");
//   } else if (startDate == "" || endDate == "") {
//     return alert("Start Date & End Date diperlukan!");
//   } else if(dateToSeconds(new Date(startDate)) > dateToSeconds(new Date(endDate))) {
//     return alert("Start Date tidak boleh lebih besar dari End Date!");
//   } else if (description == "") {
//     return alert("Description diperlukan!");
//   } else if (
//     javascript.checked == false &&
//     php.checked == false &&
//     golang.checked == false &&
//     java.checked == false
//   ) {
//     return alert("Technologies diperlukan setidaknya satu!");
//   } else if (image.length == 0) {
//     return alert("Image diperlukan!");
//   }

//   image = URL.createObjectURL(image[0]);

//   let project = {
//     projectName,
//     startDate,
//     endDate,
//     description,
//     technologies: {
//       javascript: javascript.checked ? javascript.value : null,
//       java: java.checked ? java.value : null,
//       golang: golang.checked ? golang.value : null,
//       php: php.checked ? php.value : null,
//     },
//     image,
//     createdAt: new Date(),
//   };

//   dataBlog.push(project);

//   if (after) {
//     renderProject();
//   } else {
//     after = true;
//     setInterval(function () {
//       renderProject();
//     }, 1000);
//     renderProject();
//   }
// });

// function renderProject() {
//   document.querySelector(".project-card-container").innerHTML = "";

//   for (let i = 0; i < dataBlog.length; i++) {
//     document.querySelector(".project-card-container").innerHTML += `
//       <div class="project-card">
//         <img class="project-image" src="${dataBlog[i].image}" alt="Project ${
//       i + 1
//     } Image" width="100%">
//         <h3 class="project-title"><a href="./projectdetail.html">${
//           dataBlog[i].projectName
//         }</a></h3>
//         <small class="project-duration">Durasi: ${dataBlog[i].startDate} - ${
//       dataBlog[i].endDate
//     } (${dateStatus(
//       dateToSeconds(dataBlog[i].endDate) -
//         dateToSeconds(dataBlog[i].startDate)
//     )})</small>
//         <p class="project-description">
//           ${dataBlog[i].description}
//         </p>
//         <div class="project-technologies">
//           ${
//             dataBlog[i].technologies.javascript
//               ? `<i class="fa-brands fa-square-js"></i>`
//               : ""
//           }
//           ${
//             dataBlog[i].technologies.golang
//               ? `<i class="fa-brands fa-golang"></i>`
//               : ""
//           }
//           ${
//             dataBlog[i].technologies.php
//               ? `<i class="fa-brands fa-php"></i>`
//               : ""
//           }
//           ${
//             dataBlog[i].technologies.java
//               ? `<i class="fa-brands fa-java"></i>`
//               : ""
//           }
//         </div>
//         <div class="project-time">
//           <small>${getFullTime(new Date())}</small>
//           <small>${getDistanceTime(dataBlog[i].createdAt)}</small>
//         </div>
//         <div class="project-actions">
//           <button>Edit</button>
//           <button>Delete</button>
//         </div>
//       </div>
//     `;
//   }
// }

// function dateToSeconds(date) {
//   return Math.floor(new Date(date).getTime() / 1000); // Menggunakan getTime() untuk mendapatkan waktu dalam milidetik, lalu dibagi 1000 untuk mendapatkan detik
// }

// function secondsToDays(seconds) {
//   const secondsInADay = 86400; // Jumlah detik dalam sehari (24 jam x 60 menit x 60 detik)
//   return Math.floor(seconds / secondsInADay);
// }

// function secondsToMonths(seconds) {
//   const secondsInMonth = 60 * 60 * 24 * 30.44; // Rata-rata jumlah detik dalam sebulan
//   return Math.floor(seconds / secondsInMonth);
// }

// function secondsToYears(seconds) {
//   const secondsInYear = 60 * 60 * 24 * 365.25; // Rata-rata tahun dalam detik
//   return Math.floor(seconds / secondsInYear);
// }

// function dateStatus(seconds) {
//   if (seconds > 60 * 60 * 24 * 365.25) {
//     return `${secondsToYears(seconds)} Tahun`;
//   } else if (seconds > 60 * 60 * 24 * 30.44) {
//     return `${secondsToMonths(seconds)} Bulan`;
//   } else {
//     return `${secondsToDays(seconds)} Hari`;
//   }
// }

// function getFullTime(time) {
//   let monthName = [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sep",
//     "Oct",
//     "Nov",
//     "Dec",
//   ];

//   let date = time.getDate();
//   let monthIndex = time.getMonth();
//   let year = time.getFullYear();

//   let hours = time.getHours();
//   let minutes = time.getMinutes();

//   if (hours <= 9) {
//     hours = "0" + hours;
//   } else if (minutes <= 9) {
//     minutes = "0" + minutes;
//   }

//   return `${date} ${monthName[monthIndex]} ${year} ${hours}:${minutes} WIB`;
// }

// function getDistanceTime(time) {
//   let timeNow = new Date();
//   let timePost = time;

//   let distance = timeNow - timePost;

//   let milisecond = 1000;
//   let secondInHours = 3600;
//   let hoursInDays = 24;

//   let distanceDay = Math.floor(
//     distance / (milisecond * secondInHours * hoursInDays)
//   );
//   let distanceHours = Math.floor(distance / (milisecond * 60 * 60));
//   let distanceMinutes = Math.floor(distance / (milisecond * 60));
//   let distanceSecond = Math.floor(distance / milisecond);

//   if (distanceDay > 0) {
//     return `${distanceDay} days ago`;
//   } else if (distanceHours > 0) {
//     return `${distanceHours} hours ago`;
//   } else if (distanceMinutes > 0) {
//     return `${distanceMinutes} minutes ago`;
//   } else {
//     return `${distanceSecond} seconds ago`;
//   }
// }




















