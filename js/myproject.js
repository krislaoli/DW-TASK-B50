let dataBlog = [];

function addBlog(event) {
  event.preventDefault();

  let title = document.getElementById("input-blog-title").value;
  let content = document.getElementById("input-content-blog").value;
  let image = document.getElementById("input-blog-image").files;

  // icon
  const iconNodeJs = `<i class="fa-brands fa-node-js fa-xl"></i>`;
  const iconReactJs = `<i class="fa-brands fa-react fa-xl"></i>`;
  const iconJavaScript = `<i class="fa-brands fa-js fa-xl"></i>`;
  const iconVueJs = `<i class="fa-brands fa-vuejs fa-xl"></i>`;

  //check kondisi
  let checkNodeJS = document.getElementById("check-nodejs").checked
    ? iconNodeJs
    : "";
  let checkReactJS = document.getElementById("check-reactjs").checked
    ? iconReactJs
    : "";
  let checkJavaScript = document.getElementById("check-javascript").checked
    ? iconJavaScript
    : "";
  let checkVueJs = document.getElementById("check-vuejs").checked
    ? iconVueJs
    : "";

  // durasi
  let startDate = document.getElementById("input-start-date").value;
  let endDate = document.getElementById("input-end-date").value;

  let startDateValue = new Date(startDate);
  let endDateValue = new Date(endDate);

  let rentangWaktu = endDateValue.getTime() - startDateValue.getTime();
  let rentangHari = rentangWaktu / (1000 * 3600 * 24);
  let rentangMinggu = Math.floor(rentangHari / 7);
  let rentangBulan = Math.floor(rentangHari / 30);
  let rentangProject = "";

  if (rentangHari <= 6) {
    rentangProject = rentangHari + " One Day ";
  } else if (rentangMinggu <= 3) {
    rentangProject = rentangMinggu + " One Week ";
  } else if (rentangBulan >= 1) {
    rentangProject = rentangBulan + " One Month ";
  }

  image = URL.createObjectURL(image[0]);
  // console.log(image);

  let blog = {
    title,
    postedAt: new Date(),
    content,
    image,
    checkNodeJS,
    checkJavaScript,
    checkReactJS,
    checkVueJs,
    rentangProject,
  };
  // alert
  if (title == "" || content == "" || image == "") {
    return Swal.fire({
      icon: "warning",
      title: "Beboop!...",
      text: "Harap lengkapi form!",
      confirmButtonColor: "#930e2d",
      iconColor: "#930e2d",
    });
  }

  dataBlog.push(blog);
  console.log(dataBlog);

  renderBlog();
}

function renderBlog() {
  document.getElementById("form-project-card-add").innerHTML = "";

  for (let index = 0; index < dataBlog.length; index++) {
    console.log(dataBlog[index]);

    document.getElementById("form-project-card-add").innerHTML += `
    <div class="form-project-card">
                <div class="form-project-image">
                    <img id="image-add" class="image-add" src="${
                      dataBlog[index].image
                    }"/>
                </div>
                <div class="title-add-project">
                    <h3  style="overflow: auto; letter-spacing: 1px;"        class="scroll-name"
                    "><a  href="blog-detail.html">${
                      dataBlog[index].title
                    }</a></h3>
                </div>
                <div class="duration-project">
                    <p>Author : Mei Kristian Laoli</p>
                    <p> ${getTime(dataBlog[index].postedAt)}</p>
                    <p>Duration : ${dataBlog[index].rentangProject}</p>
                </div>
                <div class="description-project">
                    <p class="scrolltable" style="    overflow: auto;
                    ">${dataBlog[index].content}</p>
                </div>
                <div class="technologies-project">
                    <div class="technologies-project-card">
                        ${dataBlog[index].checkNodeJS}
                        ${dataBlog[index].checkJavaScript}
                        ${dataBlog[index].checkReactJS}
                        ${dataBlog[index].checkVueJs}
                    </div>
                </div>
                <div style="float:right;">
                    <p style="color:white; font-size:20px">${getDuration(dataBlog[index].postedAt)}</p>
                </div>
                <div class="button-add-project">
                    <button type="button" class="edit-button" id="edit-button">Edit</button>
                    <button type="button" class="delete-button" id="delete-button">Delete</button>
                </div>
            </div>`;
  }
}

