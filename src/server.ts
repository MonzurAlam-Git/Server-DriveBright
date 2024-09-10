import app from "./app";
import config from "./app/config";
import mongoose from "mongoose";

const port = 3000;
main().catch((err) => console.log(err));

async function main() {
  try {
    await mongoose.connect(config.DB_URI as string);

    app.listen(config.PORT, () => {
      console.log(`Example app listening on port ${config.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}
