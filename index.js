const express = require("express");
const path = require("path");
const app = express();
const port = 5000;

// pemanggilan untuk views hbs ditampilakn ke web
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "src/views"));

// routing
app.get("/blog-detail", blogDetail);
app.get("/blog", blog);
app.get("/contact", contact);
app.get("/", home);
app.get("/testimonial", testimonial);

// set static file server
app.use(express.static('src/assets'))

app.listen(port, () => {
  console.log("app");
});

function blogDetail(req, res) {
  res.render("blog-detail");
}

function blog(req, res) {
  res.render("blog");
}

function contact(req, res) {
  res.render("contact");
}

function home(req, res) {
  res.render("index");
}

function testimonial(req, res) {
  res.render("testimonial");
}






