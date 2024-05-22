

import { useEffect, useState } from "react"
import Spinner from "../Components/Spinner";
import axios from 'axios'
import { Link } from "react-router-dom";

import { MdOutlineAddBox } from 'react-icons/md';
import BooksTable from "../Components/home/BooksTable";
import BooksCard from "../Components/home/BooksCard";




const Home = () => {
    const [books,setBooks]=useState([]);
    const [loading,setLoading]=useState(false);
    const [showType,SetShowType]=useState("table")
    useEffect(() => {
        setLoading(true);
        axios
          .get('http://localhost:5000/books')
          .then((response) => {
            setBooks(response.data.data);
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
            setLoading(false);
          });
      }, []);

    
 console.log(books)
  return (
    <div className="p-4">
        <div className="flex justify-center item-center gap-x-4">
            <button onClick={()=>SetShowType('table')} className="bg-sky-300 hover:bg-sky-600 px-4 py=1 rounded-lg">
                    Table
            </button>
            <button onClick={()=>SetShowType('card')} className="bg-sky-300 hover:bg-sky-600 px-4 py=1 rounded-lg">
                    Card
            </button>

        </div>
        <div className="flex justify-between item-center">
            <h1 className="text-3xl my-8">Books List </h1>
            <Link to='/books/create'>
               <MdOutlineAddBox className='text-sky-800 text-4xl' />
            </Link>
             
        </div>
        {loading?
        (<Spinner/>):(
          showType==='table'? ( <BooksTable books={books}/>):(<BooksCard books={books}/>)
            
        )
        
        
        
        }
      
    </div>
  )
}

export default Home
