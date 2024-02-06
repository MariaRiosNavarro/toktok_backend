import { app } from "./src/app.js";
import { connect } from "./src/config/storage.config.js";

const FRONTEND_INDEX = new URL(
  "./src/frontend/dist/index.html",
  import.meta.url
).pathname;

app.get("*", (req, res) => {
  res.sendFile(FRONTEND_INDEX);
});

app.listen(process.env.PORT, () => {
  connect();
  console.log("express läuft auf port:", process.env.PORT);
});
