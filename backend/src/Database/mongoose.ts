import mongoose from "mongoose";

const MONGO_URI: string = process.env.MONGO_URI as string;

async function mongoConnect() {
  await mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database Connection is ready...");
    })
    .catch((err) => {
      console.log(err);
    });
}

export { mongoConnect };

