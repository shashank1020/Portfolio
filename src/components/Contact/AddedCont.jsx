import React from 'react'
import '../../Assets/css/Ad.css'

import {BiPhone} from "react-icons/bi";
import {AiOutlineMail} from "react-icons/ai";


const AddedCont = () => {
    return (
        <div className='add_contact'>
            <div className='add_contact_div'>
                <div>
                    <BiPhone/><span style={{letterSpacing: "3px"}}>{"  "}7302803506</span>
                </div>
                <div>
                    <AiOutlineMail/><span style={{letterSpacing: "3px"}}>{"  "}shashankmaurya1020@gmail.com</span>
                </div>
            </div>
        </div>
    )
}

export default AddedCont