import mongoose from "mongoose"

mongoose.connect("mongodb+srv://gheno:123@ghenoninho.yxf53du.mongodb.net/gheno-node")

let db = mongoose.connection;

export default db;