const express = require("express");
const cors = require("cors");

let app = express();

app.use(express.json());

// Enable all CORS requests with npm package
app.use(cors());

app.use("/", require("./routes/index"));

// creates localhost:8080 locally
app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🦑`);
});
