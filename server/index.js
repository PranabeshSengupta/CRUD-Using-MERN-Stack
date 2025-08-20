let express =require("express")
let mongoose=require("mongoose");
let cors=require("cors");
const enquiryRouter = require("./App/routes/web/enquiryRoutes");
require("dotenv").config()
let app=express();
app.use(cors());
app.use(express.json());

//Routes
app.use("/api/website/enquiry",enquiryRouter)
//connect to mongoose
mongoose.connect(process.env.DBURl).then(()=>{
    console.log("Connected to Mongodb")
    app.listen(process.env.PORT || 3000,()=>{
        console.log("Server is runing")
    })
}).catch((err)=>{console.log(err)})