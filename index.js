const express = require("express");
const path = require("path");
const app = express();
const port = 5000;

// pemanggilan untuk views hbs ditampilakn ke web
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "src/views"));

// set static file server
app.use(express.static("src/assets"));

// parcing data from client
app.use(express.urlencoded({ extended: false }));

// tampilan utama untuk card index
const views = [
  {
    id: 1,
    title: "Conan Tekken",
    author: "Conan",
    postedAt: new Date(),
    content:
      "saya adalah manusia bisa terbang Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi",
    nodeJs: true,
    js: true,
    react: false,
    vuejs: false,
  },
  {
    id: 1,
    title: "Buyung Nak Baik",
    author: "Buyung",
    postedAt: new Date(),
    content: "Saya bujangan dari kampung tante",
    nodeJs: true,
    js: true,
    react: true,
    vuejs: false,
  },
  {
    id: 1,
    title: "Ngudud",
    author: "Iron Man",
    postedAt: new Date(),
    content: "Saya ingin ngudud sambil  mandi apakah bisa begit pak rt",
    nodeJs: true,
    js: true,
    react: false,
    vuejs: true,
  },
];

app.listen(port, () => {
  console.log("Launch Web");
});

// routing
app.get("/", home);
app.get("/testimonial", testimonial);
app.get("/contact", contact);
app.get("/blog-detail", blogDetail);
app.get("/blog", formblog);
app.post("/blog", blog);
app.get("/delete-blog/:id", deleteBlog);

function home(req, res) {
  res.render("index", { views });
}

function testimonial(req, res) {
  res.render("testimonial");
}

function contact(req, res) {
  res.render("contact");
}

function formblog(req, res) {
  res.render("blog");
}

function blogDetail(req, res) {
  const { id } = req.params;

  const data = {
    id,
    title: "Dumbways Web App",
    content:
      "Hantu adalah roh dari orang atau hewan yang telah mati yang menampakkan wujudnya dalam kehidupan. Definisi dari hantu pada umumnya berbeda untuk setiap agama, peradaban, maupun adat istiadat. Dalam banyak kebudayaan, hantu tidak didefinisikan sebagai zat yang baik maupun jahat.",
  };
  res.render("blog-detail", { data });
}

function blog(req, res) {
  const {
    title,
    author,
    content,
    startDate,
    endDate,
    nodeJs,
    js,
    react,
    vuejs,
  } = req.body;

  const data = {
    id: new Date().getTime(),
    title: title,
    author: author,
    content: content,
    startDate: startDate,
    endDate: endDate,
    nodeJs: nodeJs,
    js: js,
    react: react,
    vuejs: vuejs,
    image: "image.png",
    postedAt: new Date(),
  };
  views.push(data);
  res.redirect("/");
  console.log(views);
}

// delete blog
function deleteBlog(req, res) {
  const { id } = req.params;

  views.splice(id, 1);
  res.redirect("/");
}