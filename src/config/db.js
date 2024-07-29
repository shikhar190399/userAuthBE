import mongoose from "mongoose"


const url = "mongodb+srv://admin:admin@cluster0.w0pmmli.mongodb.net/"
export const connectDb = async () => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("Mongoose connected");
    } catch(err){
        console.log("some error occured", err.message);
    }
}
