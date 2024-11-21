import mongoose from "mongoose";

const dbConnection = async()=>{
 await   mongoose
      .connect(process.env.MOGODB_URL)
      .then(() => console.log("MongoDB connected succfully"))
      .catch((error) => console.log("MongoDB connectoin error ", error));

}

export default dbConnection
