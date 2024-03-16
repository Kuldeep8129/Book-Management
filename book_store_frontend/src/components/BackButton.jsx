import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
//import {useNavigate} from "react-router-dom";

const BackButton = ({destination = '/'}) => {

    //const navigate = useNavigate();
    //const goBack = () => navigate(-1);
  return (
    <div className='flex'>
     {/*<button onClick={goBack}>Go back</button>*/}
     <Link to = {destination} className='bg-sky-800 text-white px-4 py-1'>
        <BsArrowLeft className='text-2xl mr-3'/>
      </Link>
    </div>
  )
}

export default BackButton