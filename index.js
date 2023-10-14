const express = require("express");
const path = require("path");
const app = express();
const port = 5000;

// pemanggilan untuk views hbs ditampilakn ke web
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "src/views"));

// set static file server
app.use(express.static('src/assets'))

// parcing data from client
app.use(express.urlencoded({extended: false}))

// routing
app.get("/", home);
app.get("/testimonial", testimonial);
app.get("/contact", contact);
app.get("/blog-detail", blogDetail);
app.get("/blog", formblog);
app.post("/blog", blog);

app.listen(port, () => {
  console.log("app");
});

function home(req, res) {
  res.render("index");
}

function testimonial(req, res) {
  res.render("testimonial");
}

function contact(req, res) {
  res.render("contact");
}

function blogDetail(req, res) {
    const { id } = req.params

    const data = {
        id,
        title : "Dumbways Web App",
        content: "Hantu adalah roh dari orang atau hewan yang telah mati yang menampakkan wujudnya dalam kehidupan. Definisi dari hantu pada umumnya berbeda untuk setiap agama, peradaban, maupun adat istiadat. Dalam banyak kebudayaan, hantu tidak didefinisikan sebagai zat yang baik maupun jahat."
    }
  res.render("blog-detail",  { data });
}

function formblog(req, res) {
  res.render("blog");
}

function blog(req, res) {
  const data = req.body
  console.log(data);
}
