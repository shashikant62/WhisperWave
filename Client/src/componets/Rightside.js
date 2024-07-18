import React from "react";
import Rigthhead from "./Rigthhead";
import Rightbottom from './Rightbottom';
const Rightside=()=>{
    return(<>
    <div className="right_conatiner">
        <div className="inside_rightcontainer">
            <Rigthhead/>
            <Rightbottom/>
        </div>
    </div>
    </>)
}
export default Rightside;