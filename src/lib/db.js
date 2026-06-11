import mongoose from "mongoose"
import dns from "dns";

dns.setServers([
  "1.1.1.1",
  "8.8.8.8",
]);

const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("mongodb connected");
    } catch(error){
        console.error("mongodb conncetion failed:", error.message)
        throw error;
    }

    
}

export default connectDB;