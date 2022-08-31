import React from 'react'
import '../../Assets/css/Ad.css'

import {BiPhone} from "react-icons/bi";
import {AiOutlineMail} from "react-icons/ai";
import {USER} from "../../Constants";


const AddedCont = () => {
    return (
        <div className='add_contact'>
            <div className='add_contact_div'>
                <div>
                    <BiPhone/><span style={{letterSpacing: "3px"}}>{"  "}{USER.phoneNo}</span>
                </div>
                <div>
                    <AiOutlineMail/><span style={{letterSpacing: "3px"}}>{"  "}{USER.email}</span>
                </div>
            </div>
        </div>
    )
}

export default AddedCont