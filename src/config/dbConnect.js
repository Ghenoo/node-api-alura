import mongoose from "mongoose"

mongoose.connect("mongodb+srv://@.yxf53du.mongodb.net/")

let db = mongoose.connection;

export default db;