const mongoose = require("mongoose")
mongoose.connect(process.env.MONGODB_CONNECTION_URL)
const dbConnect = mongoose.connection;

dbConnect.on('connected', () => console.log("Database is connected"))
dbConnect.on('error', (error) => {
    console.log("Database is not connected", error)
    process.exit(1)
})