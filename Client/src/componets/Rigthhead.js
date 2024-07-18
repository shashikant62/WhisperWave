import React from "react";
import {CiChat2,CiBellOn} from "react-icons/ci";
import { IoReorderTwoOutline } from "react-icons/io5";
import { BsSave2 } from "react-icons/bs";
import { IoPeopleOutline } from "react-icons/io5";
import { LuSaveAll } from "react-icons/lu";
import { IoPerson } from "react-icons/io5";
import { MdOutlineSaveAlt } from "react-icons/md";
const Rigthhead=()=>{
    return(<>
    <div className="Rigthhead_conatiner">
        <div className="inside_Rigthheadcontainer">
        <div className="left_righthead"> 
        <IoPerson size={26}  className="icon-righthead_left"/>
        <p className="name_rigthhead">Shashikant Borude</p> 
        </div> 
        <div className="right_righthead"> 
        <IoPeopleOutline  size={30}  className="icon-righthead"/>   
        < MdOutlineSaveAlt size={30}  className="icon-righthead"/>   
        <IoReorderTwoOutline size={30}  className="icon-righthead"/>  
        </div> 
        </div>
    </div>
    </>)
}

export default Rigthhead;