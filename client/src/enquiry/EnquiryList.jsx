import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { Button } from "flowbite-react";
import { ToastContainer ,toast} from 'react-toastify';
import axios from 'axios';
export  function EnquiryList({data,getAllEnquiry,Swal,setFormData}){
let deleteRow = (delId) => {
 Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      axios.delete(`http://localhost:8000/api/website/enquiry/delete/${delId}`)
    .then((response) => {
      toast.success("Enquiry deleted successfully");
      getAllEnquiry();
    })
      Swal.fire(
        'Deleted!',
        'Your enquiry has been deleted.',
        'success'
      )
    } else {
      Swal.fire(
        'Cancelled',
        'Your enquiry is safe :)',
        'error'
      )
    }
  })
  
}
let editRow = (editId) => {
axios.get(`http://localhost:8000/api/website/enquiry/single/${editId}`)
.then((response) => {
  let data= response.data;
  setFormData(data.enquiry)
})
}


  return(
    <div className="bg-gray-200 p-4">
     
          <h2 className="text-[20px] font-bold mb-4">Enquiry List</h2>
          <div className="overflow-x-auto">
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeadCell>Sr No</TableHeadCell>
                  <TableHeadCell>Name</TableHeadCell>
                  <TableHeadCell>Email</TableHeadCell>
                  <TableHeadCell>Phone</TableHeadCell>
                  <TableHeadCell>Message</TableHeadCell>
                  <TableHeadCell>
                    Delete
                  </TableHeadCell>
                  <TableHeadCell>
                    Edit
                  </TableHeadCell>
                </TableRow>
              </TableHead>
              
              <TableBody className="divide-y">
                {
                  data.length >=1 ? 
                  data.map((item, index) => {
                    return (
                      <TableRow key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                          {index + 1}
                        </TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.email}</TableCell>
                        <TableCell>{item.phone}</TableCell>
                        <TableCell>{item.message}</TableCell>
                        <TableCell>
                          {/* Add delete functionality here */}
                          <Button  onClick={()=>deleteRow(item._id)} color="red">Delete</Button>
                        </TableCell>
                        <TableCell>
                          {/* Add edit functionality here */}
                          <Button  onClick={()=>editRow(item._id)} color="blue">Edit</Button>
                        </TableCell>
                      </TableRow>
                    )})
                :
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableCell colSpan={7} className="text-center">
                    No Enquiry Found
                  </TableCell>
                
                </TableRow>
}
              </TableBody>
            </Table>
          </div>
        </div>
  )
 }
