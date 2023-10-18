const { log } = require("console");
const exp = require("constants");
const express = require("express");
const { get } = require("http");
const app = express();
const PORT = 5000;
const path = require("path");
const dateDuration = require("./src/helper/duration");

// setup call hbs with sub folder
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "src/views"));

// set serving static file
app.use(express.static("src/assets"));

// parsing data from client
app.use(express.urlencoded({ extended: false }));

let dataBlog = [
  {
    id: 1,
    title: "Kucurukuk",
    author: "Lebah Ganteng",
    startDate: "2023-10-10",
    endDate: "2023-11-10",
    content: "Jambu merah di dinding, Jangan marah just kidding.",
    nodejs: true,
    js: false,
    react: true,
    vuejs: false,
    postedAt: new Date(),
  },
  {
    id: 2,
    title: "Gacor",
    author: "Zeus",
    startDate: "2023-12-10",
    endDate: "2023-12-11",
    content: "Air cuka, bikin mules, Tanggal tua, bikin ngenes",
    nodejs: false,
    js: true,
    react: true,
    vuejs: true,
    postedAt: new Date(),
  },
  {
    id: 3,
    title: "Janji Ga Party",
    content:
      "Barang antik, ditarik andong, Hei cantik, kenalan dong. Jangan jahil, apalagi ke tukang jamu, Nih upil, buat kamu.",
    author: "Jantan Malam",
    startDate: "2023-08-10",
    endDate: "2023-08-20",
    nodejs: false,
    js: false,
    react: true,
    vuejs: true,
    postedAt: new Date(),
  },
];

// routing
app.get("/", home);
app.get("/blog", blog);
app.post("/blog", addBlog);
app.get("/contact", contact);
app.get("/blog-detail/:id", blogDetail);
app.get("/form-blog", formBlog);
app.get("/delete-blog/:id", deleteBlog);
app.get("/edit-blog/:id", viewEditBlog);
app.post("/edit-blog/:id", updateBlog);
// app.post('/form-blog', addBlog)

// local server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// index
function home(req, res) {
  let dataBlogRes = dataBlog.map((item) => {
    return {
      ...item,
      duration: dateDuration(item.startDate, item.endDate),
    };
  });
  res.render("index", { dataBlog: dataBlogRes });
}

// blog
function blog(req, res) {
  res.render("blog");
}

// form blog
function formBlog(req, res) {
  res.render("form-blog");
}

// contact me
function contact(req, res) {
  res.render("contact");
}

//delete blog
function deleteBlog(req, res) {
  const { id } = req.params;

  dataBlog.splice(id, 1);
  res.redirect("/");
}

// blog detail
function blogDetail(req, res) {
  const { id } = req.params;

  res.render("blog-detail", { blog: dataBlog[id] });
}

// add a new blog
function addBlog(req, res) {
  const {
    title,
    author,
    content,
    startDate,
    endDate,
    nodejs,
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
    nodeJs: nodejs,
    js: js,
    react: react,
    vuejs: vuejs,
    image: "image.png",
    postedAt: new Date(),
  };

  dataBlog.push(data);
  res.redirect("/");
}

// view edit Blog with index/id
function viewEditBlog(req, res) {
  const { id } = req.params;

  res.render("edit-blog", { edit: dataBlog[id] });
}

// edit blog
function updateBlog(req, res) {
  const { id } = req.params;
  const {
    title,
    content,
    author,
    startDate,
    endDate,
    nodejs,
    js,
    react,
    vuejs,
  } = req.body;
  let updateData = {
      id: id,
      title: title,
      content: content,
      author: author,
      startDate: startDate,
      endDate: endDate,
      nodeJs: nodejs,
      js: js,
      react: react,
      vuejs: vuejs,
      image: "image.png",
      postedAt: new Date(),
    },
    dataBlog = dataBlog.filter((item) => {
      return item.id != id;
    });
  dataBlog.push(updateData);
  res.redirect("/");
}

