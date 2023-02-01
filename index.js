var express = require("express");
let app = express();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/api/fileanalyse", upload.single("upfile"), (req, res) => {
  let file = req.file;

  res.json({
    name: file.originalname,
    type: file.mimetype,
    size: file.size,
  });
});

app.listen(8081);