// =============================================================================================================================================================================

function dummyCard() {
  document.getElementById("form-project-card-add").innerHTML = "";

  // card 1
  for (let i = 0; i < 1; i++) {
    document.getElementById("form-project-card-add").innerHTML += `
        <div class="form-project-card">
        <div class="form-project-image">
            <img id="image-add" class="image-add" src="image/a.gif"/>
        </div>
        <div class="title-add-project">
        <h3>
          <a href="blog-detail.html" 
            >Humainangeh 
          </a>
        </h3>
      </div>
        <div class="duration-project">
            <p>Duration : 3 Month</p>
        </div>
        <div class="description-project">
            <p class="scrolltable">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium dolores ullam minima reiciendis adipisci quisquam</p>
        </div>
        <div class="technologies-project">
            <div class="technologies-project-card">
                <i class="fa-brands fa-node-js fa-xl"></i>
                <i class="fa-brands fa-js fa-xl"></i>
                <i class="fa-brands fa-react fa-xl"></i>
                <i class="fa-brands fa-vuejs fa-xl"></i>
            </div>
        </div>
        <div class="button-add-project">
            <button type="button" class="edit-button" id="edit-button">Edit</button>
            <button type="button" class="delete-button" id="delete-button">Delete</button>
        </div>
         </div>
        `;
  }

  // card 2
  for (let i = 0; i < 1; i++) {
    document.getElementById("form-project-card-add").innerHTML += `
        <div class="form-project-card">
        <div class="form-project-image">
            <img id="image-add" class="image-add" src="image/b.gif"/>
        </div>
        <div class="title-add-project">
        <h3>
          <a href="blog-detail.html" 
            >Suluyuianong 
          </a>
        </h3>
      </div>
        <div class="duration-project">
            <p>Duration : 3 Month</p>
        </div>
        <div class="description-project">
            <p class="scrolltable">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium dolores ullam minima reiciendis adipisci quisquam</p>
        </div>
        <div class="technologies-project">
            <div class="technologies-project-card">
                <i class="fa-brands fa-node-js fa-xl"></i>
                <i class="fa-brands fa-js fa-xl"></i>
            </div>
        </div>
        <div class="button-add-project">
            <button type="button" class="edit-button" id="edit-button">Edit</button>
            <button type="button" class="delete-button" id="delete-button">Delete</button>
        </div>
         </div>
        `;
  }

  // card 3
  for (let i = 0; i < 1; i++) {
    document.getElementById("form-project-card-add").innerHTML += `
        <div class="form-project-card">
        <div class="form-project-image">
            <img id="image-add" class="image-add" src="image/c.gif"/>
        </div>
        <div class="title-add-project">
        <h3>
          <a href="blog-detail.html" 
            >sus mandarux 
          </a>
        </h3>
      </div>
        <div class="duration-project">
            <p>Duration : 3 Month</p>
        </div>
        <div class="description-project">
            <p class="scrolltable">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium dolores ullam minima reiciendis adipisci quisquam</p>
        </div>
        <div class="technologies-project">
            <div class="technologies-project-card">
                <i class="fa-brands fa-node-js fa-xl"></i>
                <i class="fa-brands fa-react fa-xl"></i>
                <i class="fa-brands fa-vuejs fa-xl"></i>
            </div>
        </div>
        <div class="button-add-project">
            <button type="button" class="edit-button" id="edit-button">Edit</button>
            <button type="button" class="delete-button" id="delete-button">Delete</button>
        </div>
         </div>
        `;
  }

  // card 4
  for (let i = 0; i < 1; i++) {
    document.getElementById("form-project-card-add").innerHTML += `
        <div class="form-project-card">
        <div class="form-project-image">
            <img id="image-add" class="image-add" src="image/d.gif"/>
        </div>
        <div class="title-add-project">
        <h3>
          <a href="blog-detail.html" 
            >Suluyuianong 
          </a>
        </h3>
      </div>
        <div class="duration-project">
            <p>Duration : 3 Month</p>
        </div>
        <div class="description-project">
            <p class="scrolltable">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium dolores ullam minima reiciendis adipisci quisquam</p>
        </div>
        <div class="technologies-project">
            <div class="technologies-project-card">
                <i class="fa-brands fa-js fa-xl"></i>
                <i class="fa-brands fa-vuejs fa-xl"></i>
            </div>
        </div>
        <div class="button-add-project">
            <button type="button" class="edit-button" id="edit-button">Edit</button>
            <button type="button" class="delete-button" id="delete-button">Delete</button>
        </div>
         </div>
        `;
  }

  // card 5
  for (let i = 0; i < 1; i++) {
    document.getElementById("form-project-card-add").innerHTML += `
        <div class="form-project-card">
        <div class="form-project-image">
            <img id="image-add" class="image-add" src="image/e.gif"/>
        </div>
        <div class="title-add-project">
        <h3>
          <a href="blog-detail.html" 
            >Yosimurahings 
          </a>
        </h3>
      </div>
        <div class="duration-project">
            <p>Duration : 3 Month</p>
        </div>
        <div class="description-project">
            <p class="scrolltable">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium dolores ullam minima reiciendis adipisci quisquam</p>
        </div>
        <div class="technologies-project">
            <div class="technologies-project-card">
                <i class="fa-brands fa-react fa-xl"></i>
            </div>
        </div>
        <div class="button-add-project">
            <button type="button" class="edit-button" id="edit-button">Edit</button>
            <button type="button" class="delete-button" id="delete-button">Delete</button>
        </div>
         </div>
        `;
  }

  // card 6
  for (let i = 0; i < 1; i++) {
    document.getElementById("form-project-card-add").innerHTML += `
        <div class="form-project-card">
        <div class="form-project-image">
            <img id="image-add" class="image-add" src="image/g.gif"/>
        </div>
        <div class="title-add-project">
        <h3>
          <a href="blog-detail.html" 
            >Kombatgrin 
          </a>
        </h3>
      </div>
        <div class="duration-project">
            <p>Duration : 3 Month</p>
        </div>
        <div class="description-project">
            <p class="scrolltable">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, impedit cupiditate. Possimus rerum, molestiae officia modi sapiente adipisci recusandae eius deleniti dolores provident qui, eaque excepturi facilis voluptates eum dolorum minus vitae quaerat consequuntur doloribus nostrum? Consequuntur, iure. Quia hic cumque magnam doloribus ipsam maxime delectus ullam culpa. Ipsam labore perspiciatis corporis? Exercitationem velit in eius numquam eaque! Esse, possimus!Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium dolores ullam minima reiciendis adipisci quisquam</p>
        </div>
        <div class="technologies-project">
            <div class="technologies-project-card">
                <i class="fa-brands fa-js fa-xl"></i>
                <i class="fa-brands fa-react fa-xl"></i>
                <i class="fa-brands fa-vuejs fa-xl"></i>
            </div>
        </div>
        <div class="button-add-project">
            <button type="button" class="edit-button" id="edit-button">Edit</button>
            <button type="button" class="delete-button" id="delete-button">Delete</button>
        </div>
         </div>
        `;
  }
}

dummyCard();

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

  // console.log(year)
  // console.log(month)
  // console.log(nameMonth[month])
  // console.log(date)
  // console.log(day)
  // console.log(hour)
  // console.log(minute)
  // console.log(second)
  // console.log(milliseconds)

  return `${date} ${nameMonth[month]} ${year} ${hour} : ${minute} WIB`;
}
// const date = new Date()
// console.log(getTime(date))
// console.log(date)

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
      return hourDistance + "Hour  Ago"
    } else {
      const minuteDistance = Math.floor(distance / (60 * 1000));
      if (minuteDistance > 0) {
          return minuteDistance + " Minute  Ago"
        } else {
            const secondDistance = Math.floor(distance / 1000);
            // console.log(secondDistance + " Second  Ago");
            if (secondDistance > 0) {
          return secondDistance + " Second  Ago"
        }
      }
    }
  }

//   console.log(dayDistance);
}

setInterval(renderBlog, 1000)