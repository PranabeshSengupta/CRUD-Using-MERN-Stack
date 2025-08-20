import React from "react";
import { ToastContainer,toast } from "react-toastify";
import { Button, Checkbox, Label, Textarea, TextInput } from "flowbite-react";
import { EnquiryList } from "./enquiry/EnquiryList";
import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";


export default function Enquiry() {
  let[enquiryList, setEnquiryList]=useState([]);
  let[formData, setFormData]= React.useState({
      name: "",
      email: "",
      phone: "",
      message: "",
      _id:""

    })

  let saveEnquiry = (e) => {
    
    e.preventDefault();
    
  
    // let formData = {
    //   name: e.target.name.value,
    //   email: e.target.email.value,
    //   phone: e.target.phone.value,
    //   message: e.target.message.value
    // }

    if (formData._id) {
      axios.put(`http://localhost:8000/api/website/enquiry/update/${formData._id}`, formData)
      .then((res)=>{
        console.log(res.data)
        toast.success("Enquiry updated successfully")
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          _id:""  
        })
        getAllEnquiry()
      })
    }
    else{
     axios.post("http://localhost:8000/api/website/enquiry/insert", formData)
     .then((res)=> {
      console.log(res.data);
      toast.success("Enquiry Saved Successfully")
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
      getAllEnquiry();
      
  }).catch((err) => {console.log(err)});
  }
    
}

let getAllEnquiry = () => {
  axios.get("http://localhost:8000/api/website/enquiry/view")
    .then((res) => {
      return res.data;
    })
    .then((finaldata) => {
      if(finaldata.status){
        setEnquiryList(finaldata.enquiryList);
      }
    })

    
}

  let getValue = (e) => {
    let oldData= {...formData};
    oldData[e.target.name] = e.target.value;
    setFormData(oldData);
    }

useEffect(() => {
  getAllEnquiry()
},[])
  return (
    <div >
      <ToastContainer/>
      <h1 className="text-[40px] text-center py-6 font-bold">User Enquiry</h1>
      
      <div className="grid grid-cols-[30%_auto]">
        <div className="bg-gray-200 p-4">
          <h2 className="text-[20px] font-bold">Enquiry Form</h2>
          <form action="" onSubmit={saveEnquiry}>
            <div className="py-3">
              <Label htmlFor="name" value="Your Name" />
              <TextInput
                type="text" value={formData.name} onChange={getValue}
                name="name"
                placeholder="Enter Your Name"
                required
              />
            </div>
            <div className="py-3">
              <Label htmlFor="email" value="Your Email" />
              <TextInput
                type="email" value={formData.email} onChange={getValue}
                name="email"
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div className="py-3">
              <Label htmlFor="phone" value="Your PhoneNo" />
              <TextInput
                type="text" value={formData.phone}
                onChange={getValue}
                name="phone"
                placeholder="Enter Your PhoneNo"
                required
              />
            </div>
            <div className="py-3">
              <Label htmlFor="message" value="Your Message" />
              <Textarea
                type="text" 
                value={formData.message}
                onChange={getValue}
                name="message" 
                placeholder="Leave a message..."
                required
                rows={4}
              />
            </div>
            <div className="py-3">
              <Button type="submit" className="bg-green-500 w-[100%]">
                {formData._id ? "Update ": "Save"}
              </Button>
            </div>
          </form>
        </div>
        <EnquiryList data={enquiryList}  getAllEnquiry={getAllEnquiry} Swal={Swal} setFormData={setFormData}/>
      </div>
    </div>
  );
}
