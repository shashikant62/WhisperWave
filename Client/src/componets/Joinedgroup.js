import React from "react";
import Avatar from "react-avatar";
const Joinedgroup=({dpname})=>{
    return(<>
    <div className="joinedgroup_container">
    <Avatar name={dpname} round="10px" size="40px" fgColor="white" textSizeRatio="1.3" className="sb-avatar"></Avatar>
    <span className="avtar_name">{dpname}</span>
    </div>
    </>)
}

export default Joinedgroup;