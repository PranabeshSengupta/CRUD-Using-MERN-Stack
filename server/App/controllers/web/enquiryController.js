const enquiryModel = require("../../models/enquiry.model")

let enquiryInsert=(req,res)=>{
    let{name,email,phone,message}=req.body
    console.log(name,email,phone,message)
    let enquire=new enquiryModel({
        name,
        email,
        phone,
        message,


    })
    enquire.save().then(()=>{
        res.send({status:1,msg:"Enquire saved Successfully"})
    }).catch((err)=>{
        res.send({status:0,msg:"Error can't saved enquire",err})
        
    })
}

let enquiryList= async (req,res)=>{
    let enquiry= await enquiryModel.find()
    res.send({status:1,enquiryList:enquiry})
}

let enquiryDelete=async (req,res)=>{
    let delId=req.params.id
    let enquiry= await enquiryModel.deleteOne({_id:delId})
    res.send({status:1,msg:"Enquiry deleted successfully",enquiry})
}
let enquirysingleRow=async (req,res)=>{
    let singleId=req.params.id
    let enquiry= await enquiryModel.findOne({_id:singleId})
    res.send({status:1,enquiry})
}

let enquiryUpdate=async (req,res)=>{
    let updateId=req.params.id
    let {name,email,phone,message}=req.body
    let enquiry= await enquiryModel.updateOne({_id:updateId},{$set:{name,email,phone,message}})
    res.send({status:1,msg:"Enquiry updated successfully",enquiry})
}
module.exports = {enquiryInsert,enquiryList, enquiryDelete, enquiryUpdate,enquirysingleRow};