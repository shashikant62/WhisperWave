import React from "react";
import {CiChat2,CiBellOn} from "react-icons/ci";
import {MdPeople} from "react-icons/md";
import { TbCircleDotted } from "react-icons/tb";
import { BsThreeDotsVertical } from "react-icons/bs";
const Navbar=()=>{
    return(<>
    <div className="Navbar_conatiner">
        <div className="Navbar_inside">
            <CiChat2 size={30}  className="icon-navbar"/>
            <MdPeople  size={30}  className="icon-navbar"/>
            <TbCircleDotted size={30} className="icon-navbar"/>
            <CiBellOn size={30}  className="icon-navbar"/>
            <BsThreeDotsVertical size={30}className="icon-navbar"/>
        </div>
    </div>
    </>)
}

export default Navbar;