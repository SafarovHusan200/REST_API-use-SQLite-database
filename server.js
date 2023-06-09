const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/post", require("./routes/post.routes"));

const PORT = process.env.PORT | 3000;
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
