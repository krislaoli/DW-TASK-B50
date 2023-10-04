function getTime(time) {
  let year = time.getFullYear();
  let month = time.getMonth();
  let date = time.getDate();
  let day = time.getDay();
  let hour = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();
  let milliseconds = time.getMilliseconds();
  const nameMonth = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  console.log(year);
  console.log(month);
  console.log(nameMonth[month]);
  console.log(date);
  console.log(day);
  console.log(hour);
  console.log(minute);
  console.log(second);
  console.log(milliseconds);

  return `${date} ${nameMonth[month]} ${year} ${hour} : ${minute} WIB`;
}
const date = new Date();
console.log(getTime(date));
console.log(date);

// ============================================================================================================================================================================
// manipulasi milidetik untuk postadAt
function getDuration(time) {
  const timeNow = new Date();
  const timePost = new Date(time);
  const distance = timeNow - timePost;

  const dayDistance = Math.floor(distance / (24 * 60 * 60 * 1000));
  if (dayDistance > 0) {
    return dayDistance + "Day Ago";
  } else {
    const hourDistance = Math.floor(distance / (60 * 60 * 1000));
    if (hourDistance > 0) {
      // return hourDistance + "Hour  Ago"
    } else {
      const minuteDistance = Math.floor(distance / (60 * 1000));
      if (minuteDistance > 0) {
          // return minuteDistance + " Minute  Ago"
        } else {
            const secondDistance = Math.floor(distance / 1000);
            console.log(secondDistance + " Second  Ago");
            if (secondDistance > 0) {
          return secondDistance + " Second  Ago"
        }
      }
    }
  }

  console.log(dayDistance);
}

getDuration("Wed Oct 04 2023 23:06:04 GMT+0700 (Western Indonesia Time)");
