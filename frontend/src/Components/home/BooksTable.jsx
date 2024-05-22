//import React from 'react'
import { Link } from "react-router-dom";
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import {  MdOutlineDelete } from 'react-icons/md';


// eslint-disable-next-line react/prop-types
const BooksTable = ({books}) => {
  return (
    <div>
         <table className="w-full border-separate border-spacing-2">
                <thead>
                    <tr>
                        <th className="border border-slate-600 rounded-md">no</th>
                        <th className="border border-slate-600 rounded-md">Title</th>
                        <th className="border border-slate-600 rounded-md max-mid:hidden">Author</th>
                        <th className="border border-slate-600 rounded-md max-mid:hidden">Publish Year</th>
                        <th className="border border-slate-600 rounded-md ">Operations</th>
                    </tr>

                </thead>
                <tbody>
                    {books.map((book,index)=>{
                     return   <tr key={book._id} className="h-8">
                            <td className="border border-slate-600 rounded-md">{index+1}</td>
                            <td className="border border-slate-600 rounded-md">{book.title}</td>
                            <td className="border border-slate-600 rounded-md max-mid:hidden">{book.author}</td>
                            <td className="border border-slate-600 rounded-md max-mid:hidden">{book.publishYear}</td>
                            <td className="border border-slate-600 rounded-md">
                                <div className="flex justify-content gap-x-4">
                                    <Link to={`/books/details/${book._id}`}>
                                        <BsInfoCircle className="text-2xl text-green-800"/>
                                    </Link>
                                    <Link to={`/books/edit/${book._id}`}>
                                        <AiOutlineEdit className="text-2xl text-yellow-800"/>
                                    </Link>
                                    <Link to={`/books/delete/${book._id}`}>
                                        <MdOutlineDelete className="text-2xl text-red-800"/>
                                    </Link>

                                </div>
                            </td>
                           
                        </tr>
                    })}

                </tbody>
            </table>

      
    </div>
  )
}

export default BooksTable
