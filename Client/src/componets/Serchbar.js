import React from "react";
import { FiSearch } from "react-icons/fi";
const Serchbar=()=>{
    return(<>
    <div className="Serchbar_container">
        <div className="serchbar_inside">
        <input type="text" className="text_serbar"></input>
        <FiSearch className="serch_btn" size={33}/>
        </div>
    </div>
    </>)
}

export default Serchbar;