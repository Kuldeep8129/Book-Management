import React, { useState} from "react";
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import {useSnackbar} from "notistack";

const CreateBook = () => {

    const [title , setTitle] = useState('');
    const [author , setAuthor] = useState('');
    const [publishYear , setPublishYear] = useState('');
    const [loading , setLoading] = useState(false);
    const navigate = useNavigate();
    const {enqueueSnackbar} = useSnackbar();

    const handleSaveBook = () =>{
        const data = {
            title,
            author,
            publishYear,
        };
        setLoading(true);
        axios.post(`http://localhost:3000/books/`,data)
            .then(() => {
                setLoading(false);
                enqueueSnackbar("Book Created Successfully" , {variant : "success"});
                navigate('/');
            })
            .catch((error) => {
                setLoading(false);
                //alert("An error occured");
                enqueueSnackbar("Error" , {variant : "error"});
                console.log(error);
            });
    };

    return (
        <div className="p-4">
            <BackButton />
            <h1 className="text-3xl my-4"> Create Book</h1>
            {loading ? <Spinner/> : ''}
                <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto"> 
                    <div className="my-4">
                        <label className="text-xl mr-4 text-gray-500">Title : </label>
                        <input type="text" value={title} onChange={e=>setTitle(e.target.value)} placeholder="Enter Title..." className="border-2 border-gray-500 px-4 py-2 w-full"/>
                    </div>

                    <div className="my-4">
                        <label className="text-xl mr-4 text-gray-500">Author : </label>
                        <input type="text" value={author} onChange={e=>setAuthor(e.target.value)} placeholder="Enter Author..." className="border-2 border-gray-500 px-4 py-2 w-full"/>
                    </div>

                    <div className="my-4">
                        <label className="text-xl mr-4 text-gray-500">Publish Year : </label>
                        <input type="text" value={publishYear} onChange={e=>setPublishYear(e.target.value)} placeholder="Enter Publish Year..." className="border-2 border-gray-500 px-4 py-2 w-full"/>
                    </div>

                    <button className="p-2 bg-sky-300 m-8" onClick={handleSaveBook}>Save</button>
                </div> 
            {/*<div className="wrapper">
                <h1>BoobyBouncer</h1>
                <div className="my-4">
                     <label className="text-xl ">Enter your name: <input type="text" style={{border:'1px solid black'}}/> </label>
                </div>
                <div className="col-3">
                    <p><label htmlFor="bookNameLabelId" className="text-3xl my-4">Book Name :  </label></p>
                    <input type="email" className="form-control text-3xl" id="bookNameInputId" aria-describedby="emailHelp" placeholder="Enter Book Name" style={{border:'1px solid black'}}/>
                        
                </div>
                <div className="col-3">
                    <label htmlFor="exampleInputPassword1" className="text-3xl my-4">Author :  </label>
                    <input type="text" className="form-control text-3xl" id="exampleInputPassword" aria-describedby="emailHelp" placeholder="Enter email" style={{border:'1px solid black'}}/>
                </div>

                <div className="col-3">
                    <label htmlFor="publishYearLabelId" className="text-3xl my-4">Publish Year :  </label>
                    <input type="text" className="form-control text-3xl" id="publishYearInputId" aria-describedby="emailHelp" placeholder="Enter email" style={{border:'1px solid black'}}/>
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
             </div>*/}
        </div>
    )
}

export default CreateBook;